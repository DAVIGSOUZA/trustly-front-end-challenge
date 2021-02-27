import styled from "styled-components";

export const OptionContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-grow: 1;
    align-items: center;
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