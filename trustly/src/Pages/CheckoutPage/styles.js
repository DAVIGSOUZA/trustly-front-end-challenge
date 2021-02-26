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
    flex-direction: column;
    width: 45vw;
    padding: 20px;
    border-radius: 8px;
    background: #F7F7F7;
    h2 {
        font-size: 22px;
        font-weight: 400;
    }
`


export const InfoContainer = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 10px;
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

export const PayOptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const PayOptionButton = styled.button `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-radius: 8px;
    margin: 8px 0;
    padding: 30px;
    height: 75px;
    width: 100%;
    background: #FFFFFF;
    font-size: 16px;
    color: #535353;
:focus {
    outline: none;
    border: 1px solid #5DAC50;
}
`

export const SaveTag = styled.span `
    position: absolute;
    margin-right: 38vw;
    padding: 4px 12px;
    background-color: #FFCC00;
    border-radius: 2.079px;
    font-size: 10px;
    font-weight: 700;
    color: #9E7D27;    
`