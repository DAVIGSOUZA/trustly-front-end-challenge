import React, { useState } from 'react'
import GlobalStateContext from "./GlobalStateContext";

export default function GlobalState(props) {
    const [searchInput, setSearchInput] = useState("") /*handle input in SearchBar component*/
    const [products, setProducts] = useState([]) /*get products from promise*/
    const [cart, setCart] = useState({}) 

    const states = {searchInput, products, cart}
    const setters = {setSearchInput, setProducts, setCart}
    
    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
