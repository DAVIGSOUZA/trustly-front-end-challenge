import React from 'react'
import Header from '../../Components/Header'
import ProgressBar from "../../Components/StepBar";
import PrimaryBtn from "../../Components/PrimaryBtn";
import { PageContainer, CheckoutContainer, Img, InfoSection, InfoContainer, PriceContainer, PayMethod, ButtonContainer } from "./styles";
import bankIcon from "../../img/green-bank-icon.svg";
import { Subtitle, Text, Title } from '../../Components/Styles';

export default function ConfirmationPage() {

    return (
        <div>
            <Header backButton="true" title="Review and Confirmation"/>
            <ProgressBar/>
            <PageContainer>
                <Img src="https://picsum.photos/300?random=1/" alt="" />
                <CheckoutContainer>
                    <InfoSection>
                        <InfoContainer>
                            <Title>Order summary</Title>
                            <Subtitle>SS Sneaker</Subtitle>
                            <Text>descrição do produto</Text>
                        </InfoContainer>
                        <InfoContainer>
                            <PriceContainer>
                                <div>
                                    <Subtitle>Total Cost</Subtitle>
                                    <Text>Delivery included</Text>
                                </div>
                                <span>$100</span>
                            </PriceContainer>
                        </InfoContainer>
                    </InfoSection>
                    <InfoSection>
                        <InfoContainer>
                            <Title>Payment Method</Title>
                            <PayMethod>
                                <img src={bankIcon} alt="" />
                                <Subtitle>Online Banking</Subtitle>
                            </PayMethod>
                        </InfoContainer>
                        <ButtonContainer>
                            <PrimaryBtn text="Place order"/>
                        </ButtonContainer>
                    </InfoSection>
                </CheckoutContainer>
            </PageContainer>
        </div>
    )
}
