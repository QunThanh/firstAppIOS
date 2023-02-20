import images from '~/assets';

const setRootApp = {
    root: {
       bottomTabs: {
          children: [
             {
                stack: {
                   id: 'HOME_TAB',
                   children: [
                      {
                         component: {
                            id: 'HOME_SCREEN',
                            name: 'HomePage',
                         },
                      },
                   ],
                   options: {
                      bottomTab: {
                         icon: images.icons.homeIconUnActive,
                         selectedIcon: images.icons.homeIconActive,
                      },
                   },
                },
             },
             {
                stack: {
                   id: 'PAYMENT_TAB',
                   children: [
                      {
                         component: {
                            id: 'PAYMENT_SCREEN',
                            name: 'PaymentPage',
                         },
                      },
                   ],
                   options: {
                      bottomTab: {
                         icon: images.icons.cardIconUnActive,
                         selectedIcon: images.icons.cardIconActive,
                      },
                   },
                },
             },
          ],
          options: {
             topBar: {
                visible: false,
             },
          },
       },
    },
 };



const setRootLogin = {
    root:{
      component:{
        name:'Login'
      }
    }
  }

  const setRootOtp = {
   root:{
      stack:{
         children:[
            {
               component : {
                  id: 'INPUT_NUM_SCREEN',
                  name:'InputNumber',
               }
            },
         ],
         options:{
            topBar:{
               visible: false,
            }
         }
      }
    }
  }
export {setRootApp,setRootLogin,setRootOtp}