import { Navigation } from 'react-native-navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '~/redux/store.js';

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

Navigation.events().registerAppLaunchedListener(async () => {
   Navigation.setRoot({
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
   });
});
