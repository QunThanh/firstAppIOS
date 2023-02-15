import { Navigation } from 'react-native-navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '~/redux/store.js';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import { types } from '@babel/core';
import { useEffect, useState } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';

import Login from '~/pages/login';
import Home from '~/pages/home';
import Payment from '~/pages/payment';
import ItemDetail from '~/components/ItemDetail';
import ItemDetailModal from '~/components/ItemDetailModal';
import images from '~/assets';

const queryClient = new QueryClient();

function registerComponent(stringId, Component) {
   return Navigation.registerComponent(
      stringId,
      () => (props) => {
         return (
            <SafeAreaProvider>
               <Provider store={store}>
                  <QueryClientProvider client={queryClient}>
                     <Component {...props} />
                  </QueryClientProvider>
               </Provider>
            </SafeAreaProvider>
         );
      },
      () => Component,
   );
}

registerComponent('HomePage', Home);
registerComponent('PaymentPage', Payment);
registerComponent('ItemDetail', ItemDetail);
registerComponent('ItemDetailModal', ItemDetailModal);
registerComponent('Login', Login)

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

Navigation.events().registerAppLaunchedListener(async () => Navigation.setRoot(setRootLogin)
);




//===============================


// function registerComponent(stringId, Component) {
//    return Navigation.registerComponent(
//       stringId,
//       () => (props) => {
//          return (
//             <SafeAreaProvider>
//                <Component {...props} />
//             </SafeAreaProvider>
//          );
//       },
//       () => Component,
//    );
// }

// const LoginScreen = () => {
//    return (
//      <View style={styles.root}>
//        <Button
//          title='Login'
//          color='#710ce3'
//          onPress={() => Navigation.setRoot(mainRoot)}
//        />
//      </View>
//    );
//  };
 
//  const HomeScreen = (props) => {
//    console.log('HomeScreen');

//    return (
//      <View style={styles.root}>
//        <Text>Hello React Native Navigation 👋</Text>
 
//        <Button
//          title='Push Settings Screen'
//          color='#710ce3'
//          onPress={() => Navigation.push(props.componentId, {
//            component: {
//              name: 'Settings',
//              passProps:{run:true}
//            }
//          })} />
//      </View>
//    );
//  };
//  HomeScreen.options = {
//    topBar: {
//      title: {
//        text: 'Home'
//      }
//    },
   
//    bottomTab: {
//      text: 'Home',
//    }
//  };
 

 
//  const SettingsScreen = ({run = false,componentId}) => {
//     console.log('run in SettingsScreen',run);
//     console.log('SettingsScreen');
//     const Screen = (
//       <View >
//           <Text>Settings Screen</Text>
//       </View>
//       )
//    return ( <Animation componentId={componentId} run={run} child={Screen}/>
     
//    );
//  }
//  SettingsScreen.options = {
//    topBar: {
//      title: {
//        text: 'Settings'
//      }
//    },
//    bottomTab: {
//      text: 'Settings',
//    }
//  }
// //  registerComponent('Login', () => LoginScreen);
// //  registerComponent('Home', () => HomeScreen);
// //  registerComponent('Settings', () => SettingsScreen);
//  Navigation.registerComponent('Login', () => LoginScreen);
//  Navigation.registerComponent('Home', () => HomeScreen);
//  Navigation.registerComponent('Settings', () => SettingsScreen);
 
//  const mainRoot = {
//    root: {
//      bottomTabs: {
//       tabsAttachMode: 'onSwitchToTab',
//        children: [
//          {
//            stack: {
//              children: [
//                {
//                  component: {
//                    name: 'Home'
//                  },
                 
//                },
//              ]
//            }
//          },
//          {
//            stack: {
//              children: [
//                {
//                 id:'Settings',
//                  component: {
//                    name: 'Settings',
//                    id:'Settings',
//                  }
//                }
//              ]
//            }
//          }
//        ]
//      }
//    }
//  };
//  const loginRoot = {
//    root: {
//      component: {
//        name: 'Login',  
//      }
//    }
//  };
 
 
//  Navigation.setDefaultOptions({
//    statusBar: {
//      backgroundColor: 'red'
//    },
//    topBar: {
//      title: {
//        color: 'white'
//      },
//      backButton: {
//        color: 'white'
//      },
//      background: {
//        color: '#4d089a'
//      }
//    },
//    bottomTab: {
//      fontSize: 15,
//      selectedFontSize: 20,
//    },
//    animations: {
//     setRoot: {
//       alpha: {
//         from: 0,
//         to: 1,
//         duration: 400,
//         interpolation: [{types:'accelerate'}],
//       },
//     },
//   },
// });
//  Navigation.events().registerAppLaunchedListener( () => {
//    Navigation.setRoot(loginRoot);
//  });

//  Navigation.events().registerBottomTabPressedListener((value)=>{
//   console.log({value})
//   if (value.tabIndex == 1)
//   {
//     console.log(`index:${value.tabIndex}.`);
//     Navigation.updateProps('Settings',{run: true});
//   }
//   if (value.tabIndex == 0) 
//   {
//     console.log(`index:${value.tabIndex}.`);
//     Navigation.updateProps('Settings',{run: false});
//   }
//  })

// //  const entering = (values) => {
// //    'worklet';
// //    const animations = {
// //      opacity: withTiming(1, { duration: 1000 }),
// //      transform: [
// //       { scale: withTiming(1, { duration: 3500 }) },
// //     ],
// //    };
// //    const initialValues = {
// //       opacity:0,
// //      transform: [ { scale: 3 }],
// //    };
// //    return {
// //      initialValues,
// //      animations,
// //    };
// //  };

// const Animation = ({run,componentId ,child})=>{
//   opacity = useSharedValue(0);
//   scale = useSharedValue(3);
//   const [runAnimation,setRunAnimation] = useState(run);
//   console.log('Run in Animation:',run);

//   useEffect(()=>{
//     // setRunAnimation(run);
//     console.log({run, componentId});
//     if(run){
//       opacity.value = withTiming(1,{duration:1000});
//       scale.value = withTiming(1,{duration:1000});
//       return
//     }
//     opacity.value = withTiming(0,{duration:1000});
//     scale.value = withTiming(3,{duration:1000});

//   },[run])

//   const animatedStyle = useAnimatedStyle(()=>{
//     return {
//       opacity: opacity.value,
//       transform:[
//         {
//           scale: scale.value,
//         }
//       ]
//     }
//   })

//    return  <Animated.View componentId={componentId} style={[styles.root,  animatedStyle ]} >
//     {child}
//     </Animated.View>
  
// }
 
//  const styles = StyleSheet.create({
//    root: {
//      flex: 1,
//      alignItems: 'center',
//      justifyContent: 'center',
//      backgroundColor: 'whitesmoke'
//    }
//  });
