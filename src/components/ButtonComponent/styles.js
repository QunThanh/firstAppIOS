import { StyleSheet } from 'react-native';
import { normalizeWidth } from '~/configs/normalize.js';
import stylesGlobal from '~/stylesGlobal/stylesGlobal.js';

const styles = StyleSheet.create({
   text: {
      padding: 8,
      fontSize: 16,
      lineHeight: 21,
      fontWeight: '600',
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
   },

   hasIconBackground: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      width: 'auto',
      height: 'auto',
      leftIcon: {
         marginLeft: 10,
         width: normalizeWidth(15),
         height: normalizeWidth(15),
      },
      rightIcon: {
         marginRight: 10,
         width: normalizeWidth(15),
         height: normalizeWidth(15),
      },
   },
   iconBackground: {
      flex: 1,
      width: normalizeWidth(30),
      height: normalizeWidth(30),
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: stylesGlobal.color.white,
      icon: {
         width: normalizeWidth(20),
         height: normalizeWidth(20),
         color: stylesGlobal.color.black,
      },
   },
});

export default styles;
