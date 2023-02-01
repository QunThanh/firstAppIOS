import { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles.js';
import images from '~/assets';

import ButtonComponent from '~/components/ButtonComponent';

function SuccessComponent({ visible = false, success = true, msg = 'SUCCESS', onPress }) {
   //
   return (
      <Modal isVisible={visible}>
         <View style={styles.wrapper}>
            <View style={styles.content}>
               <Image style={styles.img} source={success ? images.success : images.cancel} />
               {success ? (
                  <Text style={[styles.textSuccess, styles.text]}>{msg}</Text>
               ) : (
                  <Text style={[styles.textError, styles.text]}>ERROR</Text>
               )}
               {success ? <></> : <Text style={styles.text}>{msg}</Text>}
               <View style={styles.button}>
                  <ButtonComponent title="OK" onPress={onPress} />
               </View>
            </View>
         </View>
      </Modal>
   );
}

export default SuccessComponent;
