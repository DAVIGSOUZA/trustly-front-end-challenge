import React, { useContext } from 'react'
import Header from '../../Components/Header'
import StepBar from "../../Components/StepBar";
import PrimaryBtn from "../../Components/PrimaryBtn";
import { PageContainer, ConfirmationContainer, Img, ImgMobile, MobileContainer, InfoSection, InfoContainer, PriceContainer, PayMethod, ButtonContainer } from "./styles";
import bankIcon from "../../img/green-bank-icon.svg";
import { Subtitle, Text, Title } from '../../Components/Styles';
import GlobalStateContext from "../../Global/GlobalStateContext";


export default function ConfirmationPage() {
    const {states} = useContext(GlobalStateContext)

    return (
        <div>
            <Header backButton="true" title="Review and Confirmation"/>
            <StepBar lastStepActive='true'/>
            <PageContainer>
                <Img src={states.cart.maxresURL} alt={states.cart.description} />
                <ConfirmationContainer>
                    <InfoSection>
                        <InfoContainer>
                            <Title>Order summary</Title>
                            <MobileContainer>   
                                <ImgMobile src={states.cart.maxresURL} alt={states.cart.description} />
                                <div>
                                    <Subtitle>{states.cart.description}</Subtitle>
                                    <Text>x {states.cart.quantity} {states.cart.color} Size {states.cart.size}</Text>
                                    <Text>Item #{states.cart.id}</Text>
                                </div>
                            </MobileContainer>
                        </InfoContainer>
                        <InfoContainer>
                            <PriceContainer>
                                <div>
                                    <Subtitle>Total Cost</Subtitle>
                                    <Text>Delivery included</Text>
                                </div>
                                <span>${states.cart.total}</span>
                            </PriceContainer>
                        </InfoContainer>
                    </InfoSection>
                    <InfoSection>
                        <InfoContainer>
                            <Title>Payment Method</Title>
                            <PayMethod>
                                <img src={bankIcon} alt="" />
                                <Subtitle>{states.cart.payMethod}</Subtitle>
                            </PayMethod>
                        </InfoContainer>
                        <ButtonContainer>
                            <PrimaryBtn text="Place order"/>
                        </ButtonContainer>
                    </InfoSection>
                </ConfirmationContainer>
            </PageContainer>
        </div>
    )
}
