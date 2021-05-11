import * as React from "react";
import { Modal, StyleSheet, View, Pressable } from "react-native";
import { MonoText } from "./StyledText";
import { Text } from "./Themed";

type ModalProps = {
  setModalVisible: Function;
  modalVisible: boolean;
};

export default function CustomModal({
  setModalVisible,
  modalVisible,
}: ModalProps): React.ReactElement {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <MonoText style={styles.modalHeader}>Directions</MonoText>
              <MonoText style={styles.modalText}>
                press the logo of the team you predict to win this weekend.
              </MonoText>
              <MonoText style={styles.modalText}>
                if you suspect a tie then do not select a team
              </MonoText>
              <MonoText style={[styles.modalText, styles.centerText]}>Enjoy!</MonoText>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ textAlign: "center" }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    width: 100,
  },
  modalText: {
    marginBottom: 15,
  },
  modalHeader: {
    marginBottom: 15,
    textAlign: "center",
  },
  centerText: {
    textAlign: "center",
  }
});
