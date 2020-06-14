import React from 'react'
import styled from 'styled-components'

interface ProgressProps {
    value: number
}

const Root = styled.div`
`

const Bg = styled.div`
    width: 100%;
    height: 4px;
    background: #999;
`

const Bar = styled.div`
    height: 100%;
    background: #09c;
`

export function Progress(props: ProgressProps) {
    const { value = 0 } = props

    return (
        <Root>
            <Bg>
                <Bar style={{ width: value + '%' }} />
            </Bg>
        </Root>
    )
}
