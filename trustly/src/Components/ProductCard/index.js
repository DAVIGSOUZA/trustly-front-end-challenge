import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToCheckoutPage } from '../../Routes/coordinators'
import PrimaryBtn from '../PrimaryBtn'
import { AddButton, CardContainer, OptionsContainer, Price } from './styles'

export default function ProductCard(props) {
    const history = useHistory()

    return (
        <CardContainer>
            <img src="https://picsum.photos/300?random=1/" /*{props.img}*/ alt={props.name} />
            <h3>{props.name}</h3>
            <OptionsContainer>
                <span>Size</span>
                <select></select>
                <span>Quantity</span>
                <select></select>
            </OptionsContainer>
            <Price>$ {props.price}</Price>
            <PrimaryBtn onClick={() => goToCheckoutPage(history)} text="Add to cart" />
        </CardContainer>
    )
}
