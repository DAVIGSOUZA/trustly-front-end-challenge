import React from 'react'
import Header from '../../Components/Header'
import ProductCard from '../../Components/ProductCard';
import SearchBar from '../../Components/SearchBar';
import { ProductsContainer } from './styles';

export default function HomePage() {

    return (
        <div>
            <Header backButton="false" title="Sneakers"/>
            <SearchBar/>
            <ProductsContainer>
                <ProductCard name="SS Sneaker" price="100.00"/>
                <ProductCard name="SS Sneaker" price="100.00"/>
                <ProductCard name="SS Sneaker" price="100.00"/>
                <ProductCard name="SS Sneaker" price="100.00"/>
                <ProductCard name="SS Sneaker" price="100.00"/>
                <ProductCard name="SS Sneaker" price="100.00"/>
            </ProductsContainer>
        </div>
    )
}
