// @ts-ignore
import styled from "styled-components";

const Container = styled.div`
`

const url = '/icons/logo.svg'
const smallLogo = '/icons/mini-logo.svg'

const ServicesList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 120px;
  gap: 40px;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (max-width: 950px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    gap: 4px;
    background-image: none;
    justify-content: center;
  }

`

// TODO
const TitleContainer = styled.div`
  @media (min-width: 950px) {
    margin: 0 200px;
  }
`

const Title = styled.div`
  margin-top: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 26.3654px;
  line-height: 170%;
  text-align: center;
  margin-bottom: 8px;
`
const Subtitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 19.7741px;
  line-height: 170%;
  text-align: center;
  margin-bottom: 32px;
`

export {Container, ServicesList, Title, Subtitle, TitleContainer}