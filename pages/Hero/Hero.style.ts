// @ts-ignore
import styled from "styled-components";
// import Svg1 from '../../public/charts/chart1.svg';
// import Svg2 from '../../public/charts/chart2.svg';
// import Svg3 from '../../public/charts/chart3.svg';
// import Svg4 from '../../public/charts/chart4.svg';
// import Svg5 from '../../public/charts/chart5.svg';

const Content = styled.div`
  margin: 100px 120px 120px 120px;
  display: flex;
  
  justify-content: center;

  @media (max-width: 768px) {
    margin: auto 16px;
  }
`

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ChartsContainer = styled.div`
  width: 50%;
  display: flex;
  
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`

const Title = styled.h1`
  font-family: 'Good Times';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 120%;

  text-transform: uppercase;
  color: #FBFCFE;
  
  & span {
    color: #EFB91C;
  }
`

const Description = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;

  color: #CBCBCB;
`


const Chart = styled.img`
  height: auto;
  position: absolute;

`
const Chart1 = styled(Chart)`
  width: 65%;
  left: 30px;
  top: 220px;
`;

const Chart2 = styled(Chart)`
  width: 75%;

  left: 30px;
  top: 60px;
`

const Chart3 = styled(Chart)`
  width: 40%;

  left: 54px;
  top: 0;
`

const Chart4 = styled(Chart)`
  width: 40%;

  top: 300px; 
  left: 270px;
`

const Chart5 = styled(Chart)`
  width: 35%;

  left: 310px;
  top: 12px;
`

export {Content, TextContainer, ChartsContainer, Description, Title, Chart1, Chart2, Chart3, Chart4, Chart5}

