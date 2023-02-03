import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Provider } from 'react-redux';

import Home from '~/pages/home';
import Payment from '~/pages/payment';
import images from '~/assets';
import stylesGlobal from '~/stylesGlobal/stylesGlobal.js';
import ItemDetail from '~/components/ItemDetail';
import ItemDetailModal from '~/components/ItemDetailModal';
import store from '~/redux/store.js';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StackShared = createSharedElementStackNavigator({});

const TabBar = () => {
   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            headerShown: false,
            headerStyle: {
               height: 45, // Specify the height of your custom header
            },
            tabBarIcon: ({ focused }) => {
               let iconName;
               const sourceImg = images;
               if (route.name === 'Home') {
                  iconName = focused ? sourceImg.icons.homeIconActive : sourceImg.icons.homeIconUnActive;
               } else if (route.name === 'Payment') {
                  iconName = focused ? sourceImg.icons.cardIconActive : sourceImg.icons.cardIconUnActive;
               }
               return <Image style={stylesGlobal.iconTabBar} source={iconName}></Image>;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
         })}
      >
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="Payment" component={Payment} />
      </Tab.Navigator>
   );
};

const HomeScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="ScreenHome" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
   );
};

const optionsOfItemDetail = {
   headerShown: false,
   cardStyleInterpolator: ({ current: { progress } }) => {
      return {
         cardStyle: {
            backgroundColor: 'tranpersrant',
            opacity: progress,
         },
      };
   },
};
const optionsOfItemDetailModal = {
   headerShown: false,
   cardStyleInterpolator: ({ current: { progress } }) => {
      return {
         cardStyle: {
            // backgroundColor: 'tranpersrant',
            opacity: progress,
         },
      };
   },
};

const App = () => {
   return (
      <Provider store={store}>
         <QueryClientProvider client={queryClient}>
            <NavigationContainer>
               <StackShared.Navigator>
                  <StackShared.Screen name="ScreenHome" component={TabBar} options={{ headerShown: false }} />
                  <StackShared.Screen
                     name="ItemDetail"
                     component={ItemDetail}
                     options={optionsOfItemDetail}
                     sharedElements={(route) => {
                        return [{ animation: 'fade', resize: 'none', id: `Item-Detail-${route.params.index}` }];
                     }}
                  />

                  <StackShared.Screen
                     name="ItemDetailModal"
                     component={ItemDetailModal}
                     options={optionsOfItemDetailModal}
                     sharedElements={(route) => {
                        return [{ animation: 'fade', id: `img-detail-${route.params.index}` }];
                     }}
                  />
               </StackShared.Navigator>
            </NavigationContainer>
         </QueryClientProvider>
      </Provider>
   );
};

export default App;
