import styled from "styled-components";

export const Title = styled.h2 `
    margin: 0;
    margin-bottom: 16px;
    font-family: 'Open Sans', sans-serif;
    font-size: 22px !important;
    font-weight: 400;
    @media(max-width: 450px) {
        font-size: 18px !important;
        margin-bottom: 8px;
    }
`

export const Subtitle = styled.h3 `
    margin: 0;
    margin-bottom: 8px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    @media(max-width: 450px) {
        font-size: 14px !important;
        margin-bottom: 4px;
    }
`

export const Text = styled.p `
    margin: 0;
    color: #A5A5A5;
    font-weight: 400;
    line-height: 25px;
    font-family: 'Open Sans', sans-serif;
    @media(max-width: 450px) {
        font-size: 14px !important;
    }
`