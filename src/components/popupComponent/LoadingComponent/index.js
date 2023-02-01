import { useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import styles from './styles.js';

function LoadingComponent() {
   const opacityAnimation = useRef(new Animated.Value(0)).current;
   const scaleAnimation = useRef(new Animated.Value(1)).current;

   Animated.loop(
      Animated.parallel([
         Animated.sequence([
            Animated.parallel([
               Animated.timing(opacityAnimation, {
                  toValue: 1,
                  duration: 1500,
                  useNativeDriver: true,
               }),
               Animated.timing(scaleAnimation, {
                  toValue: 2,
                  duration: 1500,
                  useNativeDriver: true,
               }),
            ]),
            Animated.parallel([
               Animated.timing(opacityAnimation, {
                  toValue: 0,
                  duration: 1500,
                  useNativeDriver: true,
               }),
               Animated.timing(scaleAnimation, {
                  toValue: 1,
                  duration: 1500,
                  useNativeDriver: true,
               }),
            ]),
         ]),
      ]),
   ).start();

   return (
      <View style={styles.wrapper}>
         <View style={styles.content}>
            <Animated.View
               style={[
                  styles.square,
                  {
                     transform: [
                        { scale: scaleAnimation },
                        {
                           rotate: opacityAnimation.interpolate({
                              inputRange: [0, 1],
                              outputRange: ['0deg', '360deg'],
                           }),
                        },
                     ],
                     opacity: opacityAnimation,
                     borderRadius: Animated.multiply(opacityAnimation, 40 / 2),
                  },
               ]}
            ></Animated.View>
            <Text style={styles.text}>Loading...</Text>
         </View>
      </View>
   );
}

export default LoadingComponent;
