// @ts-ignore
import styled, {css} from "styled-components";


const Card = styled.div<{ left: boolean, margin: number, size: number }>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: ${({left}) => left ? 'start' : 'end'};
  background: #0B1A20;
  border-radius: 120px;
  align-items: center;
  align-content: center;
  width: ${({size}) => `calc(${(size > 1440 ? 440 / 4.4 : (size - 1000) / 4.4)}px + 340px)`};
  margin-bottom: 64px;
  ${({
       left,
       margin
     }) => left ? css`margin-right: ${margin == 0 ? 0 : 50 + (margin <= 1440 ? (margin - 1000) / 5.4 : 440 / 5.4)}px;` : 
          css`margin-left: ${margin == 0 ? 0 : 50 + (margin <= 1440 ? (margin - 1000) / 5.4 : 440 / 5.4)}px;`};

  @media (max-width: 950px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (max-width: 950px) {
    //margin: 0 30px 24px;
    gap: 12px;
    padding: 8px;
    width: 350px;
  }
  
  @media (max-width: 375px) {
    width: 300px;
  }
}

`
const CardBody = styled.div<{ left: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: end;
  text-align: ${({left}: { left: boolean }) => left === true ? 'start' : 'end'};
  gap: 2px;
`
const CardTitle = styled.div<{ left: boolean }>`
  text-align: ${({left}: { left: boolean }) => left === true ? 'start' : 'end'};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 170%;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }
`
const CardDescription = styled.div<{ left: boolean }>`
  text-align: ${({left}: { left: boolean }) => left === true ? 'start' : 'end'};
  margin-bottom: 8px;
  margin-left: 12px;
  margin-right: 12px;
  max-width: 300px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
  color: #E8E9E9;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 0;
    margin-right: 0;
  }

`
const CardIcon = styled.div<{ left: boolean }>`
  text-align: ${({left}: { left: boolean }) => left === true ? 'start' : 'end'};
  background: white;
  border-radius: 50%;
  padding: 24px;

  img {
    width: 40px;
    height: 40px;
  }


  ${({left}) => left ? css`margin-left: 12px;` : css`margin-right: 12px;`};
  @media (max-width: 768px) {
    padding: 16px;
    margin: 0;

    img {
      width: 32px;
      height: 32px;
    }
  }
  //margin-left: 8px;
`

export {Card, CardBody, CardTitle, CardDescription, CardIcon}