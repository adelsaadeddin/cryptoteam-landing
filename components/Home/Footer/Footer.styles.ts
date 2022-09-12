// @ts-ignore
import styled from "styled-components";

const Content = styled.footer`
  padding: 60px 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #0B1A20;
  gap: 30px;
`

const Logo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`

const Icon = styled.div``
const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`
const Crypto = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`
const Vip = styled.div`
  color: #EFB91C;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
`
const AllRights = styled.div`
  text-align: center;
  text-transform: capitalize;
`
const SocailMediaIcons = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 40px;
`

const SocialIcon = styled.div<{color: string}>`
  background: ${({color}) => color};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

export {Vip, Crypto, Content, Icon, Logo, SocailMediaIcons, Description, AllRights, SocialIcon}