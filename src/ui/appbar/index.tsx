import React from 'react'
import styled from 'styled-components'
import { propsColor } from '../styles'
import { themeColor } from '../styles'

interface AppbarProps {
    className?: string,
    primary?: boolean
    children?: string | JSX.Element
    color?: any
    big?: boolean
    style?: any
    themeType?: string
}

const AppBarWrap = styled.div<AppbarProps>`
    color: ${props => props.theme.palatte.type === 'light' ? '#555' : '#fff'};
    /* background-color: ${props => propsColor(props)}; */
    background-color: ${props => {
        let color = props.color || { light: '#fff', dark: '#333'}
        return themeColor(props.theme, color)
    }};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    padding: 0 8px;
    height: 64px;
`

const TitleWrap = styled.div`
    font-size: 24px;
    /* color: #fff; */
    padding: 0 8px;
`

function Title(props: any) {
    const { children } = props
    return <TitleWrap>{children}</TitleWrap>
}

export function AppBar(props: AppbarProps) {
    const { className, children, style } = props
    return <AppBarWrap className={className} {...props} style={style}>{children}</AppBarWrap>
}

AppBar.Title = Title