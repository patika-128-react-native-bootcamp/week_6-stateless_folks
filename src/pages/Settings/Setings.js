import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import ThemeProvider, {
  ThemeContext,
} from '../../context/ThemeContext/ThemeProvider';

export default function Settings() {
  const {state, dispatch} = useContext(ThemeContext);

  function darkTheme() {
    dispatch({type: 'dark'});
  }
  function lightTheme() {
    dispatch({type: 'light'});
  }
  return (
    <View>
      <Button onPress={darkTheme} title="dark" />
      <Button onPress={lightTheme} title="light" />
      <Text>{state.theme}</Text>
    </View>
  );
}
