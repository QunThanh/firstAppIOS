import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
   input: {
      margin:15,
      marginHorizontal:50,
      padding: 15,
      borderColor: '#41817C',
      borderWidth: 4,
      borderRadius: 18,
      fontWeight:'600',
      fontSize: 20,
      color:'gold',
      zIndex:10
   },
   label:{
      position:'absolute',
      paddingHorizontal:10,
      left:70,
      borderRadius: 99,
      fontSize: 25,
      fontWeight:'600',
      color:'#aaa',
      backgroundColor:'#344053',
   },
   error:{
      fontSize: 15,
      color:'#aa3311',
      fontWeight:'600',
      marginHorizontal:70,
   }
});

export default styles;
