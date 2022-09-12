import {
    Plan,
    Card,
    CardTitle,
    CardDetails,
    DetailContainer,
    DetailName,
    DetailValue,
    GetStarted,
    Color,
    FreezeProfitName, FreezeProfitValue, FreezeProfitContainer
} from './PlanCard.styles'

export default function PlanCard({type, color}) {
    return (
        <Plan color={color}>
            <Color color={color}/>
            <Card>
                <CardTitle color={color}>
                    {type}
                </CardTitle>
                <CardDetails>
                    <DetailContainer>
                        <DetailName>
                            min deposit
                        </DetailName>
                        <DetailValue>
                            $100
                        </DetailValue>
                    </DetailContainer>
                    <DetailContainer>
                        <DetailName>
                            max deposit
                        </DetailName>
                        <DetailValue>
                            $100
                        </DetailValue>
                    </DetailContainer>
                    <DetailContainer>
                        <DetailName>
                            freeze period
                        </DetailName>
                        <DetailValue>
                            90 days
                        </DetailValue>
                    </DetailContainer>
                    <FreezeProfitContainer color={color}>
                        <FreezeProfitName>
                            freeze profit
                        </FreezeProfitName>
                        <FreezeProfitValue>
                            12%
                        </FreezeProfitValue>
                    </FreezeProfitContainer>
                </CardDetails>
                <GetStarted>
                    <button><span>Get started</span></button>
                </GetStarted>
            </Card>
        </Plan>
    )
}