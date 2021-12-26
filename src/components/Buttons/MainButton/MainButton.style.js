import { StyleSheet } from "react-native";

import theme from "../../../styles/theme/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.MAIN_RED,
    padding: 8,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
