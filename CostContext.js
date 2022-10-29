import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dateTime } from "./utils";

import { costData } from "./costData";

const CostContext = createContext();

export function useCostContext() {
  const costContext = useContext(CostContext);
  return costContext;
}

export function useCostContextMethods() {
  const { setCosts } = useCostContext();
  const [form, setForm] = useState({});

  function curriedFunction(bananas) {
    return function mutate(value) {
      setForm((prev) => ({
        ...prev,
        [bananas]: value,
      }));
    };
  }

  async function addCosts() {
    const rawExistingCostData = await AsyncStorage.getItem("costData");
    const existingCostData = JSON.parse(rawExistingCostData);

    setCosts((prev) => {
      const newForm = { ...form, id: prev.length + 1, date: dateTime() };
      existingCostData.push(newForm);

      return [...prev, newForm];
    });
    await AsyncStorage.setItem("costData", JSON.stringify(existingCostData));
    setForm({});
  }

  return {
    addCosts,
    curriedFunction,
    form,
  };
}

export function CostProvider({ children }) {
  //add functions below:
  const [costs, setCosts] = useState([]);

  async function seedCostData() {
    const existingData = await AsyncStorage.getItem("costData");
    if (!existingData || JSON.parse(existingData).length === 0) {
      await AsyncStorage.setItem("costData", JSON.stringify(costData));
    }
    const asyncCostData = await AsyncStorage.getItem("costData");
    setCosts(JSON.parse(asyncCostData));
  }

  React.useEffect(() => {
    seedCostData();
  }, []);

  return <CostContext.Provider value={{ costs, setCosts }}>{children}</CostContext.Provider>;
}
export default CostContext;
