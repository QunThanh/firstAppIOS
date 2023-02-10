import { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
   useAnimatedGestureHandler,
   useAnimatedStyle,
   useDerivedValue,
   useSharedValue,
   withSpring,
   withTiming,
   runOnJS,
} from 'react-native-reanimated';

import images from '~/assets';
import styles from './styles.js';

function ItemPaymentComponent({ item, index, onPressDelete, onPress }) {
   let icon = images.icons.creditCard;
   if (item?.typeCard == 'banking') icon = images.icons.banking;
   if (item?.typeCard == 'wallet') icon = images.icons.wallet;
   if (item?.typeCard == 'paypal') icon = images.icons.paypal;

   const opacity = useSharedValue(0);
   const opacityView = useSharedValue(1);
   const x = useSharedValue(0);
   const [showDelete, setShowDelete] = useState(false);

   const deleteIconAnimationStyle = useAnimatedStyle(() => {
      return {
         opacity: opacity.value,
      };
   }, [opacity.value]);

   const slideAnimation = useAnimatedStyle(() => {
      return {
         opacity: opacityView.value,
         transform: [{ translateX: x.value }],
      };
   });

   const handleSlide = useAnimatedGestureHandler({
      onStart: (event, context) => {
         opacityView.value = withSpring(0.5);
      },
      onActive: (event, context) => {
         x.value = event.translationX;
      },
      onEnd: (event, context) => {
         x.value = withTiming(0, { duration: 700 });
         opacityView.value = withSpring(1);

         if (event.translationX < -100) {
            runOnJS(setShowDelete)(true);
            opacity.value = withTiming(1, { duration: 3000 });
         }
         if (event.translationX > 100) {
            runOnJS(setShowDelete)(false);
            opacity.value = withTiming(0, { duration: 3000 });
         }
      },
   });

   return (
      <PanGestureHandler onGestureEvent={handleSlide}>
         <Animated.View key={`payment-${index}`} style={[styles.wrapper, slideAnimation]} onPress={onPress}>
            <Image style={styles.icon} source={icon} />
            <View style={styles.wrapperInfor}>
               <Text style={styles.wrapperInfor.nameCard}>{!!item.nameCart ? item.nameCart : item.accName}</Text>
               <Text style={styles.wrapperInfor.numCard}>{item.numCard}</Text>
            </View>

            {showDelete ? (
               <TouchableOpacity style={styles.detailIcon} onPress={onPressDelete}>
                  <Animated.Image
                     style={[styles.detailIcon, deleteIconAnimationStyle]}
                     source={images.icons.delete}
                  ></Animated.Image>
               </TouchableOpacity>
            ) : (
               <Image style={[styles.detailIcon]} source={images.icons.rightIcon} />
            )}
         </Animated.View>
      </PanGestureHandler>
   );
}

export default ItemPaymentComponent;
