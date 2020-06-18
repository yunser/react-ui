import React from 'react'
import styled from 'styled-components'

interface RadioProps {
    value?: any
    checked?: boolean
    onChange?: (checked: boolean) => void
}

const Root = styled.div`
    width: 42px;
    height: 42px;
    /* border: 1px solid #000; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
`

const Out = styled.div`
    width: 24px;
    height: 24px;
    border: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`

const In = styled.div`
    width: 10px;
    height: 10px;
    background: #000;
    /* border: 2px solid #000; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`

export function Radio(props: RadioProps) {
    const { value, checked = false, onChange } = props
    console.log('value', value)
    return (
        <Root onClick={() => {
            onChange && onChange(!checked)
        }}>
            <Out>
                {checked &&
                    <In />
                }
            </Out>
        </Root>
    )
}
