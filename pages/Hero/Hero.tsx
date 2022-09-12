import {Chart1, Chart2, Chart3, Chart4, Chart5, ChartsContainer, Content, Description, TextContainer, Title} from './Hero.style'

export default function Hero() {
    return (
        <Content>
            <TextContainer>
                <Title>
                    <span>Invest</span>  more in <br/> CryptoTeam to <br/><span>get more</span>
                </Title>
                <Description>
                    Crypto Team is consisting of talented traders who use professional tools mainly in the cryptocurrency markets. When managing our users'
                    funds, we make several dozen transactions a day to ensure guaranteed profits of 4% to 5%. We constantly analyze the situation in order to
                    earn money quickly and effectively. Trust us with your money and enjoy your passive income every day.
                </Description>
            </TextContainer>
            <ChartsContainer>
                <Chart1 src='/charts/chart1.svg'/>
                <Chart2 src='/charts/chart2.svg'/>
                <Chart3 src='/charts/chart3.svg'/>
                <Chart4 src='/charts/chart4.svg'/>
                <Chart5 src='/charts/chart5.svg'/>
            </ChartsContainer>
        </Content>
    );
}