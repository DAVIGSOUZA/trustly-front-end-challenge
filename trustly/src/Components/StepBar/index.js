import React from 'react'
import { Step, Steps,InactiveStep,InactiveStepDescription, StepDescriptionContainer, StepBarContainer, Line } from './styles'

export default function StepBar(props) {

    // according the design, 
    // only the last step have style change 
    // so there's no need to bring more complexity to the component

    return (
        <div>
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
        </div>
    )
}
