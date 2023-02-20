import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: 'white',
      marginTop: 50,
      flexDirection: 'column',
   },
   close: {
      position: 'absolute',
      right: 20,
      width: 30,
      height: 30,
   },
   wrapperHeader: {
      alignItems: 'center',
      padding: 10,
      zIndex: -99,
   },
   title: {
      fontSize: 22,
      fontWeight: '700',
   },
   img: {
      width: 200,
      height: 200,
   },
   description: {
      fontSize: 15,
      fontWeight: '500',
      marginTop: 20,
   },

   wrapperInput: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
   },
   textInput: {
      width: '100%',
   },
   continue: {
      borderColor: '#ccc',
      borderBottomWidth: 2,
   },
});

export default styles;
