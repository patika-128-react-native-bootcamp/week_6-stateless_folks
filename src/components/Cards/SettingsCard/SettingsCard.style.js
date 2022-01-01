import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(196, 196, 196, 0.35)",
    padding: 20,
    marginVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
