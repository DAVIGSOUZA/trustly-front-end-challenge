import React from 'react'
import { ComponentContainer, Step, Steps,InactiveStep,InactiveStepDescription, StepDescriptionContainer, StepBarContainer, Line } from './styles'

export default function StepBar(props) {

    return (
        <ComponentContainer>
            <StepBarContainer>
                <Steps >
                    <Step/>
                    <Step/>
                    {props.lastStepActive ? <Step/> : <InactiveStep/> }
                </Steps>
                <Line/>
            </StepBarContainer>
            <StepDescriptionContainer>
                <span>Cart</span>
                <span>Payment options</span>
                {props.lastStepActive? <span>Receipt</span> : <InactiveStepDescription>Receipt</InactiveStepDescription> }                
            </StepDescriptionContainer>
        </ComponentContainer>
    )
}
