export const formatString = (str: string, ...args: string[]) => {
  return str.replace(/{([0-9]+)}/g, function (match, index) {
    return typeof args[index] === "undefined" ? match : args[index];
  });
};
