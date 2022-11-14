export const dateTime = function () {
  const fullDate = new Date();
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  const date = `${year}-${month}-${day}`;
  return date.toString();
};

export const filterArrays = function (namesArr, items) {
  const [...newArr] = items.filter((el) => {
    return el.name == namesArr;
  });

  return newArr;
};
//////////////////////////////////////////////////////////////
export const addCostsReduceArr = function (totalCosts) {
  if (totalCosts.length > 1) {
    const balance = totalCosts.reduce((acc, mov) => +acc + +mov.costPrice, 0);

    return balance;
  } else if ((totalCosts.length = 1)) {
    return totalCosts[0].costPrice;
  } else {
    console.log(`There are no costs`);
  }
};

export const addSalesReduceArr = function (totalSales) {
  if (totalSales.length > 1) {
    const balance = totalSales.reduce((acc, mov) => +acc + +mov.salesPrice, 0);

    return balance;
  } else if ((totalSales.length = 1)) {
    return totalSales[0].salesPrice;
  } else {
    console.log(`There are no sales`);
  }
};
//////////////////////////////////////
// export const addArr = function (total) {

//   if (totalCosts && totalCosts.length > 1){totalCosts.reduce((acc, mov) => +acc + +mov.costPrice, 0)};
//   if (totalCosts && totalCosts.length == 1){totalCosts[0].costPrice};
//   if (totalSales && totalSales.length > 1){
//     totalSales.reduce((acc, mov) => +acc + +mov.salesPrice, 0)
//   };
//   if (totalSales && totalSales.length == 1){
//     totalSales[0].salesPrice;
//   };
//   if (!totalSales || !totalCosts) return;
// }
// if (totalCosts.length > 1) {totalCosts.reduce((acc, mov) => +acc + +mov.costPrice, 0);}

//     const balance = totalCosts.reduce((acc, mov) => +acc + +mov.costPrice, 0);
//     // const balance = totalCosts.map((cost) => cost.price);
//     return balance;
//   } else if ((totalCosts.length = 1)) {
//     return totalCosts[0].costPrice;
//   } else {
//     console.log(`There are no costs`);
//   }
// };
