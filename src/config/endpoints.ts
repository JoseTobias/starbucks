export default {
  stores: {
    get: 'stores',
  },
  menu: {
    get: (id: number): string => `menu?id=${id}`,
  },
};
