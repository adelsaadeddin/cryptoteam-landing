// @ts-ignore
import styled from "styled-components";

const Container = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  justify-content: center;
  text-align: center;
  flex-direction: column;


  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`
const CardsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
`

export {Container, CardsList}