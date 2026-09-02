import React, { useEffect, useRef } from 'react';
import { audioEngine } from '../../services/audioEngine';
import { usePlayerStore } from '../../stores/usePlayerStore';

export type VisualizerMode = 'bars' | 'wave' | 'nebula';

interface VisualizerCanvasProps {
  mode?: VisualizerMode;
  className?: string;
  barColor?: string;
}

export const VisualizerCanvas: React.FC<VisualizerCanvasProps> = ({
  mode = 'bars',
  className = 'w-full h-full',
  barColor
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isPlaying } = usePlayerStore();
  const peaksRef = useRef<number[]>([]);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;

    const render = () => {
      animId = requestAnimationFrame(render);

      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.offsetWidth;
      const displayHeight = canvas.offsetHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const freqData = audioEngine.getFrequencyData();
      const waveData = audioEngine.getWaveformData();

      const accent = barColor || getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim() || '#f43f5e';

      phase += 0.03;

      if (mode === 'bars') {
        const barCount = Math.min(40, Math.floor(displayWidth / 9));
        const barWidth = Math.max(4, (displayWidth / barCount) - 3);
        const step = Math.floor(freqData.length / barCount);

        if (peaksRef.current.length !== barCount) {
          peaksRef.current = new Array(barCount).fill(0);
        }

        const totalWidth = barCount * (barWidth + 3);
        const startX = (displayWidth - totalWidth) / 2;

        for (let i = 0; i < barCount; i++) {
          const rawVal = freqData[i * step] || 0;
          const idleVal = Math.sin(phase + i * 0.25) * 12 + 18;
          const val = isPlaying ? Math.max(rawVal * 0.85, idleVal) : idleVal;

          const barHeight = Math.max(4, Math.min(displayHeight - 8, (val / 255) * (displayHeight * 0.88)));
          const x = startX + i * (barWidth + 3);
          const y = displayHeight - barHeight - 4;

          // Peak falloff physics
          if (val > peaksRef.current[i]) {
            peaksRef.current[i] = val;
          } else {
            peaksRef.current[i] = Math.max(0, peaksRef.current[i] - 1.8);
          }

          // Bar Gradient fill
          const grad = ctx.createLinearGradient(0, displayHeight, 0, y);
          grad.addColorStop(0, `${accent}30`);
          grad.addColorStop(0.6, `${accent}99`);
          grad.addColorStop(1, '#ffffff');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 1, 1]);
          ctx.fill();

          // Peak cap indicator
          const peakY = displayHeight - ((peaksRef.current[i] / 255) * (displayHeight * 0.88)) - 7;
          ctx.fillStyle = accent;
          ctx.shadowColor = accent;
          ctx.shadowBlur = 6;
          ctx.fillRect(x, Math.max(2, peakY), barWidth, 2);
          ctx.shadowBlur = 0;
        }
      } else if (mode === 'wave') {
        // Ambient Wave Gradient
        ctx.beginPath();
        const sliceWidth = displayWidth / waveData.length;
        let x = 0;

        ctx.moveTo(0, displayHeight / 2);
        for (let i = 0; i < waveData.length; i++) {
          const v = waveData[i] / 128.0;
          const idleWave = Math.sin(phase + i * 0.08) * 10;
          const y = isPlaying ? (v * displayHeight) / 2 : (displayHeight / 2) + idleWave;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          x += sliceWidth;
        }

        ctx.lineWidth = 3;
        ctx.strokeStyle = accent;
        ctx.shadowColor = accent;
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Secondary soft harmonic wave
        ctx.beginPath();
        x = 0;
        for (let i = 0; i < waveData.length; i++) {
          const v = waveData[i] / 128.0;
          const harmonic = Math.cos(phase * 1.5 + i * 0.05) * 8;
          const y = isPlaying ? ((v * displayHeight) / 2) + harmonic : (displayHeight / 2) - harmonic;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          x += sliceWidth;
        }
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = `${accent}60`;
        ctx.stroke();
      } else if (mode === 'nebula') {
        const centerX = displayWidth / 2;
        const centerY = displayHeight / 2;
        const baseRadius = Math.min(displayWidth, displayHeight) * 0.26;
        const points = 64;

        // Outer Glow Ring
        ctx.beginPath();
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2 + (phase * 0.4);
          const freqVal = freqData[i % freqData.length] || 0;
          const offset = isPlaying ? (freqVal / 255) * 36 : Math.sin(phase + i * 0.3) * 8;
          const r = baseRadius + offset;

          const px = centerX + Math.cos(angle) * r;
          const py = centerY + Math.sin(angle) * r;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = accent;
        ctx.shadowColor = accent;
        ctx.shadowBlur = 16;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.fillStyle = `${accent}20`;
        ctx.fill();

        // Inner Core Pulse
        const coreRadius = Math.max(10, (freqData[2] || 30) * 0.18);
        ctx.beginPath();
        ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${accent}80`;
        ctx.fill();
      }

      ctx.restore();
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [mode, isPlaying, barColor]);

  return <canvas ref={canvasRef} className={className} />;
};
