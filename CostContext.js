import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dateTime } from "./utils";

const CostContext = createContext();

export function useCostContext() {
  const costContext = useContext(CostContext);
  return costContext;
}

export function useCostContextMethods() {
  const { setCosts } = useCostContext();
  const [form, setForm] = useState({});

  function curriedList(bananas, value) {
    return setForm((prev) => ({
      ...prev,
      [bananas]: value,
    }));
  }

  function curriedList(selected) {
    return setForm((prev) => ({
      ...prev,
      name: selected,
    }));
  }

  function curriedFunction(bananas) {
    return function mutate(value) {
      setForm((prev) => ({
        ...prev,
        [bananas]: value,
      }));
    };
  }

  ///tinkering below, original state is below x2:
  async function addCosts() {
    const rawExistingCostData = await AsyncStorage.getItem("costData");
    const existingCostData = JSON.parse(rawExistingCostData || "[]");
    // console.log(existingCostData); //err here ⭐
    const newForm = await sendDataToServer({
      ...form,
      date: dateTime(),
    });
    // console.log(newForm);

    setCosts((prev) => {
      // console.log(newForm); //why is this repsonding 3 times?
      // console.debug(existingCostData);
      existingCostData.push(newForm);

      return [...prev, newForm];
    });

    await AsyncStorage.setItem("costData", JSON.stringify(existingCostData));
    setForm({});
  }

  async function deleteCost(id) {
    const result = await deleteExpense(id);
    setCosts(result);
  }

  return {
    addCosts,
    curriedFunction,
    deleteCost,
    form,
    curriedList,
  };
}

export function CostProvider({ children }) {
  //add functions below:
  const [costs, setCosts] = useState([]);

  async function seedCostData() {
    const costData = await getCostData();
    setCosts(costData);
  }

  React.useEffect(() => {
    seedCostData();
  }, []);

  return <CostContext.Provider value={{ costs, setCosts }}>{children}</CostContext.Provider>;
}

export default CostContext;

/// for research > these are known as "CRUD"opperations
/// C - Create
/// R - Read
/// U - Update
/// D - Delete
/// all done through HTTP services/Ajax requests via RESTful services.
async function sendDataToServer(form) {
  // let bodyContent = JSON.stringify(form);
  /////////////////////

  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(form); //maybe in obj form?

  let response = await fetch("http://192.168.1.36:8888/api/costData", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  // console.log(data);
  return data;
}

async function getCostData() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch("http://192.168.1.36:8888/api/costData", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();

  return data;
}

export async function deleteExpense(id) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch(`http://192.168.1.36:8888/api/costData?id=${id}`, {
    method: "DELETE",
    headers: headersList,
  });

  let data = await response.json();

  return data;
}
