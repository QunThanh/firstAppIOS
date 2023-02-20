import { Button, Image, Keyboard, Text, TouchableOpacity, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { useState } from "react";

import StackAnimated from '~/components/animation/StackAnimated'
import styles from './styles.js'
import images from '~/assets'

import TextInputComponent from '~/components/TextInput'
import {
    getHash,
    startOtpListener,
    useOtpVerify,
  } from 'react-native-otp-verify';
import { useEffect } from "react";


function InputNumber({componentId, run=true}) {

    const [number, setNumber] = useState('');
    const [hashMethod, setHashMethod] = useState('');
    const [otpMethod, setOtpMethod] = useState('');


    // const { hash, otp, message, timeoutError, stopListener, startListener } = useOtpVerify({numberOfDigits: 4});

    // useEffect(()=>{
    //     getHash().then(hash => {
    //         setHashMethod(hash);
    //         console.log({hash})
    //     })
    //     .catch(console.log);

    //     startOtpListener(message => {
    //         const otp = /(\d{4})/g.exec(message)[1];
    //         setOtpMethod(otp);
    //       });
    //     // return () => removeListener();
    // },[])

    const handleOnPressContinue = (data)=>{
        // sent request 
        return Navigation.push(componentId,
            {
                component : {
                    id: 'VERIFY_OTP_SCREEN',
                    name:'VerifyOtp',
                    passProps: {
                        number : data,
                    },
                    options: {
                        topBar: {
                           visible: false,
                        },
                        animations: {
                           push: {
                              waitForRender: true,
                              content:{
                                translationY: {
                                    from: require('react-native').Dimensions.get('window').width,
                                    to: 0,
                                    duration: 300,
                                },
                                alpha: {
                                    from: 0,
                                    to: 1,
                                    duration: 300
                               }                        
                              }
                           },
                           pop: {
                            waitForRender: true,
                            content:{
                              translationY: {
                                  to: require('react-native').Dimensions.get('window').width,
                                  from: 0,
                                  duration: 300,
                              },                    
                            }
                         },
                        },
                     },
                }
            }
        )
    }

    const handleOnPressClose = ()=>{
        
    }

    Keyboard.isVisible(true)
    const renderInputNumber =  (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={handleOnPressClose}>
                <Image style={styles.close} source={images.icons.exitIcon}/>
            </TouchableOpacity>
            <View style={styles.wrapperHeader}>
                <Text style={styles.title}>Login with Phone</Text>
                <View style={styles.wrapperHeader}>
                    <Image style={styles.img} source={images.icons.otp}/>
                    <Text style={styles.description}>You'll receive a 4 digit code to verify next.</Text>
                </View>
            </View>
            <View style={styles.wrapperInput}>
                <TextInputComponent 
                    passStyle = {styles.textInput}
                    inputMode ='number'
                    placeholder = 'Enter your number' 
                    onChangeText = {(text)=>setNumber(text)}
                    msgError = ''
                    lineColor = 'black'
                    placeholderTextColor = 'white'
                    keyboardType='numeric'
                    
                />
                <TouchableOpacity disabled={number ? false : true} activeOpacity={0.5} style={styles.continue} onPress={() => handleOnPressContinue(number)}>
                    <Text style={styles.title}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View> 
    )

    return <StackAnimated 
    componentId = {componentId}
    run = {run}
    child = {renderInputNumber}/>
}

export default InputNumber;