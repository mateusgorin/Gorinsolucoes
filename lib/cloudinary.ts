/**
 * Cloudinary image URL and srcset helper for optimized delivery
 */

export function buildCloudinaryUrl(publicIdOrUrl: string, width: number): string {
  if (!publicIdOrUrl) return '';
  if (publicIdOrUrl.startsWith('https://res.cloudinary.com/')) {
    // Replace existing transformation with optimized f_auto,q_auto,c_limit,w_WIDTH
    return publicIdOrUrl.replace(
      /\/upload\/(?:[^\/]+\/)?/,
      `/upload/f_auto,q_auto,c_limit,w_${width}/`
    );
  }
  if (publicIdOrUrl.startsWith('http://') || publicIdOrUrl.startsWith('https://') || publicIdOrUrl.startsWith('/')) {
    return publicIdOrUrl;
  }
  return `https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto,c_limit,w_${width}/${publicIdOrUrl}`;
}

export function buildCloudinarySrcSet(publicIdOrUrl: string, widths: [number, number]): string {
  if (!publicIdOrUrl) return '';
  if (!publicIdOrUrl.includes('cloudinary.com') && (publicIdOrUrl.startsWith('/') || publicIdOrUrl.startsWith('.'))) {
    return '';
  }
  return `${buildCloudinaryUrl(publicIdOrUrl, widths[0])} ${widths[0]}w, ${buildCloudinaryUrl(publicIdOrUrl, widths[1])} ${widths[1]}w`;
}
