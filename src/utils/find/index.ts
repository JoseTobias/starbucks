/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const findIndex = (
  array: Array<any>,
  key: string,
  find: any
): number => {
  return array.findIndex((object) => object[key] === find);
};
