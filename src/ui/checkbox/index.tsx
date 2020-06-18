import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
    primary?: boolean
    children?: string | JSX.Element
    color?: string
    big?: boolean
    checked?: boolean
    onChange?: (checked: boolean) => void
}

const CheckboxWrap = styled.div<ButtonProps>`
    display: inline-block;
    /* border: 1px solid #000; */
    color: #fff;
    /* background-color: ${props => props.color === 'primary' ? props.theme.primary : '#999'}; */
    /* box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); */
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
    width: 24px;
    height: 24px;
    border: 2px solid #000;
    border-radius: 2px;
`

export function Checkbox(props: ButtonProps) {
    const { checked = false, children, onChange } = props
    return (
        <CheckboxWrap
        //  {...props}
            // style
            onClick={() => {
                onChange && onChange(!checked)
            }}
        >
            <div>
                {checked &&
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#09c" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                    </svg>
                }
                {!checked &&
                    <CheckIcon>
                        {children}
                    </CheckIcon>
                }
            </div>
        </CheckboxWrap>
    )
}

