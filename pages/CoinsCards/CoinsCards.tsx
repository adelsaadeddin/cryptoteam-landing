import {Container, CardsList} from './CoinsCards.styles'
import CoinsCard from "../../components/CoinsCard/CoinsCard";
import {dummyCards} from "./CoinsCards.config";
import {Subtitle, Title} from "../CoinsTable/CoinsTable.styles";

export default function CoinsCards() {
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
                {
                    dummyCards.map((card, index) => {
                        return (
                            <CoinsCard key={card.id} icon={card.icon} title={card.title} value={card.value}
                                       percentage={card.percentage} index={index}/>
                        )
                    })
                }
            </CardsList>
        </Container>
    )
}