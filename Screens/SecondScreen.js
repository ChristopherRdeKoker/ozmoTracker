import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Modal } from "react-native";
import AddMeButton from "./components/CostComponents/AddMeButton";
import { useState, useContext } from "react";
import CostRenderedList from "./components/CostComponents/CostRenderedList";
import { costData } from "../costData"; //is needed?
import CostContext from "../CostContext";
import CostFillinForm from "./components/CostComponents/CostFillinForm";
export default function SecondScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const onOpenModal = () => setModalVisible(true);

  const { addCost } = useContext(CostContext); //implemented but never used?

  return (
    <View style={styles.container}>
      <View style={styles.addMeButtonContainer}>
        <Modal animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View>
            <CostFillinForm />
          </View>
        </Modal>
        <AddMeButton onOpen={onOpenModal} />
      </View>
      <View style={styles.renderedListContainer}>
        <CostRenderedList data={costData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F33A6A",
    // borderWidth: 2,
    // borderColor: "#ccc",
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
    backgroundColor: "#FFC0CB",
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
    width: "97%",
    minWidth: "95%",
    backgroundColor: "#89CFF0",
    borderColor: "#28282B",
    borderRadius: 10,
    marginBottom: 20,
  },
  clickMe: {
    fontSize: 22,
    borderWidth: 3,
    borderColor: "grey",
    paddingLeft: "10%",
    width: "85%",
    marginLeft: 30,
    marginTop: 25,
    borderRadius: 10,
    // backgroundColor: "#A3EFAB",
    backgroundColor: "#EFA3B5",
    height: 70,
  },
});
