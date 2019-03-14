export const arrToMap = (arr) => {
  return arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
};
