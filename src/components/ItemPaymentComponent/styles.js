import { StyleSheet } from 'react-native';
import stylesGlobal from '~/stylesGlobal/stylesGlobal.js';

const styles = StyleSheet.create({
   wrapper: {
      position: 'relative',
      flexDirection: 'row',
      margin: 5,
      alignItems: 'center',
      backgroundColor: 'yellow',
   },
   icon: {
      width: 40,
      height: 40,
      margin: 5,
   },
   wrapperInfor: {
      marginLeft: 5,
      nameCard: { fontWeight: '700' },
      numCard: { fontWeight: '500', color: stylesGlobal.color.backgroundBlurGrey },
   },
   detailIcon: {
      position: 'absolute',
      right: 5,
      width: 30,
      height: 30,
   },
});

export default styles;
