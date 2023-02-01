import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import styles from './styles.js';
import images from '~/assets/index.js';

function ArtItemComponent({ data, navigation, style }) {
   //check type

   if (data.type != '_artist') return console.log(`data wrong type. type is ${data.type}`);

   const dataItem = data.data;

   const handlePressShowDetail = (item) => {
      return navigation.navigate('ItemDetail', item);
   };

   function renderUI({ item }) {
      return (
         <TouchableOpacity onPress={() => handlePressShowDetail(item)}>
            <View style={[styles.boxItem]}>
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
            </View>
         </TouchableOpacity>
      );
   }

   return (
      <View style={[styles.wrapper, style]}>
         <FlatList showsVerticalScrollIndicator={false} data={dataItem} renderItem={renderUI} />
      </View>
   );
}

export default ArtItemComponent;
