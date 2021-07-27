export const getRandomId = (str: string): string => {
  let len = str.length;
  let id = Math.floor(Math.random() * 100 * len).toString();

  return id;
};
