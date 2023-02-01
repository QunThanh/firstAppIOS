import { FlatList, Image, View, Text, TouchableOpacity } from 'react-native';

import images from '~/assets';
import styles from './styles.js';

function ItemPaymentComponent({ items }) {
   //check type
   if (items.type != '_payment') console.log(`data is type wrong. current type ${items.type}`);

   const dataItemPayment = items.data;

   // console.log({ items });

   /**
   accName: "Le Thanh"
   nameCart: "HDBank"
   numCard: "0908789078999999"
   typeCard: "credit"
   used: true
    */

   const renderUI = ({ item }) => {
      //render Icon
      let icon = images.icons.creditCard;
      if (item.typeCard == 'banking') icon = images.icons.banking;
      if (item.typeCard == 'wallet') icon = images.icons.wallet;
      if (item.typeCard == 'paypal') icon = images.icons.paypal;

      return (
         <TouchableOpacity style={styles.wrapper}>
            <Image style={styles.icon} source={icon} />
            <View style={styles.wrapperInfor}>
               <Text style={styles.wrapperInfor.nameCard}>{!!item.nameCart ? item.nameCart : item.accName}</Text>
               <Text style={styles.wrapperInfor.numCard}>{item.numCard}</Text>
            </View>
            <Image style={styles.detailIcon} source={images.icons.rightIcon} />
         </TouchableOpacity>
      );
   };

   return <FlatList data={dataItemPayment} renderItem={renderUI} />;
}

export default ItemPaymentComponent;
