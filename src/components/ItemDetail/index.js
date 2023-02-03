import { View, Image, Text, ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';

import ButtonComponent from '~/components/ButtonComponent';
import LoadingComponent from '~/components/popupComponent/LoadingComponent';
import ErrorComponent from '~/components/popupComponent/ErrorComponent';
import { updateAllArt } from '~/redux/AllArtSlice.js';

import styles from './style.js';
import services from '~/services/index.js';
import images from '~/assets';
import ImgDetail from '~/components/ImgDetail';

function ItemDetail({ route, navigation }) {
   const selectedItem = route.params.data;
   const indexShareElement = route.params.index;
   const dispatch = useDispatch();

   const dataAllArt = useSelector((state) => state.AllArt.data);

   const {
      isError: isErrorAllArt,
      isLoading: isLoadingAllArt,
      error: errorAllArt,
   } = useQuery('allArt', services.getAllArt, {
      onSuccess: (res) => {
         dispatch(updateAllArt({ ...res }));
      },
      onError: (err) => {
         console.log('err-category', err);
      },
   });

   if (isErrorAllArt) return <ErrorComponent msg={errorAllArt.message} />;
   if (isLoadingAllArt) return <LoadingComponent />;

   const TopUI = ({ item, index }) => {
      return (
         <SharedElement key={`Item-Detail-${index}`} id={`Item-Detail-${index}`}>
            <View style={styles.banner}>
               {item?.artSource ? (
                  <Image style={styles.banner.imgBackground} source={{ uri: item.artSource }}></Image>
               ) : (
                  <Image style={styles.banner.imgBackground} source={images.artDefault}></Image>
               )}
               <View style={item?.artistActive ? { backgroundColor: 'transparent' } : styles.banner.textNotion}>
                  {item?.artistActive ? null : <Text style={styles.banner.textNotion.text}>NEW ARTIST</Text>}
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
         </SharedElement>
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
               {!!allArt &&
                  allArt.map((item, index) => (
                     <SharedElement key={`img-detail-${index}`} id={`img-detail-${index}`}>
                        <ImgDetail
                           onPress={() => {
                              navigation.navigate('ItemDetailModal', { data: item, index: index });
                           }}
                           item={item}
                        />
                     </SharedElement>
                  ))}
               <ButtonComponent style={styles.addImg} onlyIcon source={images.icons.plusIcon} />
            </View>
         </>
      );
   };

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.buttonBack}>
            <ButtonComponent onlyIcon source={images.icons.exitIcon} onPress={() => navigation.goBack()} />
         </View>
         <TopUI item={selectedItem} index={indexShareElement} />
         <ContentUI item={dataAllArt} />
      </ScrollView>
   );
}

export default ItemDetail;
