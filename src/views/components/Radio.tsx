import React, { useState } from 'react'
import { Radio } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'

function RadioDemo() {
    const [ checked, setChecked ] = useState(false)

    return (
        <div>
            <Radio
                checked={checked}
                onChange={(value) => {
                    setChecked(value)
                }}
             />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="Radio">
            <H1>Radio</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Radio } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <RadioDemo />
            </Demo>
        </ComponentPage>
    )
}
