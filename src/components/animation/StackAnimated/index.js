import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const StackAnimated = ({run, componentId, child})=>{
    opacity = useSharedValue(0);
    scale = useSharedValue(1.2);

    useEffect(()=>{
      console.log({run, componentId});
      if(run){
        opacity.value = withTiming(1);
        scale.value = withTiming(1);
        return
      }
      opacity.value = withTiming(0);
      scale.value = withTiming(1.2);
    },[run])
  
    const animatedStyle = useAnimatedStyle(()=>{
      return {
        flex: 1,
        opacity: opacity.value,
        transform:[{scale: scale.value}]
      }
    })
  
     return  <Animated.View componentId={componentId} style={animatedStyle} >
      {child}
      </Animated.View>
  }
export default StackAnimated