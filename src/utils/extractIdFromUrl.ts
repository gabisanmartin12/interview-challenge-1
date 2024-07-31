export const extractIdFromUrl = (url: string): number => {
  return parseInt(url.slice(url.lastIndexOf("/") + 1));
};
