import React from 'react'
import { Step, Steps, StepDescription, StepBarContainer, Line, Dot } from './styles'

export default function StepBar() {
    return (
        <div>
            <StepBarContainer>
                <Steps >
                    <Step>
                        <Dot></Dot>
                    </Step>
                    <Step>
                        <Dot></Dot>
                    </Step>
                    <Step>
                        <Dot></Dot>
                    </Step>
                </Steps>
                <Line/>
            </StepBarContainer>
            <StepDescription>
                <span>Cart</span>
                <span>Payment options</span>
                <span>Receipt</span>
            </StepDescription>
        </div>
    )
}
