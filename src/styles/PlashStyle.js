import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../consts/color';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
