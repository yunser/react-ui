import React from 'react'
import styled from 'styled-components'
import { propsColor } from '../styles'

interface ButtonProps {
    primary?: boolean
    children?: string | JSX.Element | JSX.Element[]
    color?: string
    big?: boolean
    href?: string
    target?: string
    onClick?: any // TODO ?无法编译
}

const ButtonWrap = styled.div<ButtonProps>`
    display: inline-block;
    /* border: 1px solid #000; */
    color: #fff;
    background-color: ${props => propsColor(props)};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    padding: 10px;
    padding: 6px 16px;
    min-width: 64px;
    cursor: pointer;
    /* font-size: 16px; */
    font-size: 14px;
    border-radius: 2px;
    &:hover {
        /* color: #31c27c; */
        /* background-color: # */
        opacity: .8;
    }
    user-select: none;
`

// const IconButtonWrap = styled(Button)`
//     width: 48px;
//     height: 48px;
// `
const IconButtonWrap = styled.div<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    /* border: 1px solid #000; */
    /* color: #fff; */
    /* padding: 10px; */
    /* padding: 6px 16px; */
    /* min-width: 64px; */
    cursor: pointer;
    /* font-size: 16px; */
    /* font-size: ${props => {
        return 20
    }}px; */
    border-radius: 50%;
    &:hover {
        background: ${props => props.theme.type === 'light' ? 'rgba(0, 0, 0, .12)' : 'rgba(255, 255, 255, .12)' };
    }

`

export function Button(props: ButtonProps) {
    const { children } = props
    return <ButtonWrap {...props}>{children}</ButtonWrap>
}

export function IconButton(props: ButtonProps) {
    const { children, href, target, onClick } = props
    return <IconButtonWrap {...props} onClick={() => {
        // alert('click')
        if (href) {
            window.open(href, target)
            // if (target) {
            // } else {
            //     window.open(href) // TODO ?无法编译
            // }
        }
        onClick && onClick()
    }}>{children}</IconButtonWrap>
}

const FabWrap = styled.div<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    /* border: 1px solid #000; */
    /* color: #fff; */
    /* padding: 10px; */
    /* padding: 6px 16px; */
    /* min-width: 64px; */
    cursor: pointer;
    color: #fff;
    background-color: ${props => propsColor(props)};
    /* font-size: 16px; */
    /* font-size: ${props => {
        return 20
    }}px; */
    border-radius: 50%;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
    &:hover {
        background: rgba(255, 255, 255, .12);
    }

`

export function Fab(props: ButtonProps) {
    const { children, href, target } = props
    return (
        <FabWrap {...props} onClick={() => {
            // alert('click')
            if (href) {
                window.open(href, target)
                // if (target) {
                // } else {
                //     window.open(href) // TODO ?无法编译
                // }
            }
        }}>
            {children}
        </FabWrap>
    )
}

