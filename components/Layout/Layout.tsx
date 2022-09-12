// @ts-ignore
import {NextFunctionComponent} from 'next'
// @ts-ignore
import styled from "styled-components";

interface LayoutProps {
    header: NextFunctionComponent,
    footer: NextFunctionComponent
}

const Main = styled.main`
`

const Section = styled.section`
  background-color: rgba(20, 26, 40, 0.01);
  backdrop-filter: blur(200px);
  background-size: 160px 160px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
`

const Circle = styled.div`
  background: #EFB91C;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  z-index: -4;
  position: absolute;
  
  &.c1{
    top: 160px;
    left: 12px;
  }

  &.c2{
    top: 860px;
    right: 12px;
  }
`



export default function Layout({header: Header, footer: Footer, children}): NextFunctionComponent<LayoutProps> {
    return (
        <>
            <Circle className="c1"/>
            <Circle className="c2"/>
            <Section>
                <Header/>
                <Main>
                    {children}
                </Main>
                <Footer/>
            </Section>
        </>
    )
}
