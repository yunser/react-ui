import React, { ReactNode } from 'react'
import styled from 'styled-components'

export interface SubHeaderProps {
    children?: ReactNode
}

const SubHeaderWrap = styled.div<SubHeaderProps>`
    color: rgba(0, 0, 0, .54);
    height: 48px;
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;
`

export function SubHeader(props: SubHeaderProps) {
    const { children } = props
    return <SubHeaderWrap {...props}>{children}</SubHeaderWrap>
}
