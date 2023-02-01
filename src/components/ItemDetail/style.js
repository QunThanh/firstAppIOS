import { StyleSheet } from 'react-native';

import stylesGlobal from '~/stylesGlobal/stylesGlobal.js';
import { normalizeWidth, normalizeHeight } from '~/configs/normalize.js';

const styles = StyleSheet.create({
   buttonBack: {
      position: 'absolute',
      top: normalizeWidth(50),
      right: normalizeHeight(10),
      zIndex: 99,
   },

   //CSS topUI
   banner: {
      width: '100%',
      height: 200,
      imgBackground: { width: '100%', height: '100%' },
      textNotion: {
         position: 'absolute',
         top: 50,
         left: 20,
         padding: 8,
         borderRadius: 50,
         backgroundColor: stylesGlobal.color.backgroundGold,
         text: {
            fontSize: 15,
            fontWeight: '700',
            color: stylesGlobal.color.white,
         },
      },
   },
   boxInforArtist: {
      flex: 1,
      alignItems: 'center',
      borderTopWidth: 4,
      borderTopColor: stylesGlobal.color.backgroundBlurGrey,
      //avatar
      imgAvatar: {
         position: 'absolute',
         transform: [{ translateY: -35 }],
         borderRadius: 50,
         borderWidth: 1.2,
         borderColor: stylesGlobal.color.black,
         width: normalizeWidth(60),
         height: normalizeHeight(60),
      },
      //name
      textName: {
         paddingTop: 40,
         fontSize: 15,
         fontWeight: '700',
      },
      //desc
      textDesc: {
         fontSize: 20,
         width: normalizeWidth(300) - 40,
         height: 30,
         overflow: 'hidden',
         textAlign: 'center',
         fontWeight: '400',
      },
   },

   //CSS Content
   groupButtons: {
      padding: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
   },
   customAddListButton: {
      marginRight: 30,
      backgroundColor: stylesGlobal.color.backgroundBlurGrey,
      borderRadius: 8,
   },
   customUnlockButton: {
      backgroundColor: stylesGlobal.color.backgroundGold,
      borderRadius: 8,
   },

   groupImg: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
   },

   addImg: {
      alignItems: 'center',
      backgroundColor: stylesGlobal.color.white,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      width: normalizeWidth(150),
      height: normalizeWidth(300),
   },
});

export default styles;
