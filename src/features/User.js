
import {createSlice} from '@reduxjs/toolkit'

   export const userSlice = createSlice({
        name:"user",
        initialState:{value:{name:"Paccy",age:0,email:"paccy@gmail.com",verified:true,}},
        reducers:{
            Login:(state, action)=>{
                state.value = action.payload
            },
        },
    });
    export default userSlice.reducer;
