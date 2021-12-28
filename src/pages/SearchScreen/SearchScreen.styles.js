import {StyleSheet} from 'react-native';
import theme from '../../styles/theme/theme';

export default StyleSheet.create({
  container: {
    height: 60,
    marginHorizontal: 20,
    marginVertical: 9,
    borderWidth: 1,

    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  input: {height: 40, marginLeft: 10, fontSize: 20, color: theme.MAIN_WHITE},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: theme.MAIN_DARK_GRAY,
    borderRadius: 10,
    padding: 10,
  },
  button: {backgroundColor: 'white', height: 40},
});
