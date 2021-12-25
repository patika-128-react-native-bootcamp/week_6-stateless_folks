import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import themes from '../../styles/theme/theme';
import SettingsComponent from '../../components/SettingsComponent';
import {useTheme} from '@react-navigation/native';
export default function SetingsScreen() {
  return (
    <View>
      <SettingsComponent />
    </View>
  );
}
