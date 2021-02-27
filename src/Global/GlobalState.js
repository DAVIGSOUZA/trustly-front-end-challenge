import React, { useState, useMemo } from 'react'
import GlobalStateContext from "./GlobalStateContext";

export default function GlobalState(props) {
    const [searchInput, setSearchInput] = useState("") /* handle input in SearchBar component */
    const [products, setProducts] = useState([])  /* products array */
    const [cart, setCart] = useState({}) 

    const states = {searchInput, products, cart}
   
    const setters = useMemo(() => {
        return {setSearchInput, setProducts, setCart}
    }, [])


    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
