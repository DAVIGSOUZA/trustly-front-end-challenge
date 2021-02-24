import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, BackButton, HeaderContainer, Title } from './styles'
import avatar from "../../img/avatar.png";
import arrowIcon from "../../img/arrow.svg";

export default function Header(props) {
    const history = useHistory()

    return (
        <HeaderContainer>
            {
                props.backButton === "false" ? null 
                : 
                <BackButton onClick={() => history.goBack()}>
                <img src={arrowIcon} alt="Back icon" />
                <span>Back</span> 
                </BackButton>
            }
            <Title>{props.title}</Title>
            <Avatar src={avatar} alt="avatar" />
        </HeaderContainer>
    )
}
