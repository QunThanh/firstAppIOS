
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Keyboard, Text, TextInput, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";
import styles from './styles.js'

function TextInputComponent({
    inputMode ='text',
    placeholder = 'placeholder' ,
    onChangeText, 
    msgError = '',
    passStyle,
    lineColor = "#41817C",
    placeholderTextColor ='#344053',
    keyboardType = 'text',
    ...passProps
}) {

    const [text,setText] = useState('init');
    const [msgE,setMsgE] = useState('');
    const [show,setShow] = useState(false);

    const refTextInput = useRef();
    const refError = useRef();

    const scaleLabel = useSharedValue(1);
    const topLabel = useSharedValue(30);
    const zIndexLabel = useSharedValue(9);

    const translateXError = useSharedValue(0);

    useEffect(()=>{
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
            return <Text ref={refError} style={styles.error}>{passMsg}</Text>
    }

    return ( 
    <View style={[styles.wrapper, passStyle]}>
        <Animated.Text style={[
            styles.label,
            {backgroundColor: placeholderTextColor} ,
            animationLabelStyle
            ]}>
                {placeholder}
        </Animated.Text> 
        <TextInput style={[styles.input,{borderColor: msgE != '' && show ? "#aa3311": lineColor}]} 
            placeholder=''
            keyboardType={keyboardType}
            placeholderTextColor='transparent'
            onChangeText={onChangeText}
            selectionColor='dark gold'
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={refTextInput}
            inputMode={inputMode}
            {...passProps}
        />
        <Animated.View style={ animationErrorStyle}>
            <RenderError msg={msgE}/>
        </Animated.View>
    </View>
)}

export default TextInputComponent;
