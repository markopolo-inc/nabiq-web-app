export const extractMainDomain = (url: string): string => {
  // Remove protocol (http://, https://) if present
  const cleanedUrl: string = url?.replace(/^(https?:|)\/\//, '');

  // Extract the domain and remove subdomains
  const match: RegExpMatchArray | null = cleanedUrl?.match(/(?:[^./]+\.)?([^./]+\.[^./]+)/);

  // Return the main domain
  return match ? match?.[1] : url;
};
