import styles from '../styles/Home.module.css'
import CoinsTable from "../components/Home/CoinsTable/CoinsTable.tsx";
import WhatWeDo from "../components/Home/WhatWeDo";
import Services from "../components/Home/Services";
import Statistics from "../components/Home/Statistics";
import Plans from "../components/Home/Plans";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Head from 'next/head'

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
    return {props: {data}}
}

export default function Home({data}) {
    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-GBFKC5E1W7"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-GBFKC5E1W7');
                </script>
                <title>CRYPTOTEAM – Get Profits Like nothing before</title>
                <meta name="title" content="CRYPTOTEAM – Get Profits Like nothing before">
                    <meta name="description"
                          content="Crypto Team is consisting of talented traders who use professional tools mainly in the cryptocurrency markets. When managing our users' funds, we make several dozen transactions a day to ensure guaranteed profits of 4% to 5%. We constantly analyze the situation in order to earn money quickly and effectively. Trust us with your money and enjoy your passive income every day.">

                        <!-- Open Graph / Facebook -->
                        <meta property="og:type" content="website">
                            <meta property="og:url" content="https://metatags.io/">
                                <meta property="og:title" content="CRYPTOTEAM – Get Profits Like nothing before">
                                    <meta property="og:description"
                                          content="Crypto Team is consisting of talented traders who use professional tools mainly in the cryptocurrency markets. When managing our users' funds, we make several dozen transactions a day to ensure guaranteed profits of 4% to 5%. We constantly analyze the situation in order to earn money quickly and effectively. Trust us with your money and enjoy your passive income every day.">
                                        <meta property="og:image"
                                              content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

                                            <!-- Twitter -->
                                            <meta property="twitter:card" content="summary_large_image">
                                                <meta property="twitter:url" content="https://metatags.io/">
                                                    <meta property="twitter:title" content="CRYPTOTEAM – Get Profits Like nothing before">
                                                        <meta property="twitter:description"
                                                              content="Crypto Team is consisting of talented traders who use professional tools mainly in the cryptocurrency markets. When managing our users' funds, we make several dozen transactions a day to ensure guaranteed profits of 4% to 5%. We constantly analyze the situation in order to earn money quickly and effectively. Trust us with your money and enjoy your passive income every day.">
                                                            <meta property="twitter:image"
                                                                  content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

            </Head>
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
        </>
)
}
