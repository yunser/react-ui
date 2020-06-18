import React from 'react'
import { List } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function ListsDemo() {
    return (
        <div>
            <List>
                <List.Item>1</List.Item>
                <List.Item>
                    2
                </List.Item>
                <List.Item>
                    3
                </List.Item>
            </List>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="列表">
            <H1>List 列表</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { List } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <ListsDemo />
            </Demo>
        </ComponentPage>
    )
}
