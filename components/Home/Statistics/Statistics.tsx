import {Container, CardsList} from './Statistics.styles'
// @ts-ignore
import StatisticsCard from "../../StatisticsCard";
import {dummyCards} from "./Statistics.config";

export default function Statistics() {
    return (
        <Container>
            <CardsList>
                {
                    dummyCards.map(card => {
                        return (
                            <StatisticsCard
                                key={card.id}
                                value={card.value}
                                title={card.title}
                                icon={card.icon}
                            />
                        )
                    })
                }
            </CardsList>
        </Container>
    )
}