// @ts-ignore
import styled from "styled-components";

const Container = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`

const PlansList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`

const Title = styled.div`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 160%;
  text-align: center;
  margin-bottom: 50px;
`

export {Container, PlansList, Title}