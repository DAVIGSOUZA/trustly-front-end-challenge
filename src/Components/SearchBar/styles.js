import styled from "styled-components";

export const SearchBarContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10vh 10vw;
    height: 45px;
    border-bottom: 1px solid #BDBDBD;
    @media(max-width: 450px) {
        margin: 4vh 10vw;
    }
`

export const SearchInput = styled.input `
    flex-grow: 1;
    text-align: left;
    align-self: center;
    margin-left: 1rem;
    margin-right: 4rem;
    border: none;
    font-size: 24px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    ::placeholder {
        color: #A8A8A8;
        text-align: center;
    }
    :focus {
        outline: none;
    }
    @media(max-width: 450px) {
        font-size: 20px;
    }
`

export const SearchImg = styled.img `
    margin-left: 3rem;
`
