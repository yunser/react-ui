import React from 'react'
import styled from 'styled-components'
// import styled from 'styled-components'
// import { Theme } from '../styles'

export interface LinkProps {
    className?: string
    href?: string
    target?: string
    children?: string | JSX.Element | JSX.Element[]
}

const AWrap = styled.a<LinkProps>`
    display: inline-block;
    color: #09c;
    cursor: pointer;
    /* font-size: 16px; */
    &:hover {
        /* color: #31c27c; */
        /* background-color: # */
        opacity: .8;
    }
`

export function Link(props: LinkProps) {
    const { href, target, children, className, ...restProps } = props
    return <AWrap className={className} href={href} target={target} {...restProps}>{children}</AWrap>
}
