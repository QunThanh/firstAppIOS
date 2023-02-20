import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
     wrapper: {
          flex:1,
          borderWidth:3,
          borderRadius:40,
          backgroundColor: 'white',
          paddingTop:50,
          flexDirection: 'column',
     },
     back:{
        position :'absolute',
        right:20,
        width:20,
        height:20,
     },
     wrapperHeader:{
          alignItems: 'center',
          padding:10,
          zIndex:-99,
          borderRadius:40,
     },
     title:{
          fontSize:22,
          fontWeight:'700',
     },

     description:{
          fontSize:15,
          fontWeight:'500',
          marginTop:20
     },

     wrapperInput:{
          flexDirection:'row',
          justifyContent:'center',
     },
     input:{
          justifyContent:'center',
          width:50,
          height:50,
          margin:10,
          backgroundColor:'#ccc',
          borderWidth:2,
          borderRadius: 10,
          shadowColor: 'black',
          shadowOpacity: 0.8,
          shadowRadius:5,
          shadowOffset :{
               width:0,
               height:0
          }
     },
     inputText:{
          fontSize:20,
          fontWeight:'800',
          alignSelf: 'center'
     },
     wrapperDec:{
          flexDirection:'row',
          alignSelf:'center',
          margin: 20,
     },
     blurText:{
          color:'#aaa'
     },
     textDec:{
          fontSize:15,
          fontWeight:'500',
     },

     login:{
          borderColor:'#ccc',
          borderBottomWidth:2,
          alignSelf:'center'
     }
});

export default styles;
