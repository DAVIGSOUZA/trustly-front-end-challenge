import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header'
import { goToConfirmationPage } from "../../Routes/coordinators";
import ProgressBar from "../../Components/StepBar";
import InfoCard from '../../Components/InfoCard';
import PrimaryBtn from "../../Components/PrimaryBtn";
import { InfoContainer, PriceContainer, PageContainer, CheckoutContainer, Img, PayOptionContainer, PayOptionButton, SaveTag } from "./styles";
import applepay from "../../img/applepay.svg";
import banks from "../../img/banks.svg";
import cards from "../../img/cards.svg";
import { Text, Title, Subtitle } from "../../Components/Styles";

export default function CheckoutPage() {
    const history = useHistory()

    const productDescription = `x 1 Green Size 41 item #3419028346`;



    return (
        <div>
            <Header backButton="true" title="Checkout"/>
            <ProgressBar/>
            <PageContainer>
                <Img src="https://picsum.photos/300?random=1/" alt="" />
                <CheckoutContainer>
                    <InfoContainer>
                        <div>
                            <Title>Cart total</Title>
                            <Subtitle>SS Sneaker</Subtitle>
                            <Text>x 1 Green Size 41 </Text>
                            <Text>Item #2839u512401Copy</Text>
                        </div>
                        <div>
                            <Title>Delivery Details</Title>
                            <Text>John smith</Text>
                            <Text>phone 123445</Text>
                            <Text>Adress: #2839u512401Copy</Text>
                            <PriceContainer>
                                <div>
                                    <Subtitle>Total Cost</Subtitle>
                                    <Text>Delivery included</Text>
                                </div>
                                <span>$100</span>
                            </PriceContainer>
                        </div>
                    </InfoContainer>
                    <div>
                        <h2>Select your payment method</h2>
                        <PayOptionContainer>
                            <SaveTag>SAVE $10</SaveTag>
                            <PayOptionButton>
                                <span>Online Banking</span>
                                <img src={banks} alt="" />
                            </PayOptionButton>
                            <PayOptionButton>
                                <span>Card Payment</span>
                                <img src={cards} alt="" />
                            </PayOptionButton>
                            <PayOptionButton>
                                <span>Apple Pay</span>
                                <img src={applepay} alt="" />    
                            </PayOptionButton>
                            <PrimaryBtn onClick={() => goToConfirmationPage(history)} text="Continue"/>   
                        </PayOptionContainer>
                    </div>
                </CheckoutContainer>
            </PageContainer>
        </div>
    )
}
