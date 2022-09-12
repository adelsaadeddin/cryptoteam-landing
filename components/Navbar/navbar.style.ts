// @ts-ignore
import styled from "styled-components";

export const Nav = styled.nav`
  padding-top: 128px;
`

// TODO: FIx navbar responsivity

const variantBackground = (variant: string = 'primary') => ({
    primary: '#EFB91C',
    secondary: 'transparent'
}[variant])

const variantColor = (variant: string = 'primary') => ({
    primary: '#151B29',
    secondary: '#EFB91C'
}[variant])


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  width: 100%;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  height: 128px;
  padding: 16px 55px;

  z-index: 999;


  @media (max-width: 768px) {
    justify-content: start;
    height: 56px;
    padding: 56px 16px;
  }
`


export const LinksContainer = styled.div`
  display: inline-flex;
  align-items: center;
  align-content: center;
  gap: 32px;
  margin-left: 48px;
  margin-right: 48px;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }


  @media (max-width: 768px) {
    display: none;
  }
`

export const Link = styled.a`
  //margin-left: 32px;
  //margin-right: 32px;

  font-family: 'Good Times';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  text-transform: uppercase;
`

export const AuthContainer = styled.div`
  display: inline-flex;

  @media (max-width: 768px) {
    display: none;
  }
`


export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  margin-right: 24px;
`

export const LogoTitle = styled.span`
  font-family: 'Good Times';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
  white-space: nowrap;

  & span {
    color: #EFB91C
  }
`

// TODO
export const Button = styled.button`
  &:not(:last-child) {
    margin-right: 10px;
  }

  padding: 12px 32px;
  width: 100%;
  white-space: nowrap;
  border: 1px solid #EFB91C;
  filter: drop-shadow(0px 12px 20px rgba(18, 84, 86, 0.29));
  border-radius: 8px;
  background: ${(props) => variantBackground(props.variant)};
  color: ${(props) => variantColor(props.variant)};;


  font-family: 'Good Times';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;


  &:hover {
    cursor: pointer;
  }
`
