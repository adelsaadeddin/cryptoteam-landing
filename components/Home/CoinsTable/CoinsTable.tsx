import Table from '../../Table/Table';
import {cols, dummyRows} from './CoinsTable.config';
import {Container, TableRow, Title, Subtitle} from './CoinsTable.styles';

export default function CoinsTable() {
    const rows = (data) => {
        return (
            <>
                {data.map(item => {
                    return (
                        <TableRow id={item.id} key={item.id}>
                            <td>
                                {item.coin.title}
                            </td>
                            <td>
                                $ {item.lastPrice}
                            </td>
                            <td>
                                $ {item.volume}
                            </td>
                            <td>
                                $ {item.change}
                            </td>
                        </TableRow>
                    )
                })}
            </>
        )
    }

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
            <Table cols={cols} rows={rows(dummyRows)}/>
        </Container>
    )
}
