import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    height: deviceSize.height / 3,
    width: deviceSize.width,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  innerContainer: {
    backgroundColor: "rgba(0,0,0,0.15)",
    width: deviceSize.width,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 40,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
  line: {
    width: 90,
    height: 4,
    backgroundColor: "white",
    marginVertical: 20,
  },
});

export default styles;
