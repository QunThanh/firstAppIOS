import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Text, TextInput, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";
import styles from './styles.js'

function TextInputComponent({
    inputMode ='text',
    placeholder = 'placeholder' ,
    onChangeText, 
    msgError = '',
}) {
    const [text,setText] = useState('init');
    const [msgE,setMsgE] = useState('');
    const [show,setShow] = useState(false);

    const refTextInput = useRef();

    const scaleLabel = useSharedValue(1);
    const topLabel = useSharedValue(30);
    const zIndexLabel = useSharedValue(9);

    const translateXError = useSharedValue(0);

    useEffect(()=>{
        console.log('animated')

        translateXError.value = withRepeat(
            withSequence( 
                withTiming(2,{duration:200}),withTiming(-2,{duration:200}),withSpring(0)
            ),2,true
        ) 
        
        return setMsgE(msgError);
    },[msgError])
    

    const animationLabelStyle = useAnimatedStyle(()=>{
        return{
            transform : [{scale: scaleLabel.value}],
            top : topLabel.value,
            zIndex : zIndexLabel.value,
        }
    })

    const animationErrorStyle = useAnimatedStyle(()=>{
        return{
            transform : [{translateX: translateXError.value}],
        }
    })

    const handleOnFocus = ()=>{
        if(text=='init')
            setText('');
        scaleLabel.value = withTiming(0.6,{duration:800});
        topLabel.value = withTiming(2,{duration:800});
        zIndexLabel.value = withTiming(11);
        setShow(false);
    }

    const handleOnBlur = ()=>{
        if(!text && !refTextInput.current.isFocused())
        {
            scaleLabel.value = withTiming(1,{duration:800});
            topLabel.value = withTiming(30,{duration:800});
            zIndexLabel.value = withDelay(800,withSpring(9));

            translateXError.value = withRepeat(
                withSequence( 
                    withTiming(2,{duration:200}),withTiming(-2,{duration:200}),withSpring(0)
                ),2,true
            ) 
            setShow(true);
            return;
        }
        translateXError.value = withRepeat(
            withSequence( 
                withTiming(2,{duration:200}),withTiming(-2,{duration:200}),withSpring(0)
            ),2,true
        ) 
        setShow(true);
    }

    const handleOnChange = ({nativeEvent: {eventCount, target, text}})=>{
        setText(text);
    }

    const RenderError = ({msg})=>{
        let passMsg = '';

        if (!text) passMsg = 'Empty text';

        if (msg) passMsg = msg;

        if (show && passMsg != '')
            return <Text style={styles.error}>{passMsg}</Text>
    }

    return ( 
    <View style={{position:'relative'}}>
        <Animated.Text style={[styles.label, animationLabelStyle]}>{placeholder}</Animated.Text> 
        <TextInput style={styles.input} 
            placeholder=''
            placeholderTextColor='transparent'
            onChangeText={onChangeText}
            selectionColor='dark gold'
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            inputMode={inputMode}
            ref={refTextInput}
        />
        <Animated.View style={ animationErrorStyle}>
            <RenderError msg={msgE}/>
        </Animated.View>
    </View>
)}

export default TextInputComponent;
