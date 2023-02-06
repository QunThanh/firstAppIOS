import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
   wrapper: {
      marginTop: 50,
   },
   header: {
      fontSize: 30,
      fontWeight: '600',
      padding: 20,
      borderBottomWidth: 4,
      borderBottomColor: 'red',
   },
   label: {
      marginBottom: 10,
      fontSize: 18,
      fontWeight: '600',
   },
   error: {
      color: 'red',
      marginLeft: 15,
      marginBottom: 10,
   },

   //content
   content: {
      // backgroundColor: 'green',
      padding: 20,
      height: '100%',
   },

   //credit
   wrapperCredit: {
      flexDirection: 'row',
   },
   icon: {
      width: 40,
      height: 40,
      marginLeft: 5,
      marginRight: 5,
   },
   styleText: {
      padding: 10,
      fontSize: 15,
      fontWeight: '500',
   },

   creditExtent: {
      flexDirection: 'row',
   },

   numCredit: {
      width: 300,
   },

   flex: {
      flex: 1,
   },

   //buttonSaveCard
   buttonSaveCard: {
      position: 'absolute',
      right: 30,
      bottom: 100,
      backgroundColor: 'white',
      borderRadius: 999,
      shadowColor: 'black',
      shadowRadius: 15,
      shadowOpacity: 0.3,
   },

   // buttonTroll
   buttonTap: {
      marginTop: 50,
      marginBottom: 50,
      position: 'absolute',
      right: 100,
      top: 100,
      borderRadius: 999,
      shadowColor: 'black',
      shadowRadius: 15,
      shadowOpacity: 0.3,
   },
});

export default styles;
