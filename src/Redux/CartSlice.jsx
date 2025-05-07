import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const itemIndex= state.products.find((item)=>item.id===newItem.id)
            if(itemIndex){
                item.quantity++;
                itemIndex.totalPrice+=newItem.price
            }else{
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }
            state.totalPrice+= newItem.price,
            state.totalQuantity++;
           }

    }
})
export const {addToCart} = CartSlice.actions
export default CartSlice.reducer;