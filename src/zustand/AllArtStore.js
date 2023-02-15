import { create } from "zustand";
import services from "~/services";

const useAllArtStore = create((set)=>({
    data:{type:'_all_arts',data:{}},
    status:'INIT',
    updateAllArtStore : async()=>{
        const res = await services.getAllArtWithAxios();
        console.log({res})
        set(()=>({data:res, status:'UPDATE'}))
    }
}))

export default useAllArtStore