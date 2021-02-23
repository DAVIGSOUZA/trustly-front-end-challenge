import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header'
import { goToConfirmationPage } from "../../Routes/coordinators";



export default function CheckoutPage() {
    const history = useHistory()

    return (
        <div>
            <Header backButton="true" title="Checkout"/>
            checkout content
            <button onClick={() => goToConfirmationPage(history)}> continue </button>
        </div>
    )
}
