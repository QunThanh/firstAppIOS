import { View, SafeAreaView } from 'react-native';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.js';

//component
import ArtItemComponent from '~/components/ArtItemComponent';
import Category from '~/components/layout/Category';
import LoadingComponent from '~/components/popupComponent/LoadingComponent';
import ErrorComponent from '~/components/popupComponent//ErrorComponent';

//service
import services from '~/services';

//redux
import { updateItemInHome } from '~/redux/ItemInHomeSlide.js';
import { updateCategory } from '~/redux/CategorySlice.js';

function Home({ navigation }) {
   const dispatch = useDispatch();
   const dataCategory = useSelector((state) => state.category);

   const dataItemInHome = useSelector((state) => state.itemInHome);

   const {
      isError: isErrorCategory,
      isLoading: isLoadingCategory,
      error: errorCategory,
   } = useQuery('category', services.getCategory, {
      onSuccess: (res) => {
         // console.log('res-category', res);
         dispatch(updateCategory({ ...res }));
      },
      onError: (err) => {
         console.log('err-category', err);
      },
   });

   const {
      isError: isErrorItemInHome,
      isLoading: isLoadingItemInHome,
      error: errorItemInHome,
   } = useQuery('itemInHome', services.getItemHome, {
      onSuccess: (res) => {
         dispatch(updateItemInHome({ ...res }));
      },
      onError: (err) => {
         console.log('itemInHome-category', err);
      },
   });

   if (isErrorCategory || isErrorItemInHome)
      return (
         <>
            {isErrorCategory && <ErrorComponent msg={errorCategory.message} />}
            {isErrorItemInHome && <ErrorComponent msg={errorItemInHome.message} />}
         </>
      );

   if (isLoadingCategory || isLoadingItemInHome) return <LoadingComponent />;

   console.log({ dataCategory, dataItemInHome });

   return (
      <SafeAreaView style={styles.container}>
         <Category fullData={dataCategory.data} />
         <View style={styles.content}>
            <ArtItemComponent style={styles} navigation={navigation} data={dataItemInHome.data} />
         </View>
      </SafeAreaView>
   );
}

export default Home;
