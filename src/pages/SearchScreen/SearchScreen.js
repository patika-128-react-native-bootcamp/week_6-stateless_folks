import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './SearchScreen.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useMarvelData from '../../hooks/ApiHelperHook/useMarvelData';

export default function SearchScreen() {
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const {data, isLoading, error} = useMarvelData(searchTerm, true); //api çağırma parametresini değiştirmek zorunda kaldım
  function handleSearch() {
    setSearchTerm('characters?name=' + text);
  }
  console.log(data && data.data.results); //veri burdan geliyor kullanabilirsin.
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.icon}>
          <Icon
            name={'account-search-outline'}
            size={30}
            color={styles.input.color}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          autoFocus={true}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleSearch}>
          <Text>Search Hero</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
