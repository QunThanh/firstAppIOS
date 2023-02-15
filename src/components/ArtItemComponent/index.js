import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import Animated, { SlideInLeft } from 'react-native-reanimated';

import styles from './styles.js';
import images from '~/assets/index.js';
import { Navigation } from 'react-native-navigation';

function ArtItemComponent({ data, componentId, style }) {
   //check type
   if (data.type != '_artist') return console.log(`data wrong type. type is ${data.type}`);

   const dataItem = data.data;
   // { data: item, index: index }
   const handlePressShowDetail = (item, index) => {
      return Navigation.push(componentId, {
         component: {
            id: 'SCREEN_ITEM_DETAIL',
            name: 'ItemDetail',
            passProps: {
               data: item,
               index: index,
               componentId,
            },
            options: {
               topBar: {
                  visible: false,
               },
               animations: {
                  push: {
                     sharedElementTransitions: [
                        {
                           fromId: `img-art-item-${index}-from`,
                           toId: `img-item-detail-to`,
                           interpolation: { type: 'linear' },
                           duration: 500,
                        },
                     ],
                  },
                  pop: {
                     sharedElementTransitions: [
                        {
                           fromId: `img-item-detail-to`,
                           toId: `img-art-item-${index}-from`,
                           interpolation: { type: 'linear' },
                           duration: 200,
                        },
                     ],
                  },
               },
            },
         },
      });
   };

   function renderUI({ item, index }) {
      return (
         <Animated.View nativeID={`img-art-item-${index}-from`} entering={SlideInLeft.delay(index * 100)}>
            <TouchableOpacity onPress={() => handlePressShowDetail(item, index)}>
               <Animated.View style={[styles.boxItem]}>
                  <View style={styles.boxItem.boxArt}>
                     {item.artSource ? (
                        <Image style={styles.boxArt.imgArt} source={{ uri: item.artSource }} />
                     ) : (
                        <Image style={styles.boxArt.imgArt} source={images.artDefault} />
                     )}
                     <View style={item.artistActive ? { backgroundColor: 'transparent' } : styles.boxArt.textNotion}>
                        {item.artistActive ? null : <Text style={styles.boxArt.textNotion.text}>NEW ARTIST</Text>}
                     </View>
                  </View>

                  <View style={styles.boxItem.boxContent}>
                     {item.artistAvatar ? (
                        <Image style={styles.boxContent.imgAvatar} source={{ uri: item.artistAvatar }}></Image>
                     ) : (
                        <Image style={styles.boxContent.imgAvatar} source={images.avatarDefault}></Image>
                     )}

                     <Text style={styles.boxContent.textName}>{item.artistName}</Text>
                     <Text style={styles.boxContent.textDesc}>{item.description}</Text>
                  </View>
               </Animated.View>
            </TouchableOpacity>
         </Animated.View>
      );
   }

   return (
      <View style={[styles.wrapper, style]}>
         <FlatList showsVerticalScrollIndicator={false} data={dataItem} renderItem={renderUI} />
      </View>
   );
}

export default ArtItemComponent;
