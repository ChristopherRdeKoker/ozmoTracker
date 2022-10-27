import { createContext, useState } from "react";

const SalesContext = createContext();
//////////////data
const salesData = [
  {
    id: 1,
    name: "Shampoo1sale",
    salePrice: 250, //was 125
    quantity: 1,
    date: "2022-10-21",
  },
  {
    id: 2,
    name: "Shampoo2BBBB",
    salePrice: 250, //was 125
    quantity: 2,
    date: "2022-10-29",
  },
  {
    id: 3,
    name: "Shampoo2mahni",
    salePrice: 129, //was 125
    quantity: 1,
    date: "2022-10-24",
  },
  {
    id: 4,
    name: "ShamsnoopyDoge",
    salePrice: 115, //was 125
    quantity: 1,
    date: "2022-10-04",
  },
  {
    id: 5,
    name: "ConditionerWhato2",
    salePrice: 315, //was 125
    quantity: 2,
    date: "2022-10-13",
  },
];

export function SalesProvider({ children }) {
  return <SalesContext.Provider value={{ salesData }}>{children}</SalesContext.Provider>;
}
export default SalesContext;
