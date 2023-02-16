import { create } from "zustand";

const useUserStore = create((set)=>({
    data:{type:'_user',data:{}},
    status:'INIT',
    updateUser : (data)=>{
        set(()=>({data: {type:'_user',data}, status:'UPDATE'}))
    }
}))

export default useUserStore