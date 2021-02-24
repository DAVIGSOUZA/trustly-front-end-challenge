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
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
`

export const Avatar = styled.img `
    align-self: center;
    margin-right: 6vw;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`

export const BackButton = styled.button `
    display: flex;
    justify-content: center;
    position: absolute;
    margin-top: 1.6rem;
    margin-left: 6vw;
    padding: 4px;
    width: 100px;
    border: none;
    border-radius: 17px;
    background: rgba(0, 0, 0, 0.05);
    cursor: pointer;
    font-size: 21px;
:hover {
    background: rgba(0, 0, 0, 0.1);
}
img {
    width: 16px;
    margin-top: 4px;
    margin-right: 4px;
}
`