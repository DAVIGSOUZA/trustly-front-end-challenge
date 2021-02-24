import styled from "styled-components";

export const PageContainer = styled.div `
    display: flex;
    margin: 20px;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: space-evenly;

`
export const Img = styled.img `
    width: 30vw;
    border-radius: 8px;
    object-fit: cover;
`

export const CheckoutContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding: 20px;
    border-radius: 8px;
    background: #F7F7F7;
`


export const InfoContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
`

export const PriceContainer = styled.div `
    display: flex;
    align-items: flex-end;
span {
    font-size: 44px;
    font-family: 'Open Sans', sans-serif;
}

`