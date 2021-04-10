import React from 'react'
import { ComponentPage } from '../components'
import { H2, Text, Ul, Li } from '../ui-doc'
import { Link } from '../ui'

export default function View(props: any) {

    return (
        <ComponentPage title="首页">
            <H2>简介</H2>
            <Text>Yunser UI 是一套基于 React 和 Material Design 的 UI 框架。</Text>

            <H2>特点</H2>
            <Ul>
                <Li>函数组件，容易开发维护。</Li>
                <Li>Typescript。</Li>
                <Li>20+ 组件。</Li>
            </Ul>

            <H2>链接</H2>
            <Ul>
                <Li>
                    <Link href="https://react-ui.yunser.com/" target="_blank">官网</Link>
                </Li>
            </Ul>
        </ComponentPage>
    )
}
