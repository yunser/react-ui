import React from 'react'
import styled from 'styled-components'

const Panel = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    background: #4092DB;
    border: 1px solid #000;
`

const Box1 = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
`

const Box2 = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
`

export function ColorPicker() {
    return (
        <div>
            64\146\219
            --
            HSV
            208、86、24
            <Panel>
                <Box1 />
                <Box2 />
            </Panel>
        </div>
    )
}
