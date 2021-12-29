import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginVertical: 10,
  },
  inputContainer: {
    paddingVertical: 5,
    padding: 10,
    paddingRight: 50,
    flexDirection: "row",
    backgroundColor: "rgba(196, 196, 196, 0.35)",

    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    overflow: "hidden",
  },
  input: {
    width: "100%",
    height: "100%",
    fontSize: 18,
  },
});

export default styles;
