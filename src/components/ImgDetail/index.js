import { Image, TouchableOpacity } from 'react-native';

import images from '~/assets';
import styles from './styles.js';

/* API send 

{
   unlock: true,
   artSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4qTtwC9O8T4daOLnJTU1hyopFHMT72x-08vqq4CeAtueN1M8zVRirr36cdRu8ymExok&usqp=CAU',
}
*/

function ImgDetail({ item }) {
   // console.log('itemIn ImgDetail', item);
   return (
      <TouchableOpacity disabled={item.unlock} activeOpacity={0.5} style={styles.wrapper}>
         {item.unlock && <Image source={images.icons.lockIcon} style={styles.icon} />}
         <Image source={{ uri: item.artSource }} style={styles.img} />
      </TouchableOpacity>
   );
}

export default ImgDetail;
