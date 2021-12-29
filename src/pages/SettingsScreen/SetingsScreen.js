import React, { useContext, useEffect } from "react";
import { SafeAreaView, Text, Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import i18n from "../../language/i18n";

import styles from "./SettingsScreen.style";
import { DARK, LIGHT } from "../../context/ThemeContext/types";
import { useTheme } from "@react-navigation/native";
import SettingsCard from "../../components/Cards/SettingsCard/SettingsCard";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";
import theme from "../../styles/theme/theme";
import { useTranslation } from "react-i18next";

export default function SetingsScreen() {
  const { dispatch } = useContext(ThemeContext);
  const { colors } = useTheme();
  const [isDark, setIsDark] = React.useState(false);
  const [lang, setLang] = React.useState(true);
  const { t } = useTranslation();

  const getTheme = async () => {
    const theme = await AsyncStorage.getItem("theme");
    if (theme === DARK) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };
  useEffect(() => {
    getTheme();
  }, []);

  const toggleSwitch = (val) => {
    setIsDark(val);
    if (val) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  async function darkTheme() {
    await AsyncStorage.setItem("theme", DARK);
    dispatch({ type: DARK });
  }

  async function lightTheme() {
    await AsyncStorage.setItem("theme", LIGHT);
    dispatch({ type: LIGHT });
  }

  function changeLanguage() {
    setLang(!lang);
    i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}>
        Settings
      </Text>
      <SettingsCard
        titleStyle={{
          color: colors.text,
        }}
        title={t("Change Theme")}>
        <Icon
          name={isDark ? "weather-night" : "brightness-6"}
          size={30}
          color={colors.text}
        />
        <Switch
          trackColor={{ false: theme.MAIN_RED, true: "#999" }}
          value={isDark}
          onValueChange={toggleSwitch}
        />
      </SettingsCard>
      <SettingsCard
        titleStyle={{
          color: colors.text,
        }}
        title={t("Change Language")}>
        <Text style={[styles.language, { color: colors.text }]}>
          {i18n.language.toUpperCase()}
        </Text>
        <Switch
          value={lang}
          trackColor={{ false: theme.MAIN_RED, true: "#999" }}
          ios_backgroundColor="#3e3e3e"
          onChange={changeLanguage}
        />
      </SettingsCard>
    </SafeAreaView>
  );
}
