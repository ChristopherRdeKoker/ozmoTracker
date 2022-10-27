import { createContext, useState } from "react";

const CostContext = createContext();
//////////////data
const costData = [
  { id: 1, name: "ShampooCCC", costPrice: 125, quantity: 3, date: "2022-10-15" },
  {
    id: 2,
    name: "Shampoo2",
    costPrice: 150,
    quantity: 3,
    date: "2022-10-18",
  },
  {
    id: 3,
    name: "Conditioner1",
    costPrice: 200,
    quantity: 2,
    date: "2022-10-20",
  },
  {
    id: 4,
    name: "Conditioner4",
    costPrice: 250,
    quantity: 1,
    date: "2022-10-02",
  },
  {
    id: 5,
    name: "Mask",
    costPrice: 75,
    quantity: 6,
    date: "2022-10-07",
  },
  {
    id: 6,
    name: "Juicy Mask",
    costPrice: 79,
    quantity: 4,
    date: "2022-10-14",
  },
  {
    id: 7,
    name: "KittyMilk",
    costPrice: 50,
    quantity: 2,
    date: "2022-10-18",
  },
  {
    id: 8,
    name: "MorningTears",
    costPrice: 150,
    quantity: 4,
    date: "2022-10-22",
  },
  { id: 9, name: "hmm", costPrice: 199, quantity: 2, date: "2022-10-31" },
];

export function CostProvider({ children }) {
  //add functions below:
  const [costs, setCosts] = useState(costData);

  const addCost = (name, costPrice, quantity, date, id) => {
    return setCosts((prevState) => [...prevState, { name, costPrice, quantity, date, id }]);
  };
  return <CostContext.Provider value={{ costs, addCost }}>{children}</CostContext.Provider>;
}
export default CostContext;
