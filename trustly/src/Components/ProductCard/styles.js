import styled from "styled-components";

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
    margin: 0 20px 80px 20px;
    height: 370px;
    width: 297px;
:hover {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
}
img {
    width: 100%;
    height: 40%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    object-fit: cover;
}
h3 {
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
}
`

export const OptionsContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    color: #8D8D8D;

label {
    font-size: 12px;
}
select {
    width: 70px;
    height: 28px;
    border-radius: 25px;
    text-align-last: center;
}
select:focus {
    outline: none;
}
`

export const Price = styled.span `
    font-size: 21px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;

`

export const AddButton = styled.button `
    width: 275px;
    height: 40px;
    margin: 11px;
    border: none;
    color: #ffffff;
    border-radius: 4px;
    background-color: #6B8067;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    cursor: pointer;
:hover {
    background-color: #78A18A;
}
`
