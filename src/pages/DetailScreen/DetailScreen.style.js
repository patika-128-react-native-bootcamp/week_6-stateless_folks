import { Dimensions, StyleSheet } from "react-native";
import theme from "../../styles/theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    zIndex: 0,
  },
  image: {
    paddingTop: 20,
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
  favoriteContainer: {
    padding: 10,
  },
  favoriteIcon: {
    padding: 10,
  },
  indicator: {
    backgroundColor: theme.MAIN_GRAY,
    width: 120,
    height: 10,
    borderRadius: 50,
  },
  bottomSheetBackground: {
    borderRadius: 50,
    overflow: "hidden",
  },
});

export default styles;
