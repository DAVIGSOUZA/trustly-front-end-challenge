import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToCheckoutPage } from '../../Routes/coordinators'

export default function ProductCard() {
    const history = useHistory()
    
    return (
        <div>
            ProductCard
            <button onClick={() => goToCheckoutPage(history)}> Add to cart</button>
        </div>
    )
}
