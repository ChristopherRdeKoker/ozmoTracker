import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import SalesButton from "./components/SalesComponents/SalesAddButton.js";
import { useState } from "react";
import SalesRenderedList from "./components/SalesComponents/SalesRenderedList.js";
import { salesData } from "../SalesContext";
import SalesFillinForm from "./components/SalesComponents/SalesFillinForm.js";

export default function ThirdScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const onOpenModal = () => setModalVisible(true);

  return (
    <View style={styles.container}>
      <View style={styles.addMeButtonContainer}>
        <Modal animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View>
            {/* <Text> Hey Modal it up in da house! Add sales</Text> */}
            <SalesFillinForm />
          </View>
        </Modal>
        <SalesButton onOpen={onOpenModal} />
      </View>
      <View style={styles.renderedListContainer}>
        <SalesRenderedList data={salesData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18a558",
    borderWidth: 2,
    borderColor: "#ccc",
    height: "100%",
    alignItems: "center",
    paddingTop: 40,

    justifyContent: "flex-start",
  },
  addMeButtonContainer: {
    height: 150,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a3ebb1",
    borderColor: "#28282B",
    borderWidth: 4,
    marginVertical: 10,
    borderRadius: 150,
    // paddingTop: 40,
    marginBottom: 40,
  },

  renderedListContainer: {
    flex: 1,
    borderWidth: 4,
    minHeight: 200,
    minWidth: "95%",
    backgroundColor: "#89CFF0",
    borderColor: "#28282B",
    borderRadius: 10,
    marginBottom: 20,
  },
});
