import { StyleSheet } from 'react-native';
import stylesGlobal from '~/stylesGlobal/stylesGlobal.js';

const styles = StyleSheet.create({
   wrapper: {
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: 5,
      padding: 5,
      borderRadius: 10,
      backgroundColor: '#eee',
   },
   wrapperHeader: {
      flexDirection: 'row',
      alignItems: 'center',
   },

   icon: {
      width: 40,
      height: 40,
      margin: 5,
   },
   wrapperTextHeader: {
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

   wrapperTextDetail: {
      flexDirection: 'column',
      padding: 5,
      paddingLeft: 57,
   },
});

export default styles;
