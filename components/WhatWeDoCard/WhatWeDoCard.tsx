import {CardTitle, CardLink, CardIcon, CardsList, Card, CardDescription, Container} from './WhatWeDoCard.styles'

interface ICardProps {
    icon: string
    title: string
    description: string
    link: string
}

const formatIcon = (icon) => {
    const path = '/icons/whatWeDo'
    switch(icon) {
        case 'stats':
            return path + '/stats.svg'
        case 'handshake':
            return path + '/handshake.svg'
        case 'bitcoin':
            return path + '/bitcoin.svg'
        default:
            return '/vercel.svg'
    }
}

export default function WhatWeDoCard({icon, title, description, link}: ICardProps) {
    return (
        <Card>
            <CardIcon>
                <img src={formatIcon(icon)} alt={icon} />
            </CardIcon>
            <CardTitle>
                {title}
            </CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
            <CardLink>
                <a href={link}>Learn more</a>
            </CardLink>
        </Card>
    );
}