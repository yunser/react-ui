import React from 'react'
import { Select } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function SelectDemo() {
    return (
        <div>
            <Select>
                <Select.Item value="apple">苹果</Select.Item>
                <Select.Item value="banana">香蕉</Select.Item>
                <Select.Item value="pear">鸭梨</Select.Item>

            </Select>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="选择器">
            <H1>Select 选择器</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Select } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <SelectDemo />
            </Demo>
        </ComponentPage>
    )
}
