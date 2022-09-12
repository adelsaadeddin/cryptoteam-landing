import {Vip, Content, Icon, Logo, Description, SocailMediaIcons, Crypto, AllRights, SocialIcon} from './Footer.styles'

export default function Footer() {
    return (
        <Content>
            <Logo>
                <Icon>
                    <img src="/icons/small-logo.svg" alt="youtube"/>
                </Icon>
                <Description>
                    <Crypto>Crypto team</Crypto>
                    <Vip>vip</Vip>
                </Description>
            </Logo>
            <AllRights>
                © all rights reserved Astraternus • 2022
            </AllRights>
            <SocailMediaIcons>
                <SocialIcon color="#FF0000">
                    <img src="/icons/socials/youtube.svg" alt="youtube"/>
                </SocialIcon>
                <SocialIcon color="#C13584">
                    <img src="/icons/socials/instagram.svg" alt="youtube"/>
                </SocialIcon>
                <SocialIcon color="#1DA1F2">
                    <img src="/icons/socials/twitter.svg" alt="youtube"/>
                </SocialIcon>
                <SocialIcon color="#3B5998">
                    <img src="/icons/socials/facebook.svg" alt="youtube"/>
                </SocialIcon>
            </SocailMediaIcons>
        </Content>
    );
}