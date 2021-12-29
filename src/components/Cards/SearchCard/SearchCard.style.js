import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(196, 196, 196, 0.35)",
    flexDirection: "row",
    marginVertical: 20,
  },
  thumbnail: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 120,
    height: 120,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  description: {
    fontSize: 15,
    color: "#fff",
  },
});

export default styles;
