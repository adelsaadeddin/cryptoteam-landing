import styles from '../styles/Home.module.css'
import CoinsTable from "../components/Home/CoinsTable/CoinsTable.tsx";
import WhatWeDo from "../components/Home/WhatWeDo";
import Services from "../components/Home/Services";
import Statistics from "../components/Home/Statistics";
import Plans from "../components/Home/Plans";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";

import { GetServerSideProps, NextPage } from "next";

import {Layout, Navbar} from '../components'
import CoinsCards from "../components/Home/CoinsCards";
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
