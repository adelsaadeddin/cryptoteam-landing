import {CardsList, Container, Title, Subtitle} from './WhatWeDo.styles'
// @ts-ignore
import WhatWeDoCard from "/components/WhatWeDoCard";
import {dummyCards} from "./WhatWeDo.config";

export default function WhatWeDo() {
    return (
        <Container>
            <div>
                <Title>
                    Hightest rated coins in the market
                </Title>
                <Subtitle>
                    We offer you the only investment plans in the market with daily withdrawal of your profits.
                </Subtitle>
            </div>
            <CardsList>
                {dummyCards.map(card => {
                    return (
                        <WhatWeDoCard
                            key={card.id}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                        />
                    )
                })}
            </CardsList>
        </Container>
    );
}