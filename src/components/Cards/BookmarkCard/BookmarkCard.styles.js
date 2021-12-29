import {StyleSheet} from 'react-native';
import theme from '../../../styles/theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.MAIN_GRAY,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 23,
    justifyContent: 'space-between',
  },
  image: {width: 100, height: 100},
  cardContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  title: {
    fontSize: 35,
    marginVertical: 10,
  },
  detailHeader: {
    fontSize: 33,
  },
  detailText: {fontSize: 20},
});
