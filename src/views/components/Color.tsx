import React from 'react'
import { ColorPicker } from '../../ui/color'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function ColorDemo() {
    return (
        <div>
            <ColorPicker />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="颜色">
            <H1>Color 颜色</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Skeleton } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <ColorDemo />
            </Demo>
        </ComponentPage>
    )
}
