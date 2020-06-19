import React from 'react'
import { Switch } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function SwitchDemo() {
    return (
        <div>
            <Switch />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="开关">
            <H1>Switch 开关</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Switch } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <SwitchDemo />
            </Demo>
        </ComponentPage>
    )
}
