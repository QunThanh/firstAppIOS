import { run } from 'jest';
import { useEffect, useRef, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
   useAnimatedGestureHandler,
   useAnimatedStyle,
   useDerivedValue,
   useSharedValue,
   withSpring,
   withTiming,
   runOnJS,
   useAnimatedRef,
   measure,
} from 'react-native-reanimated';

import images from '~/assets';
import styles from './styles.js';

function ItemPaymentComponent({ item, index, onPressDelete, onPress }) {
   let icon = images.icons.creditCard;
   if (item?.typeCard == 'banking') icon = images.icons.banking;
   if (item?.typeCard == 'wallet') icon = images.icons.wallet;
   if (item?.typeCard == 'paypal') icon = images.icons.paypal;

   const opacity = useSharedValue(0);
   const rotate = useSharedValue(0);
   const opacityView = useSharedValue(1);
   const heightDetail = useSharedValue(0);
   const x = useSharedValue(0);
   const [showDelete, setShowDelete] = useState(false);
   const [showDetail, setShowDetail] = useState(false);

   const refWrapper = useRef();

   useEffect(() => {
      refWrapper.current.measure((a, b, width, height, px, py) => {
         heightDetail.value = withSpring(height, { mass: 0.4, stiffness: 100 });
      });
   }, [showDetail]);

   const deleteIconAnimationStyle = useAnimatedStyle(() => {
      return {
         opacity: opacity.value,
      };
   });

   const slideAnimation = useAnimatedStyle(() => {
      return {
         opacity: opacityView.value,
         transform: [{ translateX: x.value }],
      };
   });

   const rightIconAnimationStyle = useAnimatedStyle(() => {
      return {
         transform: [{ rotate: `${rotate.value}deg` }],
      };
   });

   const textDetailAnimationStyle = useAnimatedStyle(() => {
      return {
         height: heightDetail.value,
      };
   });

   const handleSlideAnimation = useAnimatedGestureHandler({
      onActive: (event, context) => {
         x.value = event.translationX;
         opacityView.value = withSpring(0.5);
      },
      onEnd: (event, context) => {
         x.value = withTiming(0, { duration: 700 });
         opacityView.value = withSpring(1);

         if (event.translationX < -100) {
            runOnJS(setShowDelete)(true);
            opacity.value = withTiming(1, { duration: 1000 });
         }
         if (event.translationX > 100) {
            runOnJS(setShowDelete)(false);
            opacity.value = withTiming(0, { duration: 1000 });
         }
      },
   });

   const handlePressAnimation = useAnimatedGestureHandler({
      onEnd: (event, context) => {
         if (showDetail) {
            runOnJS(setShowDetail)(false);
            rotate.value = withSpring(0, { mass: 0.8, stiffness: 130 });
         } else {
            runOnJS(setShowDetail)(true);
            rotate.value = withSpring(-270, { mass: 0.8, stiffness: 130 });
         }
      },
   });

   return (
      <PanGestureHandler onGestureEvent={handleSlideAnimation}>
         <Animated.View key={`payment-${index}`} style={slideAnimation}>
            <TapGestureHandler onGestureEvent={handlePressAnimation}>
               <Animated.View ref={refWrapper} style={[styles.wrapper]} onPress={() => handleOnPressShowDetail(index)}>
                  <View style={styles.wrapperHeader}>
                     <Image style={styles.icon} source={icon} />
                     <View style={styles.wrapperTextHeader}>
                        <Text style={styles.wrapperTextHeader.nameCard}>
                           {!!item.nameCart ? item.nameCart : item.accName}
                        </Text>
                        <Text style={styles.wrapperTextHeader.numCard}>{item.numCard}</Text>
                     </View>

                     {showDelete ? (
                        <TouchableOpacity style={styles.detailIcon} onPress={onPressDelete}>
                           <Animated.Image
                              style={[styles.detailIcon, deleteIconAnimationStyle]}
                              source={images.icons.delete}
                           ></Animated.Image>
                        </TouchableOpacity>
                     ) : (
                        <Animated.Image
                           style={[styles.detailIcon, rightIconAnimationStyle]}
                           source={images.icons.rightIcon}
                        ></Animated.Image>
                     )}
                  </View>
                  {showDetail ? (
                     <Animated.View style={[styles.wrapperTextDetail, textDetailAnimationStyle]}>
                        <>
                           <Text>Name: {item.accName}</Text>
                        </>
                        <>
                           <Text>Type: {item.typeCard.charAt(0).toUpperCase() + item.typeCard.slice(1)}</Text>
                        </>
                     </Animated.View>
                  ) : (
                     <></>
                  )}
               </Animated.View>
            </TapGestureHandler>
         </Animated.View>
      </PanGestureHandler>
   );
}

export default ItemPaymentComponent;
