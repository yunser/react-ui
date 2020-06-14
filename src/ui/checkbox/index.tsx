import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
    primary?: boolean
    children?: string | JSX.Element
    color?: string
    big?: boolean
    checked?: boolean
}

const CheckboxWrap = styled.div<ButtonProps>`
    display: inline-block;
    /* border: 1px solid #000; */
    color: #fff;
    background-color: ${props => props.color === 'primary' ? props.theme.primary : '#999'};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    padding: 10px;
    padding: 6px 16px;
    min-width: 64px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
    &:hover {
        /* color: #31c27c; */
        /* background-color: # */
        opacity: .8;
    }
`

const CheckIcon = styled.div`
`

export function Checkbox(props: ButtonProps) {
    const { children } = props
    return <CheckboxWrap {...props}>
        <CheckIcon>
            {children}
        </CheckIcon>
    </CheckboxWrap>
}

