export const cutAddress = (str) => str.split(", ").slice(-2).join(" | ");

export const capitalize = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

export const formatingNum = (str) => `${str.toLocaleString("ru-RU")} km`;
