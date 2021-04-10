import React, { ReactNode } from 'react'
import styled, {} from 'styled-components'
import { Table } from '../ui'
import { TableProps } from '../ui/table'

export const H1 = styled.div`
    font-size: 40px;
    font-weight: bold;
    line-height: 1.167;
    margin: 20px 0 16px 0;
`

export const H2 = styled.div`
    margin: 36px 0 24px 0;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.235;
    letter-spacing: 0.00735em;
`

export const H3 = styled.div`
    margin: 24px 0 16px 0;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.235;
    letter-spacing: 0.00735em;
`

export const Text = styled.div`
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 16px;
`


interface PProps {
    children: ReactNode
}

export function Paragraph(props: PProps) {
    const { children } = props
    return (
        <p data-ui="p" style={{
            marginTop: 0,
            marginBottom: 16,
            fontSize: 16,
        }}>{children}</p>
    )
}

const BoxWrap = styled.div`
    position: relative;
    border: 1px solid #999;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
`
const Demo2 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    background: #f00;
    margin-bottom: 12px;
`

export function Demo(props: any) {
    const { children } = props
    return (
        <BoxWrap>
            {children}
            <Demo2>demo</Demo2>
        </BoxWrap>
    )
}

export * from './code'

interface ActionsProps {
    children: any[]
}

const ActionsWrap = styled.div`
    display: flex;
    /* padding: 16px; */
    /* justify-content: flex-end; */
`

const ActionItemWrap = styled.div`
    margin-right: 16px;
`

export const Ul = styled.ul`
    margin-bottom: 16px;
    padding-left: 16px;
    font-size: 16px;
`

export const Li = styled.li`
    margin-bottom: 8px;
    font-size: 16px;
`

export function Display(props: ActionsProps) {
    const { children = [] } = props

    function ActionItem(item: any, index: number) { // TODO any
        return (
            <ActionItemWrap key={index}>{item}</ActionItemWrap>
        )
    }

    return (
        <ActionsWrap>
            {!!children &&
                children.map(ActionItem)
            }
        </ActionsWrap>
    )
}


interface PropTableProps extends TableProps {

}

export function PropTable(props: PropTableProps) {
    return (
        <Table
            columns={[
                {
                    title: '名称',
                    dataKey: 'name',
                },
                {
                    title: '说明',
                    dataKey: 'description',
                },
                {
                    title: '必须',
                    dataKey: 'required',
                    render(value) {
                        return (
                            <div>{value ? '是' : '否'}</div>
                        )
                    }
                },
            ]}
            {...props}
        />
    )
}