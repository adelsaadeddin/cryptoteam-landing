// @ts-ignore
import styled from "styled-components";

const Card = styled.div<{index: number}>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  background: ${({index}) => index % 2 != 0 ? '#0B1A20' : '#EFB91C'};
  color: ${({index}) => index % 2 != 0 ? '#FFFFFF' : '#0A100D'};
  border-radius: 14.7px;
  padding: 28px 32px 28px 32px;
  min-width: 300px;
  gap: 24px;
`
const IconContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 24px;
  align-items: center;
  align-content: center;
`
const Icon = styled.div``
const IconTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 32.34px;
  line-height: 39px;
`
const Value = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 61px;
`
const Percentage = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 27.64px;
  line-height: 33px;

  color: #838383;
`

export {Card, Icon, IconTitle, IconContainer, Value, Percentage}