import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './styles.js';

function ButtonComponent({
   leftIcon,
   rightIcon,
   source,
   onPress,
   title,
   disabled = false,
   onlyIcon = false,
   style,
   ...passProps
}) {
   // add props
   const props = {
      title,
      onPress,
      ...passProps,
   };

   //check disable
   if (disabled) {
      delete props.onPress;
   }

   //style from Style in passProps
   styles['custom'] = style;

   const renderIcon = () => {
      //UI only icon
      if (onlyIcon) {
         delete props.title;
         return (
            <View style={styles.iconBackground}>
               <Image style={styles.iconBackground.icon} source={source} />
            </View>
         );
      }

      //UI has icon in left, right or only text
      return (
         <View style={styles.hasIconBackground}>
            {leftIcon && <Image style={styles.hasIconBackground.leftIcon} source={source} />}
            <Text style={styles.text}>{title}</Text>
            {rightIcon && <Image style={styles.hasIconBackground.rightIcon} source={source} />}
         </View>
      );
   };

   return (
      <TouchableOpacity style={[styles.custom]} {...props}>
         {renderIcon()}
      </TouchableOpacity>
   );
}

export default ButtonComponent;
