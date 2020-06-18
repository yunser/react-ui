import React from 'react'
import { Empty } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function EmptyDemo() {
    return (
        <div>
            <Empty />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="Empty">
            <H1>Empty 空状态</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Empty } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <EmptyDemo />
            </Demo>
        </ComponentPage>
    )
}
