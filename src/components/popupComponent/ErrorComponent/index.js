import { Text, View, Image } from 'react-native';

import images from '~/assets';
import styles from './styles.js';

function ErrorComponent({ msg }) {
   return (
      <View style={styles.wrapper}>
         <View style={styles.content}>
            <Image style={[styles.square]} source={images.error404}></Image>
            <Text style={styles.text}>Something Wrong !!!</Text>
            <Text style={styles.text}>{`ERROR: ${msg}`}</Text>
         </View>
      </View>
   );
}

export default ErrorComponent;
