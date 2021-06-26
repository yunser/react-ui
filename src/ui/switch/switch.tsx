import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
    height: 40px;
    // border: 1px solid #f00;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const Dot = styled.div`
    width: 20px;
    height: 20px;
    background-color: #651fff;
    border-radius: 50%;
`

const Bar = styled.div`
    /* color: #651fff; */
    position: relative;
    width: 36px;
    height: 12px;
    background-color: #f00;
    border-radius: 8px;
`

const DotBox = styled.div`
    position: absolute;
    left: 0;
    top: -14px;
    width: 40px;
    height: 40px;
    /* border: 1px solid #000; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s;
    &:hover {
        background-color: rgba(0, 0, 0, .1);
    }
`

interface SwitchProps {
    checked?: boolean
    onChange?: (checked: boolean) => void
}

export function Switch(props: SwitchProps) {
    const { checked = false, onChange } = props

    // const offset = 16

    return (
        <Root
            data-ui="switch.root"
            onClick={() => {
                onChange && onChange(!checked)
            }}
        >
            <Bar
                style={{
                    backgroundColor: checked ? 'rgba(66,133,244,.5)' : '#999',
                }}
            >
                <DotBox
                    data-ui="switch.dotBox"
                    style={{
                        left: checked ? 17 : -16,
                        // right: checked ? -offset : 'auto',
                    }}
                >
                    <Dot
                        style={{
                            backgroundColor: checked ? '#4285f4' : '#ccc',
                        }}
                    />
                </DotBox>
            </Bar>
        </Root>
    )
}
