import React from 'react'
import { PrimaryButton } from "./styles";

export default function PrimaryBtn(props) {
    return (
        <PrimaryButton onClick={props.onClick}>
            {props.text}
        </PrimaryButton>
    )
}
