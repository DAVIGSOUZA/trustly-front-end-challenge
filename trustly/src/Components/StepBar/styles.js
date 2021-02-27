import styled from "styled-components";


export const StepBarContainer = styled.div `
  margin: 0 20vw;
  margin-bottom: 40px;
`

export const Steps = styled.div `
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`

export const Step = styled.div `
  width: 12px;
  height: 12px;
  background: #61CB46;
  border-radius: 50%;
`

export const InactiveStep = styled(Step) `
  background: #E8E8E8;
`

export const StepDescriptionContainer = styled.div `
  display: flex;
  justify-content: space-between;
  margin: 0 18.5vw 0 18.5vw;
  margin-top: -20px;
`

export const InactiveStepDescription = styled.span `
  color: #BEBEBE;
`

export const Line = styled.div `
  margin: 0 1%;
  width: 98%;
  margin-top: -46px;
  height: 1px;
  background: #E8E8E8;
`
