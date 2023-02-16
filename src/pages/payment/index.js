import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import MaskInput, { Masks } from 'react-native-mask-input';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
   SlideInLeft,
   useSharedValue,
   useAnimatedStyle,
   withRepeat,
   withTiming,
   withSequence,
   useAnimatedGestureHandler,
} from 'react-native-reanimated';

import styles from './styles';
import images from '~/assets/index.js';

import StackAnimated from '~/components/animation/StackAnimated'
import ItemPaymentComponent from '~/components/ItemPaymentComponent';
import ButtonComponent from '~/components/ButtonComponent';
import SuccessComponent from '~/components/popupComponent/successComponent';
import LoadingComponent from '~/components/popupComponent/LoadingComponent';
import ErrorComponent from '~/components/popupComponent/ErrorComponent';
import services from '~/services/index.js';
import { updatePayment } from '~/redux/PaymentSlice.js';

function Payment({componentId, run = false}) {
   //redux
   const dispatch = useDispatch();
   const dataPayment = useSelector((state) => state.payment);

   //hook
   const [numCredit, setNumCredit] = useState('');
   const [date, setDate] = useState('');
   const [code, setCode] = useState('');
   const [post, setPost] = useState(false);
   const [reFetch, setReFetch] = useState(true);
   const [resPost, setResPost] = useState({ success: true, msg: 'SUCCESS' });
   const [visible, setVisible] = useState(false);
   const [inputError, setInputError] = useState('');

   //query payment
   const {
      isError: isErrorPayment,
      isLoading: isLoadingPayment,
      error: errorPayment,
   } = useQuery('payment', services.getAllPayment, {
      enabled: reFetch,
      onSuccess: (res) => {
         console.log('payment', res);
         dispatch(updatePayment({ ...res }));
         setReFetch(false);
      },
      onError: (err) => {
         console.log('err-payment', err);
      },
   });

   //post payment
   const {
      isError: isErrorPostPayment,
      isLoading: isLoadingPostPayment,
      error: errorPostPayment,
   } = useQuery(
      'postPayment',
      () =>
         services.postPayment({
            type: 'updatePayment',
            data: {
               numCredit: numCredit,
               code: code,
               date: date,
            },
         }),
      {
         enabled: post,
         onSuccess: (res) => {
            //need create component success
            console.log('postPayment', res);
            setResPost(res);
            setPost(false);
            setVisible(true);
            if (res.success) setReFetch(true);
         },
         onError: (err) => {
            console.log('err-postPayment', err);
         },
      },
   );

   // animation
   const offsetRight = useSharedValue(0.5);
   const offsetTop = useSharedValue(0);
   const rotate = useSharedValue(0);
   const moving = useSharedValue(false);
   const xPosition = useSharedValue(0);
   const yPosition = useSharedValue(0);

   const animatedOffset = useAnimatedStyle(() => {
      return {
         backgroundColor: moving.value ? 'gold' : 'white',
         right: offsetRight.value,
         top: offsetTop.value,
         transform: [
            { rotate: moving.value ? '0deg' : `${rotate.value}deg` },
            { translateX: xPosition.value },
            { translateY: yPosition.value },
         ],
      };
   });

   const handleMoveButton = useAnimatedGestureHandler({
      onStart: (event, context) => {
         moving.value = true;
      },

      onActive: (event, context) => {
         xPosition.value = 0.5 + event.translationX;
         yPosition.value = 0 + event.translationY;
      },

      onEnd: (event, context) => {
         moving.value = false;
         xPosition.value = withTiming(0, { duration: 500 });
         yPosition.value = withTiming(0, { duration: 500 });
         rotate.value = withSequence(
            withTiming(10, { duration: 100 }),
            withRepeat(withTiming(-10, { duration: 100 }), 15, true),
            withTiming(0, { duration: 100 }),
         );
         offsetTop.value = withTiming(Math.random() * 600, {
            duration: 500,
         });
         offsetRight.value = withTiming(Math.random() * 350, {
            duration: 600,
         });
      },
   });

   //check err, loading of fetch data
   if (isErrorPayment || isErrorPostPayment) {
      return (
         <>
            {isErrorPayment && <ErrorComponent msg={errorPayment.message} />}
            {isErrorPostPayment && <ErrorComponent msg={errorPostPayment.message} />}
         </>
      );
   }
   if (isLoadingPayment || isLoadingPostPayment) return <LoadingComponent />;

   const validateInput = () => {
      if (numCredit.length < 16 + 3) {
         setInputError('length of numCredit < 16');
         return false;
      }
      if (code.length < 3) {
         setInputError('length of code < 3');
         return false;
      }
      return true;
   };

   const handleOnPress = () => {
      if (!validateInput()) return;
      setPost(true);
   };
   const handleOnPressPopUp = () => {
      setVisible(false);
   };

   const RenderInputCard = () => {
      return (
         <View style={styles.wrapperCredit}>
            <Image style={styles.icon} source={images.icons.creditCard} />

            <View>
               <MaskInput
                  autoFocus={true}
                  style={[styles.numCredit, styles.styleText]}
                  value={numCredit}
                  keyboardType="numeric"
                  placeholder="Card number"
                  onChangeText={setNumCredit}
                  mask={Masks.CREDIT_CARD}
               />

               <View style={styles.creditExtent}>
                  <MaskInput
                     style={[styles.flex, styles.styleText]}
                     value={date}
                     keyboardType="numeric"
                     maxLength={5}
                     onChangeText={setDate}
                     placeholder="MM/YY"
                     mask={Masks.DATE_MMDDYYYY}
                  />
                  <TextInput
                     style={[styles.flex, styles.styleText]}
                     onChangeText={setCode}
                     maxLength={3}
                     value={code}
                     placeholder="Security code"
                     keyboardType="numeric"
                  />
               </View>
            </View>
         </View>
      );
   };

   const RenderListPaymentUI = (dataPayment = []) => {
      //check type
      console.log({ dataPayment });
      if (dataPayment.type != '_payment') console.log(`data respond wrong type. current type: ${dataPayment.type} `);

      return dataPayment.data.map((item, index) => (
         <Animated.View key={index} entering={SlideInLeft.delay(index * 100)}>
            <ItemPaymentComponent item={item} key={index} index={index} />
         </Animated.View>
      ));
   };

   const RenderPaymentPage = (
         <View style={styles.wrapper}>
            <Text style={styles.header}>Payment Options</Text>
            <View style={styles.content}>
               <Text style={styles.label}>Credit/debit card</Text>
               {RenderInputCard()}
               {!resPost.success && <Text style={styles.error}>{`* ${resPost.msg}`}</Text>}
               {validateInput && <Text style={styles.error}>{`* ${inputError}`}</Text>}
   
               <Text style={styles.label}>More payment options</Text>
               <ScrollView>{RenderListPaymentUI(dataPayment.data)}</ScrollView>
            </View>
   
            {/* Animation Troll Button */}
            <PanGestureHandler onGestureEvent={handleMoveButton}>
               <Animated.View style={[styles.buttonTap, animatedOffset]}>
                  <ButtonComponent onlyIcon source={images.icons.tap} />
               </Animated.View>
            </PanGestureHandler>
   
            {/* Save Button */}
            <ButtonComponent style={styles.buttonSaveCard} title={'Save card'} onPress={handleOnPress} />
   
            {/* Pop-Up */}
            <SuccessComponent visible={visible} success={resPost.success} msg={resPost.msg} onPress={handleOnPressPopUp} />
         </View>
      )


   return <StackAnimated 
      child = {RenderPaymentPage}
      componentId = {componentId}
      run = {run}
   />;
}

export default Payment;
