import React from 'react'
import styled from 'styled-components'

const Dot = styled.div`
    width: 20px;
    height: 20px;
    background-color: #651fff;
    border-radius: 50%;
`

const Bar = styled.div`
    /* color: #651fff; */
    width: 36px;
    height: 12px;
    background-color: #f00;
    border-radius: 8px;
`

const DotBox = styled.div`
    position: absolute;
    left: 0;
    top: 14px;
    width: 40px;
    height: 40px;
    /* border: 1px solid #000; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, .1);
    }
`

export function Switch() {
    return (
        <div>
            123
            <Bar>
                <DotBox>
                    <Dot />
                </DotBox>
            </Bar>
        </div>
    )
}
