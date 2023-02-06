import { FlatList, Image, View, Text, TouchableOpacity } from 'react-native';

import images from '~/assets';
import styles from './styles.js';

function ItemPaymentComponent({ item, index }) {
   let icon = images.icons.creditCard;
   if (item?.typeCard == 'banking') icon = images.icons.banking;
   if (item?.typeCard == 'wallet') icon = images.icons.wallet;
   if (item?.typeCard == 'paypal') icon = images.icons.paypal;

   return (
      <View key={`payment-${index}`} style={styles.wrapper}>
         <Image style={styles.icon} source={icon} />
         <View style={styles.wrapperInfor}>
            <Text style={styles.wrapperInfor.nameCard}>{!!item.nameCart ? item.nameCart : item.accName}</Text>
            <Text style={styles.wrapperInfor.numCard}>{item.numCard}</Text>
         </View>
         <Image style={styles.detailIcon} source={images.icons.rightIcon} />
      </View>
   );
}

export default ItemPaymentComponent;
