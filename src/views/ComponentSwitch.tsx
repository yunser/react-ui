import React from 'react'

import { Switch } from '../ui'
import { ComponentPage } from '../components'

import styled, {} from 'styled-components'



const BoxWrap = styled.div`
    position: relative;
    border: 1px solid #999;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
`
const Demo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    background: #f00;
    margin-bottom: 12px;
`

function Box(props: any) {
    const { children } = props
    return (
        <BoxWrap>
            {children}
            <Demo>demo</Demo>
        </BoxWrap>
    )
}

const H1 = styled.div`
    font-size: 40px;
    font-weight: 400;
    line-height: 1.167;
    margin: 16px 0;
`

const H2 = styled.div`
    margin: 40px 0 16px;
    font-size: 30px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.235;
    letter-spacing: 0.00735em;
`

const P = styled.div`
    margin-top: 0;
    margin-bottom: 16px;
`


export default function View(props: any) {

    return (
        <ComponentPage title="开关 Switch">
            <H1>Switch 开关</H1>
            <H2>基本</H2>
            <P>基本的组件。</P>
            <Box>
                <Switch />
            </Box>
        </ComponentPage>
    )
}
