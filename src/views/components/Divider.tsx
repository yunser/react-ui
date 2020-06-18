import React from 'react'
import { Divider } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function DividerDemo() {
    return (
        <div>
            1
            <Divider />
            2
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="Divider">
            <H1>Divider</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Divider } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <DividerDemo />
            </Demo>
        </ComponentPage>
    )
}
