import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  emptyContainer: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default styles;
