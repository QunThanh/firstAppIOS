import { View, Image } from 'react-native';
import ButtonComponent from '~/components/ButtonComponent';
import { SharedElement } from 'react-navigation-shared-element';
import images from '~/assets';
import styles from './styles.js';

function ItemDetailModal({ navigation, route }) {
   const dataFromShareElement = route.params.data;
   const indexItemShareElement = route.params.index;
   return (
      <View style={styles.backgroundModel}>
         <SharedElement id={`img-detail-${indexItemShareElement}`}>
            <View style={styles.contentModel}>
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
                  onPress={() => navigation.goBack()}
               />
            </View>
         </SharedElement>
      </View>
   );
}

export default ItemDetailModal;
