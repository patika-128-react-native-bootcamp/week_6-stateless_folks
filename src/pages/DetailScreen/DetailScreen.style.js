import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    zIndex: 0,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
    height: Dimensions.get("window").height / 2,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    overflow: "hidden",
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
  },
});

export default styles;
