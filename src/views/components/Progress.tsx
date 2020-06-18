import React from 'react'
import { Progress } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function ProgressDemo() {
    return (
        <div>
            <Progress value={40} />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="进度条">
            <H1>Progress 进度条</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Skeleton } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <ProgressDemo />
            </Demo>
        </ComponentPage>
    )
}
