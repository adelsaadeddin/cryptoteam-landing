import {Container, ServicesList, Title, Subtitle, TitleContainer} from './Services.styles'
import ServiceCard from "../../ServiceCard/ServiceCard";
import {dummyCards} from './Services.config'
import {useEffect, useState} from "react";

export default function Services() {
    const size = useWindowSize()
    return (
        <Container>
            <div>
                <TitleContainer>
                    <Title>
                        What services we offer
                    </Title>
                    <Subtitle>
                        We can offer you one of the best deals on the market. Investment plans, their length and profits
                        have been recalculated in such a way that guarantee passive income for you. </Subtitle>
                </TitleContainer>
                <ServicesList>
                    <ServiceCard key={dummyCards[0].id} left={dummyCards[0].left} icon={dummyCards[0].icon}
                                 title={dummyCards[0].title}
                                 description={dummyCards[0].description}
                                 margin={size.width}
                                 size={size.width}
                    />
                    <ServiceCard key={dummyCards[1].id} left={dummyCards[1].left} icon={dummyCards[1].icon}
                                 title={dummyCards[1].title}
                                 description={dummyCards[1].description}
                                 margin={size.width}
                                 size={size.width}
                    />
                    <ServiceCard key={dummyCards[2].id} left={dummyCards[2].left} icon={dummyCards[2].icon}
                                 title={dummyCards[2].title}
                                 description={dummyCards[2].description}
                                 margin={0}
                                 size={size.width}
                    />
                    <ServiceCard key={dummyCards[3].id} left={dummyCards[3].left} icon={dummyCards[3].icon}
                                 title={dummyCards[3].title}
                                 description={dummyCards[3].description}
                                 margin={0}
                                 size={size.width}
                    />
                </ServicesList>
            </div>
        </Container>
    )
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}
