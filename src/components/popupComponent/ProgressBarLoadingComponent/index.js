import { useEffect } from 'react';
import { View, TextInput } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, useAnimatedProps } from 'react-native-reanimated';

import styles from './styles.js';

const AnimatedText = Animated.createAnimatedComponent(TextInput);

function ProgressBarLoadingComponent() {
   const progressValue = useSharedValue(0);

   useEffect(() => {
      progressValue.value = 290;
   }, []);

   const styleProgress = useAnimatedStyle(() => {
      return {
         width: withTiming(progressValue.value, { duration: 1000 }),
      };
   });

   const animatedProps = useAnimatedProps(() => {
      return {
         text: withTiming(`${Math.floor((progressValue.value / 290) * 100)}%`, { duration: 1000 }),
      };
   });

   return (
      <View style={styles.wrapper}>
         <View style={styles.backgroundProgressBar}>
            <Animated.View style={[styles.progressBar, styleProgress]}></Animated.View>
         </View>
         <AnimatedText style={styles.text} editable={false} animatedProps={animatedProps}></AnimatedText>
      </View>
   );
}

export default ProgressBarLoadingComponent;
