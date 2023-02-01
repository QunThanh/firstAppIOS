import { View, Button, Image, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import ButtonComponent from '~/components/ButtonComponent';
import { updateAllArt } from '~/redux/AllArtSlice.js';

import styles from './style.js';
import services from '~/services/index.js';
import images from '~/assets';
import ImgDetail from '~/components/ImgDetail';

function ItemDetail({ route, navigation }) {
   const selectedItem = route.params;

   const dispatch = useDispatch();

   const dataAllArt = useSelector((state) => state.AllArt.data);

   const {
      isError: isErrorAllArt,
      isLoading: isLoadingAllArt,
      error: errorAllArt,
   } = useQuery('allArt', services.getAllArt, {
      onSuccess: (res) => {
         // console.log('res-allArt', res);
         dispatch(updateAllArt({ ...res }));
      },
      onError: (err) => {
         // console.log('err-category', err);
      },
   });

   if (isErrorAllArt)
      return (
         <View>
            <Text>Loading ......</Text>
            <Text>Loading ......</Text>
            <Text>Loading ......</Text>
            <Text>Loading ......</Text>
            <Text>Something wrong: {errorAllArt.message}</Text>
         </View>
      );
   if (isLoadingAllArt)
      return (
         <View>
            <Text>Loading ......</Text>
         </View>
      );

   const TopUI = ({ item }) => {
      // console.log('item in TopIU', selectedItem);
      return (
         <>
            <View style={styles.banner}>
               {item.artSource ? (
                  <Image style={styles.banner.imgBackground} source={{ uri: item.artSource }}></Image>
               ) : (
                  <Image style={styles.banner.imgBackground} source={images.artDefault}></Image>
               )}
               <View style={item.artistActive ? { backgroundColor: 'transparent' } : styles.banner.textNotion}>
                  {item.artistActive ? null : <Text style={styles.banner.textNotion.text}>NEW ARTIST</Text>}
               </View>
            </View>

            <View style={styles.boxInforArtist}>
               {item.artistAvatar ? (
                  <Image style={styles.boxInforArtist.imgAvatar} source={{ uri: item.artistAvatar }}></Image>
               ) : (
                  <Image style={styles.boxInforArtist.imgAvatar} source={images.avatarDefault}></Image>
               )}

               <Text style={styles.boxInforArtist.textName}>{item.artistName}</Text>
               <Text style={styles.boxInforArtist.textDesc}>{item.description}</Text>
            </View>
         </>
      );
   };

   const ContentUI = ({ item }) => {
      // need call API in there
      // check type
      const allArt = item.data;

      if (item.type != '_arts_user') return console.log(`this data is wrong type. Current is ${item.type}`);

      return (
         <>
            <View style={styles.groupButtons}>
               <ButtonComponent
                  style={styles.customAddListButton}
                  title="My list"
                  rightIcon
                  source={images.icons.plusIcon}
               />
               <ButtonComponent style={styles.customUnlockButton} title="UNLOCK" />
            </View>
            <View style={styles.groupImg}>
               {!!allArt && allArt.map((item, index) => <ImgDetail key={index} item={item} />)}
               <ButtonComponent style={styles.addImg} onlyIcon source={images.icons.plusIcon} />
            </View>
         </>
      );
   };

   return (
      <ScrollView>
         <View style={styles.buttonBack}>
            <ButtonComponent onlyIcon source={images.icons.exitIcon} onPress={() => navigation.goBack()} />
         </View>
         <TopUI item={selectedItem} />
         <ContentUI item={dataAllArt} />
      </ScrollView>
   );
}

export default ItemDetail;
