import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    width: 175,
    height: 199,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 10,
  },
  comicName: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  comicDetail: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
  gradientBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
