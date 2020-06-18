import React from 'react'
import styled, {} from 'styled-components'

export const H1 = styled.div`
    font-size: 40px;
    font-weight: 400;
    line-height: 1.167;
    margin: 16px 0;
`

export const H2 = styled.div`
    margin: 40px 0 16px;
    font-size: 30px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.235;
    letter-spacing: 0.00735em;
`

export const Text = styled.div`
    margin-top: 0;
    margin-bottom: 16px;
`

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
