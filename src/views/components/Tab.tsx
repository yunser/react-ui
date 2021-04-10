import React, { useState, lazy, Component, Suspense } from 'react'
import { Tab, Table } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code, PropTable } from '../../ui-doc'
import {importMDX} from 'mdx.macro'

const Content = lazy(() => importMDX('./Tab.mdx'))

function TabDemo() {
    const [ value, setValue ] = useState('1')

    return (
        <div>
            <Tab value={value} onChange={v => setValue(v)}>
                <Tab.Item value="1">第一</Tab.Item>
                <Tab.Item value="2">第二</Tab.Item>
                <Tab.Item value="3">第三3</Tab.Item>
            </Tab>
            {value === '1' &&
                <div>111</div>
            }
            {value === '2' &&
                <div>222</div>
            }
            {value === '3' &&
                <div>333</div>
            }
        </div>
    )
}

const apiProps = [
    {
        name: 'value',
        description: '当前选中项',
        required: false,
        type: 'string',
    },
    {
        name: 'onChange',
        description: '选中项变化回调',
        required: false,
        type: '(value: string) => void',
    },
    {
        name: 'children',
        required: true,
        type: 'ReactNode',
    },
]

const itemApiProps = [
    {
        name: 'value',
        description: '值',
        required: true,
        type: 'string',
    },
]

export default () => {

    return (
        <ComponentPage title="Tab">
            <H1>Tab</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Tab } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <TabDemo />
            </Demo>

            {/* <Suspense fallback={<div>Loading...</div>}>
                <Content />
            </Suspense> */}

            <H2>属性</H2>
            <PropTable
                data={apiProps}>
            </PropTable>

            <H2>Item 属性</H2>
            <PropTable
                data={itemApiProps}>
            </PropTable>
        </ComponentPage>
    )
}
