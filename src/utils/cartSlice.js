import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[ ]
    },
    reducers: {
       addItem : (state, action) =>{
        //directly  modifying or mutating the state here 
       state.items.push(action.payload);
       },
       removeItem: (state) =>{
        state.items.pop();
       },
       clearCart: (state) =>{
        //state.items.length = 0;
        return {items:[]};// replaces original state
       },
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;