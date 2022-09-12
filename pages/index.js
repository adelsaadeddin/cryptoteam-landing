import styles from '../styles/Home.module.css'
import CoinsTable from "./CoinsTable/CoinsTable.tsx";
import WhatWeDo from "./WhatWeDo";
import Services from "./Services";
import Statistics from "./Statistics";
import Plans from "./Plans";
import Footer from "./Footer";
import Hero from "./Hero";

import { GetServerSideProps, NextPage } from "next";

import {Layout, Navbar} from '../components'
import CoinsCards from "./CoinsCards";
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1280px;
  margin-left: 32px;
  margin-right: 32px;
`

const PContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

export async function getServerSideProps() {
    const res = await fetch(`https://production.cryptoteam.vip/api/content/`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
export default function Home({data}) {
    return (
        <Layout footer={Footer} header={Navbar}>
            <div className={styles.container}>
                <Hero/>
                <PContainer>
                    <Container>
                        <CoinsTable/>
                        <CoinsCards/>
                        <WhatWeDo/>
                        <Services/>
                        <Statistics/>
                        <Plans/>
                    </Container>
                </PContainer>
            </div>
        </Layout>
    )
}
