import { Button, Text, View } from "react-native";
import useAllArtStore from '~/zustand/AllArtStore.js'


function AllArtZustand() {
    const statusAllArt = useAllArtStore((state)=>state.status) 
    const dataAllArt = useAllArtStore((state)=>state.data.type)
    console.log({dataAllArt})
    return ( <View>
        <Text>All Art use Zustand</Text>
        <Text>{statusAllArt}</Text>
        <Text>{dataAllArt}</Text>
        <Button title="update" onPress={useAllArtStore((state)=>state.updateAllArtStore) }></Button>
    </View> );
}

export default AllArtZustand;