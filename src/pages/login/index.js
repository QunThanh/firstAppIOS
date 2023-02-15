import { Image, Text, View } from "react-native";
import styles from './styles.js'

import images from '~/assets'
import ButtonComponent from '~/components/ButtonComponent'

import Animated, {  useAnimatedStyle, useSharedValue, withDelay, withRepeat,  withTiming } from "react-native-reanimated";
import { useEffect,  useState } from "react";
import TextInputComponent from "../../components/TextInput/index.js";
import CloseSliceDownAnimated from "../../components/animation/CloseSliceDownAnimated/index.js";


function Login() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [msgError, setMsgError] = useState('');

    const scaleLogo = useSharedValue(1.2);
    const paddingLogo = useSharedValue(18);
    const borderRadiusLogo = useSharedValue(20);

    const animationBreathingStyle = useAnimatedStyle(()=>{
        return{
            transform : [{scale: scaleLogo.value}],
            padding : paddingLogo.value,
            borderRadiusLogo : borderRadiusLogo.value,
        }
    })

    useEffect(()=>{
        scaleLogo.value = withRepeat(withTiming(0.8,{duration:2500}),Infinity,true)
        paddingLogo.value = withRepeat(withTiming(23,{duration:2500}),Infinity,true)
        borderRadiusLogo.value = withRepeat(withTiming(40,{duration:2500}),Infinity,true)

    },[])

    const handleLoginOnPress = ()=>{
        console.log({user,pass})
        setMsgError('2');
    }

    const renderUILogin = <>
            <View style={styles.close} ></View>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Animated.View style={[styles.loginTextImgBackground, animationBreathingStyle]}>
                        <Image style={styles.loginTextImg} source={images.icons.loginText}/>
                    </Animated.View>
                    <Text style={styles.text}>Let's get started !!</Text>
                </View>
                <View style={styles.content}>
                    <View style={{flex:2, justifyContent:'center'}}>
                        <TextInputComponent placeholder='User' onChangeText={(text)=>{setUser(text)}}/>
                        <TextInputComponent placeholder='Pass' onChangeText={(text)=>{setPass(text)}} msgError={msgError}/>
                    </View>
                    <ButtonComponent style={[ {flex:1, alignItems: 'center'}]} title='Login' onPress={handleLoginOnPress}/>
                </View>
            </View>
        </>

    return ( 
    <View style={styles.fakeBackground}>
        <CloseSliceDownAnimated child={renderUILogin}/>
    </View> );
}

export default Login;