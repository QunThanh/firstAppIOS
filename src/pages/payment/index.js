import { View, Text, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import MaskInput, { Masks } from 'react-native-mask-input';

import styles from './styles';
import images from '~/assets/index.js';

import ItemPaymentComponent from '~/components/ItemPaymentComponent';
import ButtonComponent from '~/components/ButtonComponent';
import SuccessComponent from '~/components/popupComponent/successComponent';
import LoadingComponent from '~/components/popupComponent/LoadingComponent';
import ErrorComponent from '~/components/popupComponent/ErrorComponent';
import services from '~/services/index.js';
import { updatePayment } from '~/redux/PaymentSlice.js';

function Payment() {
   const dispatch = useDispatch();
   const dataPayment = useSelector((state) => state.payment);

   //hook
   const [numCredit, setNumCredit] = useState('');
   const [date, setDate] = useState('');
   const [code, setCode] = useState('');
   const [post, setPost] = useState(false);
   const [reFetch, setReFetch] = useState(false);
   const [resPost, setResPost] = useState({ success: true, msg: 'SUCCESS' });
   const [visible, setVisible] = useState(false);

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
         console.log('length of numCredit < 16');
         return false;
      }
      if (code.length < 3) {
         console.log('length of code < 3');
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

   return (
      <View style={styles.wrapper}>
         <Text style={styles.header}>Payment Options</Text>
         <View style={styles.content}>
            <Text style={styles.label}>Credit/debit card</Text>
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
            <Text style={styles.error}>{!resPost.success && `* ${resPost.msg}`}</Text>

            <Text style={styles.label}>More payment options</Text>
            <ItemPaymentComponent items={dataPayment.data} />
         </View>

         <ButtonComponent style={styles.buttonSaveCard} title={'Save card'} onPress={handleOnPress} />

         <SuccessComponent visible={visible} success={resPost.success} msg={resPost.msg} onPress={handleOnPressPopUp} />
      </View>
   );
}

export default Payment;
