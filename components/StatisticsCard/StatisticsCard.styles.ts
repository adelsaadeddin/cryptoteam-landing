// @ts-ignore
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #0B1A20;
  text-align: center;
  gap: 32px;
  padding-top: 40px;
  padding-bottom: 32px;
  border-radius: 24px;
  width: 303px;
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 8px;
`
const Value = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 19.7741px;
  line-height: 170%;
  color: #5180DC;
`
const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 19.7741px;
  line-height: 170%;
  color: #C8C8C8;
`
const Icon = styled.div``

export {Card, Title, Value, Content, Icon}