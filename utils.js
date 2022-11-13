export const dateTime = function () {
  const fullDate = new Date();
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  const date = `${year}-${month}-${day}`;
  return date.toString();
};

export const joinArrays = function (namesArr, items) {
  const newArr = items.filter((el) => {
    return el.name == namesArr;
  });
  return console.log(newArr);
};
