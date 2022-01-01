import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundContainer: {
    marginHorizontal: 12,
    borderRadius: "50%",
    width: 140,
    height: 140,
    borderRadius: 140,
    overflow: "hidden",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  title: {
    width: "100%",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    // marginBottom: 23,
  },

  gradientBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default styles;
