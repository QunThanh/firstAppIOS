import { Image, Keyboard, Text, View } from "react-native";
import Animated, {  useAnimatedStyle, useSharedValue, withRepeat,  withTiming } from "react-native-reanimated";
import { useEffect,  useState } from "react";

import styles from './styles.js'
import images from '~/assets'
import services from '~/services'
import useUserStore from '~/zustand/UserStore.js'
import {setRootApp} from '~/routes'

import ButtonComponent from '~/components/ButtonComponent'
import TextInputComponent from "../../components/TextInput/index.js";
import CloseSliceDownAnimated from "../../components/animation/CloseSliceDownAnimated/index.js";
import { Navigation } from "react-native-navigation";


function Login() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState({user : false, pass : false, msg:''});

    const scaleLogo = useSharedValue(1.2);
    const paddingLogo = useSharedValue(18);
    const borderRadiusLogo = useSharedValue(20);

    const animationBreathingStyle = useAnimatedStyle(()=>{
        return{
            borderRadiusLogo : borderRadiusLogo.value,
            transform : [{scale: scaleLogo.value}],
            padding : paddingLogo.value,
        }
    })

    useEffect(()=>{
        scaleLogo.value = withRepeat(withTiming(0.8,{duration:2500}),Infinity,true)
        paddingLogo.value = withRepeat(withTiming(23,{duration:2500}),Infinity,true)
        borderRadiusLogo.value = withRepeat(withTiming(40,{duration:2500}),Infinity,true)
    },[])

    const handleLoginOnPress = async()=>{
        Keyboard.dismiss();

        let request = {
            type: '_REQUEST_USER',
            data: {user,pass}
        }
        //query
        const res = await services.userService(request)

        setError({user: res?.errUser, pass: res?.errPass, msg: res?.msg})

        // if success, update store
        console.log('resLogin',res);
        if (!res.success) return;

        Navigation.setRoot(setRootApp);
    }

    const renderUILogin = <>
            <View style={styles.close} ></View>
            <View style={styles.wrapper} >
                <View style={styles.header}>
                    <Animated.View style={[styles.loginTextImgBackground, animationBreathingStyle]}>
                        <Image style={styles.loginTextImg} source={images.icons.loginText}/>
                    </Animated.View>
                    <Text style={styles.text}>Let's get started !!</Text>
                </View>
                <View style={styles.content}>
                    <View style={{flex:2, justifyContent:'center'}}>
                        <TextInputComponent 
                            placeholder='User' 
                            onChangeText={(text)=>{setUser(text)}}
                            msgError={error.user ? error.msg : ''}
                        />
                        <TextInputComponent 
                            placeholder='Pass' 
                            onChangeText={(text)=>{setPass(text)}} 
                            msgError={error.pass ? error.msg : ''}
                        />
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