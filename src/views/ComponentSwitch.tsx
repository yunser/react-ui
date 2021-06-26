import React, { useState } from 'react'

import { Switch } from '../ui'
import { ComponentPage } from '../components'

import { H1, H2, Paragraph, Demo, Code, Display } from '../ui-doc'

function SwitchDemo() {

    const [ checked1, setCheck1 ] = useState(false)
    const [ checked2, setCheck2 ] = useState(true)

    return (
        <Display>
            <Switch 
                checked={checked1}
                onChange={value => setCheck1(value)}
            />
            <Switch checked={checked2} />
        </Display>
    )
}

export default function View(props: any) {

    return (
        <ComponentPage title="开关 Switch">
            <H1>Switch 开关</H1>
            <H2>基本</H2>

            <Paragraph>基本的组件。</Paragraph>

            <Demo>
                <SwitchDemo />
            </Demo>
        </ComponentPage>
    )
}
