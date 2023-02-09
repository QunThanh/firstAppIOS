import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { updateMyArts } from '~/redux/MyArtsSlice.js';

import ErrorComponent from '~/components/popupComponent/ErrorComponent';
import ProgressBarLoadingComponent from '~/components/popupComponent/ProgressBarLoadingComponent';

import ImgDetail from '~/components/ImgDetail';

import styles from './styles.js';
import services from '~/services';
import Animated, { SlideInRight } from 'react-native-reanimated';

const RenderUI = ({ item, index }) => {
   return (
      <Animated.View entering={SlideInRight.delay(index * 100)}>
         <ImgDetail item={item} />
      </Animated.View>
   );
};

function CollectionsComponent({ style }) {
   const dispatch = useDispatch();
   const dataMyArts = useSelector((state) => state.myArts.data);

   const { isError, isLoading, error } = useQuery('myArts', services.getMyArts, {
      onSuccess: (res) => dispatch(updateMyArts({ ...res })),
   });

   if (isLoading) return <ProgressBarLoadingComponent />;

   if (isError) return <ErrorComponent msg={error.message} />;

   if (dataMyArts.type != 'my_arts') return console.log(`response wrong type. Current type: ${dataMyArts.type}`);

   const dataRender = dataMyArts.data;

   return (
      <FlatList
         showsVerticalScrollIndicator={false}
         data={dataRender}
         renderItem={RenderUI}
         numColumns={2}
         columnWrapperStyle={{
            justifyContent: 'space-around',
            flexWrap: 'wrap',
         }}
         keyExtractor={(item, index) => index}
      />
   );
}

export default CollectionsComponent;
