// eslint-disable-next-line @typescript-eslint/ban-types
export const isEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};
