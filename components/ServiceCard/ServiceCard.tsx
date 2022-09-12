import {CardTitle, CardDescription, CardBody, Card, CardIcon} from './ServiceCard.styles'

interface ICardProps {
    left: boolean
    icon: string
    title: string
    description: string
    margin: number
    size: number
}

const formatIcon = (icon) => {
    const path = '/icons/services'
    switch (icon) {
        case "stats":
            return path + '/stats.svg'
        case "shield":
            return path + '/shield.svg'
        case "wallet":
            return path + '/wallet.svg'
        case "trade":
            return path + '/trade.svg'
        default:
            return '/vercel.svg'
    }
}


export default function ServiceCard({left, description, title, icon, margin, size}: ICardProps) {
    return (
        <Card left={left} margin={margin} size={size}>
            {left ?
                <CardIcon left={left}>
                    <img src={formatIcon(icon)} alt={icon}/>
                </CardIcon> : ''
            }
            <CardBody>
                <CardTitle left={left}>
                    {title}
                </CardTitle>
                <CardDescription left={left}>
                    {description}
                </CardDescription>
            </CardBody>
            {!left ?
                <CardIcon left={left}>
                    <img src={formatIcon(icon)} alt={icon}/>
                </CardIcon> : ''
            }
        </Card>
    )
}