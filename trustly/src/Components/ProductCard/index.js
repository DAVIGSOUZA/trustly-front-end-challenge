import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToCheckoutPage } from '../../Routes/coordinators'
import PrimaryBtn from '../PrimaryBtn'
import { CardContainer, OptionsContainer, Price } from './styles'
import GlobalStateContext from "../../Global/GlobalStateContext";


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

    // const renderOptions = (firstNumber, lastNumber) => {
    //     let options = []
    //     for (let intervalNumber = firstNumber; intervalNumber <= lastNumber; intervalNumber++) {
    //         options.push(intervalNumber)
    //     }
    //     console.log(options)
    //     options.map((item) => {
    //         return (
    //             <option value={item} key={item}>
    //                 {item}
    //             </option>
    //         )
    //     })
    // }

    let sizeOptions = []
    for (let size = 38; size <= 42; size++) {
        sizeOptions.push(size)
    }

    const renderSizeOptions = sizeOptions.map((size) => {
        return (
            <option value={size} key={size}>
                {size}
            </option>
        )
    })

    let quantityOptions = []
    for (let quantity = 1; quantity <= 5; quantity++) {
        quantityOptions.push(quantity)
    }

    const renderQuantityOptions = quantityOptions.map((quantity) => {
        return (
            <option value={quantity} key={quantity}>
                {quantity}
            </option>
        )
    })

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
                <label for='size'>Size</label>
                <select name='size' id='size' value={selectedSize} onChange={(event) => handleSizeSelect(event) } >
                    {renderSizeOptions} 
                </select>
                <label for='quantity'>Quantity</label>
                <select name='quantity' id='quantity' value={selectedquantity} onChange={(event) => handleQuantitySelect(event) }>
                    {renderQuantityOptions}
                </select>
            </OptionsContainer>
            <Price>$ {props.price}</Price>
            <PrimaryBtn onClick={() => addToCart(props.product)} text="Add to cart" />
        </CardContainer>
    )
}
