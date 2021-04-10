import React from 'react'
import styled, {} from 'styled-components'
import { Switch } from '../ui'
import { ComponentPage } from '../components'
import { H1, H2, Text, Code } from '../ui-doc'



const BoxWrap = styled.div`
    position: relative;
    border: 1px solid #999;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
`
const Demo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    background: #f00;
    margin-bottom: 12px;
    border-radius: 4px;
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

export default function Start() {
    return (
        <ComponentPage title="开始使用">
            <H2>安装</H2>
            
            <Text>支持使用 npm 安装。</Text>
            <Code>npm i @yunser/react-ui --save</Code>

            <Text>使用 yarn 安装：</Text>
            <Code>yarn add @yunser/react-ui</Code>

            <H2>基本</H2>

            <Text>基本的组件。</Text>
            <Box>
                <Switch />
            </Box>
        </ComponentPage>
    )
}
