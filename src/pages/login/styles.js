import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
const styles = StyleSheet.create({
    fakeBackground:{
      marginTop:100,
      flex:1,
    },
    close:{
      backgroundColor:'#B6C2D2',
      width: 100,
      height: 7,
      marginBottom: 4,
      borderRadius: 99,
      shadowOffset: {
         width:0,
         height: 0,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      alignSelf:'center'
    },
    wrapper: {
      flex:1,
      backgroundColor: '#344053',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      shadowOffset: {
         width:0,
         height: -10,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
   },

   // header
   header:{
      alignItems:'center',
      justifyContent:'center',
      height:'30%',
   },
   loginImg:{
      width:60,
      height:60
   },
   loginTextImgBackground:{
      backgroundColor:'#4A8C88',
      shadowOffset: {
         width:0,
         height: 0,
      },
      shadowOpacity: 0.4,
      shadowRadius: 20,
      marginBottom:10,
   },
   loginTextImg:{
      width:100,
      height:60
   },
   text:{
      fontSize:20,
      fontWeight:'700',
      color:'#57A58F'
   },
   // content
   content:{
      height:'70%',
   },
   
   
});

export default styles;
