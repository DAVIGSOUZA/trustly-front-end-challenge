import styled from "styled-components";

export const PageContainer = styled.div `
    display: flex;
    margin: 20px;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-family: 'Open Sans', sans-serif;


`
export const Img = styled.img `
    width: 35vw;
    border-radius: 8px;
    object-fit: cover;
`

export const CheckoutContainer = styled.div `
    display: flex;
    width: 45vw;
    padding: 20px;
    border-radius: 8px;
    background: #F7F7F7;
`

export const InfoSection = styled.section `
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 20px 0;
`

export const InfoContainer = styled.section `
    margin-bottom: 40px;
`

export const PayMethod = styled.div `
    display: flex;
    align-items: center;
img {
    margin-right: 8px;
}
`

export const ButtonContainer = styled.div `
    display: flex;
    height: 100px;
    align-items: center;
`

export const PriceContainer = styled.div `
    margin-top: 16px;
    display: flex;
    align-items: flex-end;
span {
    margin-left: 32px;
    font-size: 44px;
}
`



