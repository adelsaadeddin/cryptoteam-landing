// @ts-ignore
import styled from "styled-components";

const Container = styled.div`
  //margin: 20px 120px;
`

const CardsList = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  gap: 48px;
`

const Card = styled.div`
  background: #0B1A20;
  border-radius: 23.8104px;
  //max-width: 33.33%;
  width: 302.08px;
`

const CardIcon = styled.div`
  margin-top: 50px;
  margin-left: 50px;
`

const CardTitle = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 28.5725px;
  line-height: 33px;
`

const CardDescription = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;

  font-style: normal;
  font-weight: 400;
  font-size: 22.2231px;
  line-height: 160%;
`

const CardLink = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 50px;

  font-style: normal;
  font-weight: 400;
  font-size: 19.0483px;
  line-height: 160%;

  color: #5180DC;
`

export {Container, CardsList, Card, CardIcon, CardLink, CardTitle, CardDescription}