// eslint-disable-next-line no-unused-vars
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container} testID="container">
      <Text>
        <Text style={styles.baseText}>Be the best </Text>
        <Text style={styles.gamchhaText} inline={true}>
          Gamchha&nbsp;
        </Text>
        <Text style={styles.baseText} inline={true}>
          that you can ever be...
        </Text>
      </Text>
    </View>
  );
};

const WHITE_COLOR = "#fff";
const RED_COLOR = "red";

const styles = StyleSheet.create({
  baseText: {
    fontSize: 18,
  },
  container: {
    alignItems: "center",
    backgroundColor: WHITE_COLOR,
    flex: 1,
    justifyContent: "center",
  },
  gamchhaText: {
    color: RED_COLOR,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
