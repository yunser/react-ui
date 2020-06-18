import React, { useState } from 'react'
import { Checkbox } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function CheckboxDemo() {
    const [ checked, setChecked ] = useState(false)
    return (
        <div>
            <Checkbox
                checked={checked}
                onChange={(value) => {
                    setChecked(value)
                }}
            ></Checkbox>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="Checkbox">
            <H1>Checkbox</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Checkbox } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <CheckboxDemo />
            </Demo>
        </ComponentPage>
    )
}
