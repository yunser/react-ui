import React, { useState } from 'react'
import { ColorPicker } from '../../ui/color'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'

function ColorDemo() {

    const [ color, setColor ] = useState({
        hex: '#4092DB',
        opacity: 40
    })

    return (
        <div>
            <ColorPicker value={color} onChange={ value => setColor(value) } />
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
