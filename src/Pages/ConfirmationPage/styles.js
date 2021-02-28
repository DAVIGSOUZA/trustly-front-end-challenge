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
    @media(max-width: 450px) {
        display: none;
    }
`

export const ImgMobile = styled.img `
    display: none;
    @media(max-width: 450px) {
        display: initial;
        margin-right: 16px;
        width: 25vw;
        height: 100%;
        aspect-ratio: 1/1;
        border-radius: 8px;
        object-fit: cover;
    }
`

export const MobileContainer = styled.div `
    display: initial;
    @media(max-width: 450px) {
        display: flex;
        align-items: center;
    }
`

export const ConfirmationContainer = styled.div `
    display: flex;
    width: 45vw;
    padding: 20px;
    border-radius: 8px;
    background: #F7F7F7;
    @media(max-width: 450px) {
        flex-direction: column;
        width: 90vw;
        padding: 8px 16px;
    }
`

export const InfoSection = styled.section `
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 20px 0;
    @media(max-width: 450px) {
        width: 100%;
        margin: 8px 0;
    }
`

export const InfoContainer = styled.section `
    margin-bottom: 40px;
    @media(max-width: 450px) {
        margin-bottom: 16px;
    }
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
    height: 200px;
    align-items: center;
    @media(max-width: 450px) {
        height: 80px;
    }
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



