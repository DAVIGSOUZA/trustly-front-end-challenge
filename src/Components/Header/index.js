import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, BackButton, HeaderContainer, HeaderTitle, MobileHeaderTitle } from './styles'
import arrowIcon from "../../img/arrow.svg";
import { user } from "../../Data";

export default function Header(props) {
    const history = useHistory()

    return (
        <div>
            <HeaderContainer>
                {
                    props.backButton === "false" ? null 
                    : 
                    <BackButton onClick={() => history.goBack()}>
                        <img src={arrowIcon} alt="Back icon" />
                        <span>Back</span> 
                    </BackButton>
                }
                <HeaderTitle>{props.title}</HeaderTitle>
                <Avatar src={user.profileImg} alt="avatar" />
            </HeaderContainer>
            {props.mobileTitle === "false" ? null : <MobileHeaderTitle>{props.title}</MobileHeaderTitle>}
        </div>
    )
}
