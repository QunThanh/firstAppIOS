import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
   useAnimatedGestureHandler,
   useAnimatedStyle,
   useSharedValue,
   withSpring,
   withTiming,
} from 'react-native-reanimated';

import styles from './styles.js';
import images from '~/assets/index.js';

function ArtItemComponent({ data, navigation, style }) {
   //check type
   if (data.type != '_artist') return console.log(`data wrong type. type is ${data.type}`);
   const pressed = useSharedValue(false);
   const animationMove = useAnimatedStyle(() => {
      return {
         backgroundColor: withSpring(pressed.value ? 'gold' : 'white'),
         transform: [{ scale: withSpring(pressed.value ? 1.1 : 1) }],
      };
   });

   const dataItem = data.data;

   const handlePressShowDetail = (item, index) => {
      return navigation.navigate('ItemDetail', { data: item, index: index });
   };

   const handelItemMoved = useAnimatedGestureHandler({
      onStart: (event, ctx) => {
         pressed.value = true;
         console.log('Start');
         console.log({ event, ctx });
      },

      onActive: (event, ctx) => {
         console.log({ event, ctx });
         console.log('Active');
      },

      onEnd: (event, ctx) => {
         pressed.value = false;
         console.log('End');
      },
   });

   function renderUI({ item, index }) {
      return (
         <SharedElement key={`Item-Detail-${index}`} id={`Item-Detail-${index}`}>
            <TouchableOpacity onPress={() => handlePressShowDetail(item, index)}>
               <TapGestureHandler id={`Item-Detail-${index}`} onGestureEvent={handelItemMoved}>
                  <Animated.View style={[styles.boxItem, animationMove]}>
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
               </TapGestureHandler>
            </TouchableOpacity>
         </SharedElement>
      );
   }

   return (
      <View style={[styles.wrapper, style]}>
         <FlatList showsVerticalScrollIndicator={false} data={dataItem} renderItem={renderUI} />
      </View>
   );
}

export default ArtItemComponent;
