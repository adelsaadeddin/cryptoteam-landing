import {AuthContainer, Container, Link, LinksContainer, Logo, LogoContainer, LogoTitle, Nav, Button} from "./navbar.style";


export default function Navbar() {
    return (
        <Nav>
            <Container>
                <LogoContainer>
                    <Logo src='/logo-small.svg'/>
                    <LogoTitle>Crypto team <span>vip</span></LogoTitle>
                </LogoContainer>
                <LinksContainer>
                    <Link> Home </Link>
                    <Link> About us </Link>
                    <Link> Contact us </Link>
                </LinksContainer>
                <AuthContainer>
                    <Button variant="secondary">Create account</Button>
                    <Button variant="primary">Login</Button>
                </AuthContainer>
            </Container>
        </Nav>
    )
}
