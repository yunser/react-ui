import React, { ReactNode } from 'react'
import styled from 'styled-components'
// import { Theme, defaultTheme } from '../styles'

interface Column {
    title: string,
    dataKey: string
    key?: string,
    render?: (value: any, item: any, index: number) => ReactNode,
}

export interface TableProps {
    children?: ReactNode
    columns?: Column[],
    data?: any[]
}

const TableWrap = styled.table<TableProps>`
    border-collapse: collapse;
    th {
        padding: 8px 16px;
        border: 1px solid #ddd;
    }
    td {
        padding: 8px 16px;
        border: 1px solid #ddd;
    }
`

const Th = styled.th`
    border: 1px solid #ddd;
`

const Tr = styled.tr`
    /* border: 1px solid #000; */
`

const Td = styled.td`
    border: 1px solid #ddd;
`

export function Table(props: TableProps) {
    const { children, columns, data = [] } = props
    return (
        <TableWrap {...props}>
            {children}
            {!!columns &&
                <thead>
                    <tr>
                        {columns.map((item, index) => {
                            return (
                                <Th key={index}>{item.title}</Th>
                            )
                        })}
                    </tr>
                </thead>
            }
            <tbody>
                {!!columns && data.map((dataItem, idx) => {
                    return (
                        <Tr key={idx}>
                            {columns.map((column: Column, index) => {
                                return (
                                    <Td key={index}>
                                        {column.render ? column.render(dataItem[column.dataKey], dataItem, idx) : dataItem[column.dataKey]}
                                    </Td>
                                )
                            })}
                        </Tr>
                    )
                })}
            </tbody>
        </TableWrap>
    )
}

