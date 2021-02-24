import React from 'react'
import { CardContainer, Title, Subtitle, Text } from "./styles";

export default function InfoCard(props) {
    return (
        <CardContainer>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
            <Text>{props.text}</Text>
        </CardContainer>
    )
}
