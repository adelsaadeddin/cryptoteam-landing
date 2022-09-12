// @ts-ignore
import styled from "styled-components";

const heightSizes = (size: string = 'md') => ({
    "md": "46px",
}[size])

const widthSizes = (size: string = 'md') => ({
    "md": "200px",
}[size])


const variantBackground = (variant: string = 'primary') => ({
    primary: '#EFB91C',
    secondary: 'transparent'
}[variant])

const variantColor = (variant: string = 'primary') => ({
    primary: '#151B29',
    secondary: '#EFB91C'
}[variant])


const Button = styled.button`
  border: 1px solid #EFB91C;
  filter: drop-shadow(0px 12px 20px rgba(18, 84, 86, 0.29));
  border-radius: 8px;
  background: ${(props) => variantBackground(props.variant)};
  color: ${(props) => variantColor(props.variant)};;

  font-family: 'Good Times';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;


  &:hover {
    cursor: pointer;
  }
`


export default Button;