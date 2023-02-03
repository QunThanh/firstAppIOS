import { StyleSheet } from 'react-native';

import stylesGlobal from '~/stylesGlobal/stylesGlobal.js';
import { normalizeWidth } from '~/configs/normalize.js';

const styles = StyleSheet.create({
   backgroundModel: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   contentModel: {
      width: normalizeWidth(350),
      height: normalizeWidth(700),
      position: 'relative',
   },
   imgPopUp: {
      borderRadius: 20,
      width: '100%',
      height: '100%',
   },
   closeModel: {
      position: 'absolute',
      top: 10,
      right: 10,
   },
   // =======================
});

export default styles;
