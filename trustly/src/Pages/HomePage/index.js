import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header'
import ProductCard from '../../Components/ProductCard';
import { goToCheckoutPage } from "../../Routes/coordinators";

export default function HomePage() {
    const history = useHistory()

    return (
        <div>
            <Header backButton="false" title="Sneakers"/>
            home content
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )
}
