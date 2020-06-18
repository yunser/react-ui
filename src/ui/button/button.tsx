import React from 'react'
import styled from 'styled-components'
import { propsColor, propsZIndexByKey, propsShadowByKey } from '../styles'

interface ButtonProps {
    primary?: boolean
    children?: string | JSX.Element | JSX.Element[]
    color?: string
    big?: boolean
    href?: string
    target?: string
    onClick?: any // TODO ?无法编译
    style?: any // TODO
    ref?: any // TOOD
    forwardRef?: any
    disabled?: boolean
}

const ButtonWrap = styled.div<ButtonProps>`
    display: inline-block;
    /* border: 1px solid #000; */
    color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.26)' : '#fff'};
    background-color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.12)' : propsColor(props)};
    box-shadow: ${props => props.disabled ? 'none' : propsShadowByKey(props, 'button')};
    /* padding: 10px; */
    padding: 6px 16px;
    min-width: 64px;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    /* font-size: 16px; */
    font-size: 14px;
    line-height: 24px;
    border-radius: 2px;
    &:hover {
        /* color: #31c27c; */
        /* background-color: # */
        opacity: ${props => props.disabled ? 1 : 0.8};
    }
    user-select: none;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    min-height: 36px;
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

// export function Button(props: ButtonProps) {
//     const { children, ref, forwardRef, ...restProps } = props
//     return <ButtonWrap ref={forwardRef} {...restProps}>{children}</ButtonWrap>
// }


export const Button = React.forwardRef((props: ButtonProps, ref: any) => { // TODO any
    const { children, ...restProps } = props
    return <ButtonWrap ref={ref} {...restProps}>{children}</ButtonWrap>
    // return (
    //   <button ref={ref}>
    //     {props.children}
    //   </button>
    // )
})
  
// combineRef

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
    /* z-index: 1000000; */
    border-radius: 50%;
    z-index: ${props => propsZIndexByKey(props, 'fab')};
    box-shadow: ${props => propsShadowByKey(props, 'fab')};
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

