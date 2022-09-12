// @ts-ignore
import styled from "styled-components";

const Container = styled.div`
  margin: 120px 40px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  table {
    border-collapse: collapse;
    border-radius: 10.6391px;
    overflow: hidden;

    thead {
      tr {
        background: #EFB91C;
        color: black;
        font-style: normal;
        font-weight: 700;
        font-size: 20.9698px;
        line-height: 170%;
      }
    }

    tr {
      td {
        padding: 16px 48px;
        font-style: normal;
        font-weight: 700;
        font-size: 20.9698px;
        line-height: 170%;
      }
    }
  }


  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 2440px) {
    margin-top: 320px;
  }

`

const TableRow = styled.tr<{ id: number }>`
  background: ${(props) => props.id % 2 == 0 ? '#EFB91C' : '#0B1A20'};
  color: ${(props) => props.id % 2 == 0 ? 'black' : 'white'};
`

const Title = styled.div`
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

export {Container, TableRow, Title, Subtitle}