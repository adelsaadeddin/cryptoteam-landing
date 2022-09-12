import PlanCard from "../../components/PlanCard/PlanCard";
import {Container, PlansList, Title} from './Plans.styles'

export default function Plans() {
    return (
        <Container>
            <Title>
                Our plans
            </Title>
            <PlansList>
                <PlanCard type="Gold" color="#FFC634"/>
                <PlanCard type="Silver" color="#E2E2E2"/>
                <PlanCard type="Platinum" color="#FF6161"/>
            </PlansList>
        </Container>
    )
}