import React from 'react'
import { Paper } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function PaperDemo() {
    return (
        <div>
            <Paper level={1}>
                1
            </Paper>
            <Paper level={20}>
                2
            </Paper>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="Paper">
            <H1>Paper 纸张</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Paper } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <PaperDemo />
            </Demo>
        </ComponentPage>
    )
}
