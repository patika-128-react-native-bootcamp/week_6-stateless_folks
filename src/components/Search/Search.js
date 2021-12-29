import { useTheme } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, TextInput } from "react-native";

import IconButton from "../../components/Buttons/IconButton";
import theme from "../../styles/theme/theme";

import styles from "./Search.style";

function Search({ onSearch, size = 25, placeholder, onPress, icon, ...rest }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              color: colors.text,
            },
          ]}
          placeholder={placeholder}
          onChangeText={onSearch}
          placeholderTextColor="#949494"
          {...rest}
        />
        <IconButton onPress={onPress} icon="magnify" size={size} />
      </View>
    </View>
  );
}

export default Search;
