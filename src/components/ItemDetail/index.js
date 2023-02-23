import { Navigation } from 'react-native-navigation';
import { View, Image, Text, ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { SharedElement } from 'react-navigation-shared-element';

import ButtonComponent from '~/components/ButtonComponent';
import LoadingComponent from '~/components/popupComponent/LoadingComponent';
import ErrorComponent from '~/components/popupComponent/ErrorComponent';
import ImgDetail from '~/components/ImgDetail';
import { updateAllArt } from '~/redux/AllArtSlice.js';

import styles from './style.js';
import services from '~/services/index.js';
import images from '~/assets';
import strings from '~/languages';

function ItemDetail({ data, index, componentId }) {
   const selectedItem = data;
   const indexShareElement = index;
   const dispatch = useDispatch();

   const dataAllArt = useSelector((state) => state.AllArt.data);

   const {
      isError: isErrorAllArt,
      isLoading: isLoadingAllArt,
      isSuccess: isSuccessAllArt,
      error: errorAllArt,
   } = useQuery('allArt', services.getAllArt, {
      onSuccess: (res) => {
         console.log({ res });
         dispatch(updateAllArt({ ...res }));
      },
      onError: (err) => {
         console.log('err-category', err);
      },
   });

   if (isErrorAllArt) return <ErrorComponent msg={errorAllArt.message} />;
   if (isLoadingAllArt) return <LoadingComponent />;

   const TopUI = ({ item }) => {
      return (
         <View nativeID="img-item-detail-to">
            <View style={styles.banner}>
               {item?.artSource ? (
                  <Image style={styles.banner.imgBackground} source={{ uri: item.artSource }}></Image>
               ) : (
                  <Image style={styles.banner.imgBackground} source={images.artDefault}></Image>
               )}
               <View style={item?.artistActive ? { backgroundColor: 'transparent' } : styles.banner.textNotion}>
                  {item?.artistActive ? null : (
                     <Text style={styles.banner.textNotion.text}>{strings.global.newArtist}</Text>
                  )}
               </View>
            </View>

            <View style={styles.boxInforArtist}>
               {item?.artistAvatar ? (
                  <Image style={styles.boxInforArtist.imgAvatar} source={{ uri: item?.artistAvatar }}></Image>
               ) : (
                  <Image style={styles.boxInforArtist.imgAvatar} source={images.avatarDefault}></Image>
               )}

               <Text style={styles.boxInforArtist.textName}>{item?.artistName}</Text>
               <Text style={styles.boxInforArtist.textDesc}>{item?.description}</Text>
            </View>
         </View>
      );
   };

   const ContentUI = ({ item, componentId }) => {
      // need call API in there
      // check type
      const allArt = item.data;

      if (item.type != '_arts_user') return console.log(`this data is wrong type. Current is ${item.type}`);

      return (
         <>
            <View style={styles.groupButtons}>
               <ButtonComponent
                  style={styles.customAddListButton}
                  title={strings.homePage.itemDetail.myList}
                  rightIcon
                  source={images.icons.plusIcon}
               />
               <ButtonComponent style={styles.customUnlockButton} title={strings.homePage.itemDetail.unlock} />
            </View>
            <View style={styles.groupImg}>
               {!!allArt &&
                  allArt.map((item, index) => (
                     <SharedElement key={`img-detail-${index}`} id={`img-detail-${index}`}>
                        <ImgDetail
                           nativeID={`img-${index}-from`}
                           onPress={() => {
                              Navigation.push(componentId, {
                                 component: {
                                    id: 'SCREEN_IMG_DETAIL',
                                    name: 'ItemDetailModal',
                                    passProps: {
                                       data: item,
                                       index: index,
                                       componentId,
                                    },
                                    options: {
                                       animations: {
                                          push: {
                                             sharedElementTransitions: [
                                                {
                                                   fromId: `img-${index}-from`,
                                                   toId: `img-modal-to`,
                                                   interpolation: { type: 'spring' },
                                                   duration: 250,
                                                },
                                             ],
                                          },
                                          pop: {
                                             sharedElementTransitions: [
                                                {
                                                   toId: `img-${index}-from`,
                                                   fromId: `img-modal-to`,
                                                   interpolation: { type: 'linear' },
                                                   duration: 250,
                                                },
                                             ],
                                          },
                                       },
                                    },
                                 },
                              });
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
      <ScrollView contentInsetAdjustmentBehavior="never" showsVerticalScrollIndicator={false}>
         <View style={styles.buttonBack}>
            <ButtonComponent onlyIcon source={images.icons.exitIcon} onPress={() => Navigation.popTo('HOME_SCREEN')} />
         </View>
         <TopUI item={selectedItem} index={indexShareElement} />
         {isSuccessAllArt && !isLoadingAllArt && <ContentUI item={dataAllArt} componentId={componentId} />}
      </ScrollView>
   );
}

export default ItemDetail;
