import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface CodeProps {
    children: ReactNode
}

const MyCode = styled.code`
    color: #fff;
    background: #272c34;
`

const MyPre = styled.pre`
    color: #fff;
    background: #272c34;
    border-radius: 4px;
    padding: 16px;
    font-size: 14px;
`

export function Code(props: CodeProps) {
    const { children } = props
    return (
        <MyCode><MyPre>{children}</MyPre></MyCode>
    )
}
