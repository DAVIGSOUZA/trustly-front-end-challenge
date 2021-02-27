import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header'
import { goToConfirmationPage } from "../../Routes/coordinators";
import ProgressBar from "../../Components/StepBar";
import PrimaryBtn from "../../Components/PrimaryBtn";
import { InfoContainer, PriceContainer, PageContainer, CheckoutContainer, Img, PayOptionContainer, PayOptionButton, SaveTag } from "./styles";
import applepay from "../../img/applepay.svg";
import banks from "../../img/banks.svg";
import cards from "../../img/cards.svg";
import { Text, Title, Subtitle } from "../../Components/Styles";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { user, merchant } from "../../Data";


export default function CheckoutPage() {
    const history = useHistory()
    const {states, setters} = useContext(GlobalStateContext)
    const [totalCost, setTotalCost] = useState(states.cart.price)
    const [payMethod, setPayMethod] = useState("Online Banking")
    const selected = "1px solid #5DAC50"
    const price = Number(states.cart.price)
    const quantity = Number(states.cart.quantity)

    useEffect(() => {
        setTotalCost( price * quantity )

    }, [price, quantity])

    useEffect(() => {
        window.PayWithMyBank.addPanelListener(function(command, event) {
            if (command === 'event' && event.type === 'new_location') {
              if (event.data.indexOf('#success') === 0) {
                goToConfirmationPage(history)
              }
              return false;
            }
          });
    }, [history])

    const confirmCheckout = () => {
        if (payMethod === "Online Banking") {
            const newTotal = (totalCost - 10)
            setters.setCart({...states.cart, userId: user.id, payMethod: payMethod, total: newTotal})

            window.PayWithMyBank.establish({
                accessId: 'D61EC9BAF0BB369B9438',
                merchantId: '1004314986',
                metadata: { demo: 'enabled' },
                currency: 'USD',
                paymentType: 'Deferred',
                amount: states.cart.total,
                description: user.email,
                merchantReference: merchant.id,
                returnUrl: '#success',
                cancelUrl: '#cancel'
              })
        } else {
            setters.setCart({...states.cart, userId: user.id, payMethod: payMethod, total: totalCost})
            goToConfirmationPage(history)
        }
    }

    const selectPayMethod = (method) => {
        setPayMethod(method)
    }

    return (
        <div>
            <Header backButton="true" title="Checkout"/>
            <ProgressBar/>
            <PageContainer>
                <Img src={states.cart.maxresURL} alt={states.cart.description} />
                <CheckoutContainer>
                    <InfoContainer>
                        <div>
                            <Title>Cart total</Title>
                            <Subtitle>{states.cart.description}</Subtitle>
                            <Text>x {states.cart.quantity} {states.cart.color} Size {states.cart.size}</Text>
                            <Text>Item #{states.cart.id}</Text>
                        </div>
                        <div>
                            <Title>Delivery Details</Title>
                            <Text>{user.name}</Text>
                            <Text>phone {user.phone}</Text>
                            <Text>Adress: {user.address}</Text>
                            <PriceContainer>
                                <div>
                                    <Subtitle>Total Cost</Subtitle>
                                    <Text>Delivery included</Text>
                                </div>
                                <span>${totalCost}</span>
                            </PriceContainer>
                        </div>
                    </InfoContainer>
                    <div>
                        <h2>Select your payment method</h2>
                        <PayOptionContainer>
                            <SaveTag>SAVE $10</SaveTag>
                            <PayOptionButton 
                                border={payMethod === "Online Banking"? selected : "none" } 
                                onClick={() => selectPayMethod('Online Banking')}
                            >
                                <span>Online Banking</span>
                                <img src={banks} alt="" />
                            </PayOptionButton>

                            <PayOptionButton 
                                border={payMethod === "Credit Card"? selected : "none" } 
                                onClick={() => selectPayMethod('Credit Card')}
                            >
                                <span>Card Payment</span>
                                <img src={cards} alt="" />
                            </PayOptionButton>

                            <PayOptionButton 
                                border={payMethod === "Apple Pay"? selected : "none" } 
                                onClick={() => selectPayMethod('Apple Pay')}
                            >
                                <span>Apple Pay</span>
                                <img src={applepay} alt="" />    
                            </PayOptionButton>

                            <PrimaryBtn onClick={confirmCheckout} text="Continue"/>   
                        </PayOptionContainer>
                    </div>
                </CheckoutContainer>
            </PageContainer>
        </div>
    )
}
