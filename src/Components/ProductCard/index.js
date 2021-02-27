import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToCheckoutPage } from '../../Routes/coordinators'
import PrimaryBtn from '../PrimaryBtn'
import { CardContainer, OptionsContainer, Price } from './styles'
import GlobalStateContext from "../../Global/GlobalStateContext";
import NumberSelect from '../NumberSelect'


export default function ProductCard(props) {
    const history = useHistory()
    const {setters} = useContext(GlobalStateContext)
    const [selectedSize, setSelectedSize] = useState("38")
    const [selectedquantity, setSelectedQuantity] = useState("1")

    const addToCart = (product) => {
        product["size"] = selectedSize;
        product["quantity"] = selectedquantity;
        setters.setCart(product)
        goToCheckoutPage(history)
    }

    const handleSizeSelect = (event) => {
        const newStateValue = event.target.value
        setSelectedSize(newStateValue)
    }

    const handleQuantitySelect = (event) => {
        const newStateValue = event.target.value
        setSelectedQuantity(newStateValue)
    }

    return (
        <CardContainer>
            <img src={props.img} alt={props.name} />
            <h3>{props.name}</h3>
            <OptionsContainer>
                <NumberSelect min={38} max={43} name={'size'} value={selectedSize} onChange={handleSizeSelect} />
                <NumberSelect min={1} max={5} name={'quantity'} value={selectedquantity} onChange={handleQuantitySelect} />

                {/* <label for='size'>Size</label>
                <select name='size' id='size' value={selectedSize} onChange={(event) => handleSizeSelect(event) } >
                    {renderSizeOptions} 
                </select>
                <label for='quantity'>Quantity</label>
                <select name='quantity' id='quantity' value={selectedquantity} onChange={(event) => handleQuantitySelect(event) }>
                    {renderQuantityOptions}
                </select> */}
            </OptionsContainer>
            <Price>$ {props.price}</Price>
            <PrimaryBtn onClick={() => addToCart(props.product)} text="Add to cart" />
        </CardContainer>
    )
}
