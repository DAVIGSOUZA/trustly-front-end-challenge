import styled from "styled-components";
import { Title } from "../../Components/Styles";

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
    @media(max-width: 450px) {
        display: none;
    }
`

export const ImgMobileContainer = styled.div `
    display: none;
    @media(max-width: 450px) {
        display: initial;
        position: absolute;
        border-radius: 8px;
        width: 30vw;
        height: 160px;
        overflow: hidden;
    }
`

export const ImgMobile = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.4);
`


export const CheckoutContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 45vw;
    padding: 20px;
    border-radius: 8px;
    background: #F7F7F7;
    @media(max-width: 450px) {
        width: 90vw;
    }
`


export const InfoContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    @media(max-width: 450px) {
        padding: 0;
    }
`

export const InfoCard = styled.div `
    width: 50%;
    @media(max-width: 450px) {
        margin-top: 8px;
        margin-left: 50%;
        width: 100%;
    }
`


export const PriceCard = styled.div `
    margin-top: 16px;
    display: flex;
    align-items: flex-end;
    margin-left: 50%;
    width: 100%;
    span {
        margin-left: 32px;
        font-size: 44px;
    }
    @media(max-width: 450px) {
        margin-left: 0;
        justify-content: space-between;
    }
`

export const PayOptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 32px;
`

export const PayMethodTitle = styled(Title) `
    align-self: flex-start;
`

export const TitleHiddenInMobile = styled(Title) `
    @media(max-width: 450px) {
        display: none;
    }
`


export const PayOptionButton = styled.button `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${props => props.border};
    border-radius: 8px;
    margin: 8px 0;
    padding: 32px;
    height: 75px;
    width: 100%;
    background: #FFFFFF;
    font-size: 16px;
    color: #535353;
    :focus {
        outline: none;
    }
    @media(max-width: 450px) {
        font-size: 14px;
        padding: 16px;
        img {
            max-height: 24px;
            max-width: 130px;
        }
        div {
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-start;
        }
    }
`

export const SaveTag = styled.span `
    position: absolute;
    margin-top: -38px;
    margin-right: 38vw;
    padding: 4px 12px;
    background-color: #FFCC00;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
    color: #9E7D27;    
    @media(max-width: 450px) {
        position: initial;
        margin: 0;
        margin-top: 4px;
        border-radius: 6px;
        padding: 4px 12px;
    }
`