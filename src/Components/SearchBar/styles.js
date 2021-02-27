import styled from "styled-components";

export const SearchBarContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 10vw;
    height: 45px;
    border-bottom: 1px solid #BDBDBD;
`

export const SearchInput = styled.input `
    flex-grow: 1;
    text-align: left;
    align-self: center;
    margin-left: 1rem;
    margin-right: 4rem;
    border: none;
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
::placeholder {
    color: #A8A8A8;
    text-align: center;
}
:focus {
    outline: none;
}
`

export const SearchImg = styled.img `
    margin-left: 3rem;
`
