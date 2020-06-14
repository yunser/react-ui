import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ToolBarProps {
    className?: string,
    primary?: boolean
    children?: ReactNode
    color?: string
    big?: boolean
}

const ToolBarWrap = styled.div<ToolBarProps>`
    height: 64px;
    display: flex;
    align-items: center;
    /* color: #fff; */
    /* background-color: ${props => props.theme.palatte.primary.light};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    padding: 6px 16px;
    cursor: pointer;
    font-size: 16px; */
`

export function ToolBar(props: ToolBarProps) {
    const { className, children } = props
    return <ToolBarWrap className={className} {...props}>{children}</ToolBarWrap>
}
