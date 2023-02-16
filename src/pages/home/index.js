import HomeLayout from '~/components/layout/HomeLayout';
import StackAnimated from '~/components/animation/StackAnimated'

function Home({ componentId, run = true}) {
   return <StackAnimated 
      componentId = {componentId}
      run = {run}
      child = {<HomeLayout componentId={componentId} />}
   />
   // ;
}

export default Home;
