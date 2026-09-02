import { toPng, toBlob } from 'html-to-image';

export async function exportCardAsPng(element: HTMLElement, filename: string): Promise<void> {
  try {
    const dataUrl = await toPng(element, {
      pixelRatio: 2,
      backgroundColor: '#07080d',
      width: 1080,
      height: 1920,
      skipFonts: true,
      cacheBust: false,
    });

    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = dataUrl;
    link.click();
  } catch (err) {
    console.error('Export card failed:', err);
  }
}

export async function copyCardToClipboard(element: HTMLElement): Promise<boolean> {
  try {
    const blob = await toBlob(element, {
      pixelRatio: 2,
      backgroundColor: '#07080d',
      width: 1080,
      height: 1920,
      skipFonts: true,
      cacheBust: false,
    });

    if (blob && navigator.clipboard && typeof ClipboardItem !== 'undefined') {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      return true;
    }
    return false;
  } catch (err) {
    console.warn('Copy card to clipboard failed:', err);
    return false;
  }
}

export async function shareCard(element: HTMLElement, title: string): Promise<void> {
  try {
    const blob = await toBlob(element, {
      pixelRatio: 2,
      backgroundColor: '#07080d',
      width: 1080,
      height: 1920,
      skipFonts: true,
      cacheBust: false,
    });

    if (blob && navigator.share) {
      const file = new File([blob], `${title}.png`, { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `My ${title} - 4Soha`,
          files: [file],
        });
        return;
      }
    }
    // Fallback to download
    await exportCardAsPng(element, title);
  } catch {
    await exportCardAsPng(element, title);
  }
}
