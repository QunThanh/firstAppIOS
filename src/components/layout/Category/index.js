import { useState } from 'react';
import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { updateIndexCategory } from '~/redux/IndexCategorySlice.js';

import styles from './styles.js';

function Category({ fullData = {} }) {
   const dispatch = useDispatch();

   const dataCategory = fullData.data;

   //check type
   if (fullData.type != '_category') return console.log(`item.type is ${fullData.type}. it's wrong`);

   //Hook
   const [nameCategory, setNameCategory] = useState('Artist Books');

   const handlePress = (item, index) => {
      setNameCategory(item.nameCategory);
      dispatch(updateIndexCategory(index));
   };

   const Item = ({ item, index, onPress, backgroundColor = 'white', textColor = 'black' }) => (
      <TouchableOpacity key={index} onPress={onPress} style={[backgroundColor, styles.item]}>
         <Text style={nameCategory == item.nameCategory ? [textColor, styles.text] : styles.textBlur}>
            {item.nameCategory}
         </Text>
      </TouchableOpacity>
   );

   const renderItem = ({ item, index }) => {
      return <Item item={item} index={index} onPress={() => handlePress(item, index)} />;
   };

   return (
      <View style={styles.wrapper}>
         <Text style={styles.title}>All Art</Text>
         <FlatList
            style={styles.menuCategory}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dataCategory}
            renderItem={renderItem}
         />
      </View>
   );
}

export default Category;
