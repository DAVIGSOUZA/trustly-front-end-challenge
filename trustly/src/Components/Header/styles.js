import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    height: 80px;
    background: #F1F1F1;
`

export const Title = styled.h1 `
    flex-grow: 1;
    text-align: center;
    align-self: center;
    margin: 0;
    margin-left: 6vw;
    padding: 0;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
`

export const Avatar = styled.img `
    align-self: center;
    margin-right: 6vw;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`

export const BackButton = styled.button `
    position: absolute;
    margin-top: 1rem;
    margin-left: 6vw;
`