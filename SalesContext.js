import React, { createContext, useState, useContext, useEffect } from "react";
// import { salesData } from "./salesData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dateTime } from "./utils";
// import { deleteExpense } from "./CostContext";

const SalesContext = createContext();

export function useSalesContext() {
  const salesContext = useContext(SalesContext);
  return salesContext;
}

export function useSalesContextMethods() {
  const { setSales } = useSalesContext();
  const [form, setForm] = useState({});

  function curriedList2(selected) {
    return setForm((prev) => ({
      ...prev,
      name: selected,
    }));
  }
  function curriedFunction2(oranges) {
    return function mutate(value) {
      setForm((prev) => ({
        ...prev,
        [oranges]: value,
      }));
    };
  }

  async function addSales() {
    const rawExistingSalesData = await AsyncStorage.getItem("salesData"); //wont work since hardcoded data atm
    const existingSalesData = JSON.parse(rawExistingSalesData || "[]");

    const newForm = await sendDataToServer2({
      ...form,
      date: dateTime(),
    });

    setSales((prev) => {
      existingSalesData.push(newForm);
      return [...prev, newForm];
    });
    await AsyncStorage.setItem("salesData", JSON.stringify(existingSalesData));
    setForm({});
  }

  async function handleDeleteSales(id) {
    const result = await deleteSales(id);
    setSales(result);
  }

  return {
    addSales,
    curriedFunction2,
    deleteSales: handleDeleteSales,
    form, //might throw err with same name, consider "form2"
    curriedList2,
  };
}

export function SalesProvider({ children }) {
  //yolo functions below
  const [sales, setSales] = useState([]);

  async function seedSalesData() {
    const salesData = await getSalesData();
    setSales(salesData);
  }

  React.useEffect(() => {
    seedSalesData();
  }, []);

  return <SalesContext.Provider value={{ sales, setSales }}>{children}</SalesContext.Provider>;
}

export default SalesContext;

/// for research > these are known as "CRUD"opperations x2 boooooi
/// C - Create
/// R - Read
/// U - Update
/// D - Delete
/// all done through HTTP services/Ajax requests via RESTful services.

async function sendDataToServer2(form) {
  // let bodyContent = JSON.stringify(form);
  /////
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(form);

  let response = await fetch("http://192.168.1.36:8888/api/saleData", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

async function getSalesData() {
  /////
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch("http://192.168.1.36:8888/api/saleData", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

export async function deleteSales(id) {
  ////
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch(`http://192.168.1.36:8888/api/saleData?id=${id}`, {
    method: "DELETE",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

////////////////////////
