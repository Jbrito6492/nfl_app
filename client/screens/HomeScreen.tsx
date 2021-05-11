import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Modal from "../components/Modal";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {modalVisible ? (
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      ) : (
        <>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ textAlign: "center" }}>Directions</Text>
          </Pressable>
          <EditScreenInfo path="/screens/HomeScreen.tsx" />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    width: 100,
  },
});
