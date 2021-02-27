import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, BackButton, HeaderContainer, Title } from './styles'
import arrowIcon from "../../img/arrow.svg";
import { user } from "../../Data";

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
            <Avatar src={user.profileImg} alt="avatar" />
        </HeaderContainer>
    )
}
