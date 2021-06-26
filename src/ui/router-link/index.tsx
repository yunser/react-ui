import React from 'react'
// import styled from 'styled-components'
// import { Theme } from '../styles'

import { Link as ReactLink } from 'react-router-dom'

export interface LinkProps {
    className?: string
    to?: string
    href?: string
    target?: string
    children?: string | JSX.Element | JSX.Element[]
    style?: React.CSSProperties | undefined
}

// const AWrap = styled.a<LinkProps>`
//     display: inline-block;
//     color: ${props => {
//         const theme: Theme = props.theme
//         const defaultColor = '#f00'
//         const themeType = props.theme.type === 'light' ? 'light' : 'dark'
//         if (theme) {
//             return theme.palatte.secondary[themeType] || defaultColor
//         }
//         return defaultColor
//     }};
//     cursor: pointer;
//     /* font-size: 16px; */
//     font-size: ${props => {
//         return 20
//     }}px;
//     border-radius: 4px;
//     &:hover {
//         /* color: #31c27c; */
//         /* background-color: # */
//         opacity: .8;
//     }
// `

export function Link(props: LinkProps) {
    const { to, href, target, children, className, style, ...restProps } = props
    if (to) {
        return (
            <ReactLink
                className={className} to={to} target={target}
                style={style}
            >{children}</ReactLink>
        )
    }
    return <a className={className} href={href} target={target} {...restProps}>{children}</a>
}
