import React from "react";

interface ICol {
    id: number
    name: string
    title: string
}

interface ITableProps {
    cols: ICol[]
    rows: React.ReactNode
}

export default function Table({cols, rows}: ITableProps) {
    return (
        <table>
            <thead>
                <tr>
                    {cols.map(item => {
                        return (
                            <td key={item.id}>
                                {item.title}
                            </td>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}