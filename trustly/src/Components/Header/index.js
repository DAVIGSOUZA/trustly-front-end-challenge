import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, BackButton, HeaderContainer, Title } from './styles'
import avatar from "../../img/avatar.png";

export default function Header(props) {
    const history = useHistory()

    return (
        <HeaderContainer>
            {props.backButton === "false" ? null : <BackButton onClick={() => history.goBack()}>Back</BackButton> }
            <Title>{props.title}</Title>
            <Avatar src={avatar} alt="avatar" />
        </HeaderContainer>
    )
}
