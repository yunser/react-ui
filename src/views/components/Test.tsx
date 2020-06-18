import React from 'react'
import { Progress } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function TestDemo() {
    return (
        <div>
            <Progress value={40} />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="测试">
            <H1>测试</H1>
            123

            <Demo>
                <TestDemo />
            </Demo>
        </ComponentPage>
    )
}
