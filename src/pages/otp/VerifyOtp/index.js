import {  Pressable, Image, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Navigation } from "react-native-navigation";

import styles from './styles.js'
import images from '~/assets'

import {setRootApp} from '~/routes'
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


function VerifyOtp({componentId, run=true, number}) {

    const [code,setCode] = useState('')
    const refInput = useRef();

    useEffect(()=>{
        if (code.length > 3)
        {
            // handle verify code
            return console.log('ode.length');
        }
    },[code.length == 4])

    const handleOnPressClose = ()=>{
        Navigation.popTo('INPUT_NUM_SCREEN');
    }

    const handleOnPressRequestAgain = ()=>{
        //handle request again
    }
    
    const handleOnPressVerifyLogin = ()=>{
        // handle verify code if true setRoot
        Navigation.setRoot(setRootApp)
    }

    Keyboard.isVisible(true)

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={handleOnPressClose}>
                <Image style={styles.back} source={images.icons.down}/>
            </TouchableOpacity>
            <View style={styles.wrapperHeader}>
                <Text style={styles.title}>Verify phone</Text>
                <View style={styles.wrapperHeader}>
                    <Text style={styles.description}>Code is sent to {number}</Text>
                </View>
            </View>
            <View style={styles.wrapperInput}>
                <TextInput 
                    ref={refInput} 
                    style={{width: 1, height: 1, opacity:0}} 
                    value={code}
                    keyboardType='numeric'
                    onChangeText={(text)=>setCode(text)}
                />
                <Pressable
                    style={styles.input}
                    onPress={()=>refInput.current.focus()}
                >
                    <Text style={styles.inputText}>{code[0]}</Text>
                </Pressable>
                <Pressable
                    style={styles.input}
                    onPress={()=>refInput.current.focus()}
                >
                    <Text style={styles.inputText}>{code[1]}</Text>
                </Pressable>
                <Pressable
                    style={styles.input}
                    onPress={()=>refInput.current.focus()}
                >
                    <Text style={styles.inputText}>{code[2]}</Text>
                </Pressable>
                <Pressable
                    style={styles.input}
                    onPress={()=>refInput.current.focus()}
                >
                    <Text style={styles.inputText}>{code[3]}</Text>
                </Pressable>
            </View>

            <View style={styles.wrapperDec}>
                <Text style={[styles.textDec, styles.blurText]}>Did't receive code? </Text>
                <TouchableOpacity onPress={handleOnPressRequestAgain}>
                    <Text style={styles.textDec}>Request again</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={styles.login} onPress={handleOnPressVerifyLogin}>
                <Text style={styles.title}>Verify and Login</Text>
            </TouchableOpacity>
        </View> 
    )
}

export default VerifyOtp;