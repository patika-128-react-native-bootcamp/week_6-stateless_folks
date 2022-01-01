import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "transparent",
  },
  bookmarkContainer: {
    height: Dimensions.get("window").height / 2.4,
    marginVertical: 20,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "rgba(196, 196, 196, 0.35)",
  },
  header: {
    fontSize: 27,
    fontWeight: "bold",
  },
});
