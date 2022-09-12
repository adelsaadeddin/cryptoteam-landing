import {Icon, IconTitle, Card, IconContainer, Value, Percentage} from './CoinsCard.styles'

interface ICardProps {
    icon: string
    title: string
    value: string
    percentage: string
    index: number
}

const formatIcon = icon => {
    const path = '/icons'
    switch (icon) {
        case 'bitcoin':
            return path + '/bitcoin.svg'
        default:
            return '/vercel.svg'
    }
}

export default function CoinsCard ({icon, percentage, value, title, index}: ICardProps) {
    return (
        <Card index={index}>
            <IconContainer>
                <Icon>
                    <img src={formatIcon(icon)} alt={icon}/>
                </Icon>
                <IconTitle>{title}</IconTitle>
            </IconContainer>
            <Value>
                ${value}
            </Value>
            <Percentage>
                {percentage}%
            </Percentage>
        </Card>
    )
}