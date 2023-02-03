import { useRef } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import images from '~/assets';
import styles from './styles.js';

/* API send 

{
   unlock: true,
   artSource: 'https://encrypted-tbn0.gstatic.com/images',
}
*/

function ImgDetail({ item, onPress }) {
   // console.log('itemIn ImgDetail', item);

   return (
      <TouchableOpacity onPress={onPress} disabled={item.unlock} activeOpacity={0.5} style={styles.wrapper}>
         {item.unlock && <Image source={images.icons.lockIcon} style={styles.icon} />}
         <Image source={{ uri: item.artSource }} style={styles.img} />
      </TouchableOpacity>
   );
}

export default ImgDetail;
