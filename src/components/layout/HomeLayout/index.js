import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { useSelector, useDispatch, connect } from 'react-redux';

//component
import Category from '~/components/layout/Category';
import ArtItemComponent from '~/components/ArtItemComponent';
import CollectionsComponent from '~/components/CollectionsComponent';
import LoadingComponent from '~/components/popupComponent/LoadingComponent';
import ProgressBarLoadingComponent from '~/components/popupComponent/ProgressBarLoadingComponent';
import ErrorComponent from '~/components/popupComponent/ErrorComponent';
import styles from './styles.js';

//service
import services from '~/services';

//redux
import { updateCategory } from '~/redux/CategorySlice.js';
import { updateItemInHome } from '~/redux/ItemInHomeSlide.js';

function HomeLayout({ navigation, componentId }) {
   const dispatch = useDispatch();
   const dataCategory = useSelector((state) => state.category);
   const dataItemInHome = useSelector((state) => state.itemInHome);

   const selectCategory = useSelector((state) => state.indexCategory.data.index) || 0;

   const {
      isError: isErrorCategory,
      isLoading: isLoadingCategory,
      error: errorCategory,
   } = useQuery('category', services.getCategory, {
      onSuccess: (res) => {
         // console.log('res-category', res);
         dispatch(updateCategory({ ...res }));
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
   });

   if (isErrorCategory || isErrorItemInHome)
      return (
         <>
            {isErrorCategory && <ErrorComponent msg={errorCategory.message} />}
            {isErrorItemInHome && <ErrorComponent msg={errorItemInHome.message} />}
         </>
      );

   if (isLoadingCategory || isLoadingItemInHome) return <LoadingComponent />;

   // handle press index category
   const renderContent = () => {
      if (selectCategory == 0)
         return (
            <ArtItemComponent style={styles.artItemComponent} componentId={componentId} data={dataItemInHome.data} />
         );
      if (selectCategory == 1) return <CollectionsComponent />;
      else
         return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <ProgressBarLoadingComponent />
               <LoadingComponent />
            </View>
         );
   };

   return (
      <SafeAreaView style={styles.container}>
         <Category fullData={dataCategory.data} />
         <View style={styles.content}>{renderContent()}</View>
      </SafeAreaView>
   );
}

export default HomeLayout;
