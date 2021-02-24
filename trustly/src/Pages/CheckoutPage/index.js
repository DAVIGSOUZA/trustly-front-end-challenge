import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header'
import { goToConfirmationPage } from "../../Routes/coordinators";
import ProgressBar from "../../Components/StepBar";
import InfoCard from '../../Components/InfoCard';
import { InfoContainer, PriceContainer, PageContainer, CheckoutContainer, Img } from "./styles";



export default function CheckoutPage() {
    const history = useHistory()

    return (
        <div>
            <Header backButton="true" title="Checkout"/>
            <ProgressBar/>
            <PageContainer>
                <Img src="https://picsum.photos/300?random=1/" alt="" />
                <CheckoutContainer>
                    <InfoContainer>
                            <InfoCard title="Cart Total" subtitle="SS Sneaker" text="x 1 Green Size 41 item #3419028346"/>
                            <div>
                                <InfoCard title="Delivery Details" text="John Smith Phone n 98123473 Adress: rasedfas 1234"/>
                                <PriceContainer>
                                    <InfoCard subtitle="Total Cost" text="Delivery included"/>
                                    <span>$100</span>
                                </PriceContainer>
                            </div>
                    </InfoContainer>
                    <button onClick={() => goToConfirmationPage(history)}> continue </button>   
                </CheckoutContainer>
            </PageContainer>
        </div>
    )
}
