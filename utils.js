export const dateTime = function () {
  const fullDate = new Date();
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  const date = `${year}-${month}-${day}`;
  return date.toString();
};

export const joinArrays = function (namesArr, items) {
  const [...newArr] = items.filter((el) => {
    return el.name == namesArr;
  });
  // return console.log(...newArr);
  return newArr;
};

export const addCostsReduce = function (totalCosts) {
  if (totalCosts.length > 1) {
    const balance = totalCosts.reduce((acc, mov) => +acc + +mov.costPrice, 0);
    // const balance = totalCosts.map((cost) => cost.price);
    return balance;
  } else {
    return totalCosts[0].costPrice;
  }
};
