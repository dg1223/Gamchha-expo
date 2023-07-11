// eslint-disable-next-line no-unused-vars
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container} testID="container">
      <Text>
        Be the best <Text style={styles.gamchhaText}>Gamchha</Text> that you can
        ever be...
      </Text>
    </View>
  );
};

// Color pallette
// error  Color literal: { backgroundColor: '#fff' }  react-native/no-color-literals
const WHITE_COLOR = "#fff";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: WHITE_COLOR,
    flex: 1,
    justifyContent: "center",
  },
  gamchhaText: {
    fontWeight: "bold",
    color: "red",
    fontSize: 18,
  },
});

// module.exports = App;
export default App;
