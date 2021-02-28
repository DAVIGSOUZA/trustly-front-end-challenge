import React, { useEffect, useContext } from 'react'
import Header from '../../Components/Header'
import ProductCard from '../../Components/ProductCard';
import SearchBar from '../../Components/SearchBar';
import { ProductsContainer } from './styles';
import GlobalStateContext from "../../Global/GlobalStateContext";
import { products } from "../../Data"

export default function HomePage() {
    const {states, setters} = useContext(GlobalStateContext)

    useEffect(() => {
        setters.setProducts(products)
    }, [setters])

    const filteredProducts = states.products.filter(item => {
        return item.description.toLowerCase().includes(states.searchInput.toLowerCase())
    })

    return (
        <div>
            <Header backButton="false" title="Sneakers"/>
            <SearchBar/>
            <ProductsContainer>
                {
                    states.searchInput === "" ? states.products.map(item => {
                        return (
                            <ProductCard 
                                key={item.id}
                                product={item}
                                img={item.thumbnailURL}
                                name={item.description}
                                price={item.price}
                            />
                        )
                    })
                    : filteredProducts.map(item => {
                        return (
                            <ProductCard 
                                key={item.id}
                                product={item}
                                img={item.thumbnailURL}
                                name={item.description}
                                price={item.price}
                            />
                        )
                    })
                }
            </ProductsContainer>
        </div>
    )
}
