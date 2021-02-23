import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Header(props) {
    const history = useHistory()

    return (
        <header>
            {props.backButton === "false" ? null : <button onClick={() => history.goBack()}>Back</button> }
            <h1>{props.title}</h1>
            <img src="" alt="avatar" />
        </header>
    )
}
