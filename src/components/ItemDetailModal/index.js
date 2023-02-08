import { View, Image } from 'react-native';
import ButtonComponent from '~/components/ButtonComponent';
import images from '~/assets';
import styles from './styles.js';
import { Navigation } from 'react-native-navigation';

function ItemDetailModal({ data, index }) {
   const dataFromShareElement = data;
   const indexItemShareElement = index;
   return (
      <View style={styles.backgroundModel}>
         <View nativeID={'img-modal-to'} style={styles.contentModel}>
            {dataFromShareElement?.artSource ? (
               <Image
                  style={styles.imgPopUp}
                  source={{
                     uri: dataFromShareElement?.artSource,
                  }}
               />
            ) : (
               <Image style={styles.imgPopUp} source={images.artDefault} />
            )}
            <ButtonComponent
               style={styles.closeModel}
               onlyIcon
               source={images.icons.exitIcon}
               onPress={() => Navigation.popTo('SCREEN_ITEM_DETAIL')}
            />
         </View>
      </View>
   );
}

export default ItemDetailModal;
