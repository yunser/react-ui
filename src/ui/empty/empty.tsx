import React from 'react'
import styled from 'styled-components'

interface DividerProps {}

const EmptyWrap = styled.div<DividerProps>`
    /* color: #fff; */
    /* background-color: rgba(0, 0, 0, .12); */
`

const Text = styled.div`
    text-align: center;
    padding: 32px 0;
`

export function Empty() {
    // const { children, color } = props
    console.log('empty渲染')
    return (
        <EmptyWrap>
            <Text>内容为空</Text>
        </EmptyWrap>
    )
}

