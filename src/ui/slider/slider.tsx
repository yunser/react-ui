import React from 'react'
import styled from 'styled-components'

interface SliderProps {
    value: number
}

const Root = styled.div`
    height: 28px;
    border: 1px solid #000;
`

const Bg = styled.div`
    height: 2px;
    background: #eee;
    /* width: 300px; */
`

const Line = styled.div`
    height: 2px;
    background: #651fff;
    /* width: 300px; */
`

const Dot = styled.div`
    position: absolute;
    left: 20px;
    top: 10px;
    width: 12px;
    height: 12px;
    background: #651fff;
    border-radius: 50%;
`

export function Slider(props: SliderProps) {
    const { value } = props
    return (
        <Root>
            <Bg>
                <Line style={{ width: 30 }} />
                <Dot />
                {value}
            </Bg>
        </Root>
    )
}
