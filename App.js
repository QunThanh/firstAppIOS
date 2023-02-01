import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import Home from '~/pages/home';
import Payment from '~/pages/payment';
import images from '~/assets';
import stylesGlobal from '~/stylesGlobal/stylesGlobal.js';
import ItemDetail from '~/components/ItemDetail';
import store from '~/redux/store.js';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabHome = () => {
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
         <Tab.Screen name="Home" component={HomeTabScreen} />
         <Tab.Screen name="Payment" component={Payment} />
      </Tab.Navigator>
   );
};

const HomeTabScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
   );
};

const App = () => {
   return (
      <Provider store={store}>
         <QueryClientProvider client={queryClient}>
            <NavigationContainer>
               <Stack.Navigator>
                  <Stack.Screen name="Home" component={TabHome} options={{ headerShown: false }} />
                  <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ headerShown: false }} />
               </Stack.Navigator>
            </NavigationContainer>
         </QueryClientProvider>
      </Provider>
   );
};

export default App;
