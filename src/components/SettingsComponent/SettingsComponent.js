import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Button, Switch} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import styles from './SettingsComponent.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsComponent() {
  const {state, dispatch} = useContext(ThemeContext);
  const {colors} = useTheme();
  const [dark, setDark] = useState(false);

  async function darkTheme() {
    await AsyncStorage.setItem('theme', 'dark');
    dispatch({type: 'dark'});
  }
  async function lightTheme() {
    await AsyncStorage.setItem('theme', 'light');
    dispatch({type: 'light'});
  }
  //toggle-switch
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: colors.text}}>Change Theme</Text>
      </View>
      <View>
        {/* <Text style={{color: colors.text}}>Icon</Text>  */}
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={dark ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          // onValueChange={toggleSwitch}
          // value={dark}
        />
      </View>
      <Button onPress={darkTheme} title="dark" />
      <Button onPress={lightTheme} title="light" />
    </View>
  );
}
