import React, { ReactNode } from 'react'
import styled from 'styled-components'
// import { Theme, defaultTheme } from '../styles'
import { Icon } from '../icon'
import { Link } from '../router-link'
import { themeColor } from '../styles'

interface ListProps {
    children?: string | JSX.Element | JSX.Element[]
}

const ListWrap = styled.div<ListProps>`
    background: ${props => themeColor(props.theme, { light: '#fff', dark: '#424242'})};
    /* background-color: #fff; */
    padding: 8px 0;
`

interface ListItemProps {
    children?: ReactNode
    href?: string
    to?: string
    target?: string
}

const hoverColor = 'rgba(0, 0, 0, .1)'
const white = '#fff'
const ItemWrap = styled.div<ListItemProps>`
    display: flex;
    align-items: center;
    height: 48px;
    /* border: 1px solid #000; */
    color: ${props => themeColor(props.theme, { light: '#rgba(0,0,0,.87)', dark: '#rgba(255,255,255,.87)'})};
    &:hover {
        /* color: #31c27c; */
        background-color: ${props => (props.href || props.to) ? hoverColor : white};
        opacity: .8;
    }
`

export function Item(props: ListItemProps) {
    const { href, target, to, children } = props

    if (to || href) {
        return (
            <Link to={to} href={href} target={target}>
                <ItemWrap onClick={() => {
                }} {...props}>
                    {children}
                </ItemWrap>
            </Link>
        )
    }
    // if (href) {
    //     return (
    //         <Link to={to} href={href}>
    //             <ItemWrap onClick={() => {
    //             }} {...props}>
    //                 {children}
    //             </ItemWrap>
    //         </Link>
    //     )
    // }
    return (
        <ItemWrap onClick={() => {

        }} {...props}>
            {children}
        </ItemWrap>
    )
}

export function List(props: ListProps) {
    const { children } = props
    return <ListWrap {...props}>{children}</ListWrap>
}

const Title = styled.div`
    font-size: 16px;
    /* color: rgba(0,0,0,.87); */
`

const styledIcon = styled(Icon)`
    /* display: block; */
    width: 48px;
    height: 48px;
    /* border: 1px solid #000; */
    margin-right: 8px;
    color: #757575;
    display: flex !important;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`

List.Item = Item
List.Title = Title
List.Icon = styledIcon
