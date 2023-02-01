import { StyleSheet } from 'react-native';

import stylesGlobal from '~/stylesGlobal/stylesGlobal';
import { normalizeWidth, normalizeHeight } from '~/configs/normalize';

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      height: 'auto',
   },
   boxItem: {
      backgroundColor: stylesGlobal.color.white,
      position: 'relative',
      width: normalizeWidth(300),
      height: normalizeHeight(400),
      margin: 20,
      borderRadius: 30,
      shadowColor: stylesGlobal.color.black,
      shadowOffset: {
         width: 0,
         height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      //art
      boxArt: {
         position: 'relative',
         width: '100%',
         height: '75%',
      },
      //content
      boxContent: {
         flex: 1,
         alignItems: 'center',
         borderTopWidth: 4,
         borderTopColor: stylesGlobal.color.backgroundBlurGrey,
      },
   },

   //art
   boxArt: {
      imgArt: {
         width: '100%',
         height: '100%',
         borderTopLeftRadius: 30,
         borderTopRightRadius: 30,
      },
      textNotion: {
         position: 'absolute',
         top: 20,
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

   boxContent: {
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
});

export default styles;
