import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children})=> {
    const[cart, setCart] = useState({
        products:[],
        totalQty: 0,
        total: 0,
    });

    console.log('cart', cart);

    return (
        <CartContext.Provider value ={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
};