import {Title, Value, Card, Content, Icon} from './StatisticsCard.styles'

interface ICardProps {
    icon: string
    value: string
    title: string
}

const formatIcon = icon => {
    const path = '/icons/statistics'
    switch (icon) {
        case 'users':
            return path + '/users.svg'
        default:
            return '/vercel.svg'
    }
}

export default function StatisticsCard ({icon, title, value} : ICardProps) {
    return (
        <Card>
            <Icon>
                <img src={formatIcon(icon)} alt={icon}/>
            </Icon>
            <Content>
                <Value>
                    {value}
                </Value>
                <Title>
                    {title}
                </Title>
            </Content>
        </Card>
    )
}