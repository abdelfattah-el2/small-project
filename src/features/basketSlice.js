// the basket page 
import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";
const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers:{
     increaseAmount:(state , {payload})=>{
       const item = state.products.find(item => item.name === payload.name)
       item.amount++
     } ,
     decreaseAmount:(state , {payload})=>{
      const item = state.products.find(item => item.name === payload.name)
      item.amount--
    
    }
    , removItem:(state , {payload})=>{
       state.products = state.products.filter(item => item.name !== payload.name)
    },
    updateTotal:(state)=>{
       let amount =0
       let total =0
       state.products.forEach(item=>{
        amount += item.amount ;
        total += item.amount * item.price
       })
       state.amount = amount 
       state.total= total.toFixed(2)
    }
  }
});
export const {increaseAmount , decreaseAmount , removItem , updateTotal} = basketSlice.actions

export default  basketSlice.reducer;
