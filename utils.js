export const dateTime = function () {
  const fullDate = new Date();
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  const date = `${year}-${month}-${day}`;
  return date.toString();
};
