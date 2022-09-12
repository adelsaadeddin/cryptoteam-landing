// @ts-ignore
import styled from "styled-components";

const Plan = styled.div<{ color: string }>`
  max-width: 420px;
  overflow: hidden;
  background: ${({color}) => color};
  border-radius: 16px;
`

const Color = styled.div<{ color: string }>`
  background: ${({color}) => color};
  width: 100% !important;
  height: 16px;
`

const Card = styled.div`
  background: #0B1A20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 64px;
  border-radius: 16px 16px 0 0;
  padding: 32px;
  width: 100%;
`
const CardTitle = styled.div<{ color: string }>`
  text-align: center;
  color: ${({color}) => color};
`
const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  white-space: nowrap;
`
const DetailName = styled.div`
  text-transform: capitalize;
  margin-right: 16px;
`
const DetailValue = styled.div`
  color: #5382DF;
`
const FreezeProfitContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 40px;
  color: ${({color}) => color};
`

const FreezeProfitName = styled.div`
  text-transform: capitalize;
`

const FreezeProfitValue = styled.div`

`

const GetStarted = styled.div`
  text-align: center;

  button {
    border-radius: 15px;
    width: 100%;

    padding: 16px 64px;
    @media (max-width: 768px) {
      padding: 16px 64px;
      font-size: 14px;
    }
    background: #FFC634;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    cursor: pointer;
  }
`

export {
    Plan,
    Card,
    CardTitle,
    CardDetails,
    DetailContainer,
    DetailName,
    DetailValue,
    GetStarted,
    Color,
    FreezeProfitContainer,
    FreezeProfitValue,
    FreezeProfitName
}