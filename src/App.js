import React, {useState, useEffect} from 'react';
import {View, Text, Appearance, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import useMarvelData from './hooks/ApiHelperHook';
import Settings from './pages/SettingsScreen';
import ThemeProvider from './context/ThemeContext/ThemeProvider';
import Navigation from './navigation';

/**
 * Selamlar. Bu ödevde sizden Marvel API'nı kullanarak bir uygulama yapmanız isteniyor.
 * Uygulama içerisinde kullanıcı kahraman adına göre arama yapabilecek, Marvel çizgi romanlarının listesine
 * erişim sağlayabilecek ve ilgili çizgi romanda yer alan kahramanların listesini görebilecek. Kullanıcı eğer isterse
 * sevdiği çizgi romanı ya da kahramanı favorilerine alabilecek. Favoriye aldığı öğeyi uygulamaya geri girdiğinde de görebilecek.
 * Bu ister için AsyncStorage paketini kullanabilirsiniz. Uygulama içinde gece gündüz modu ve dil desteği de isteniyor. Bunun için
 * bir Ayarlar sayfası eklenebilir. Gece gündüz modunun default değerini telefonun ayarlarından tespit edilip belirlenmesi önemli bir ister.
 *
 * Marvel API: https://developer.marvel.com/
 * AsyncStorage: https://react-native-async-storage.github.io/async-storage/docs/install/
 *
 * ## Dil desteği için opsiyonel ##
 * React i18next: https://react.i18next.com/
 *
 * Başarılar..
 */

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('asd', 'hicabi');
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('asd');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  const [parameter, setParameter] = useState(null);
  useEffect(() => setParameter('characters'), []);
  const {data, loading, error} = useMarvelData(parameter);

  return (
    <View style={{flex: 1}}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </View>
  );
}
