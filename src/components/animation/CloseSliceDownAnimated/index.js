import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue,  withTiming } from "react-native-reanimated";

function CloseSliceDownAnimated({child}) {

    const y = useSharedValue(0);
    const styleAnimated = useAnimatedStyle(()=>{
        return {
            transform:[ {translateY : y.value}]
        }
    })

    const handleClose = useAnimatedGestureHandler({
        onActive: (event,context)=>{
            y.value = event.translationY;
        },
        onEnd: (event,context)=>{
            y.value = withTiming(0,{duration:1000});
        },
    })
    

    return <PanGestureHandler onGestureEvent={handleClose}>
        <Animated.View style={[styleAnimated,{flex:1}]}>{child}</Animated.View>
    </PanGestureHandler>;
}

export default CloseSliceDownAnimated;