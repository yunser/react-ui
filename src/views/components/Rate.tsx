import React, { useState } from 'react'
import { Rate } from '../../ui/rate'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function RateDemo() {

    const [ value, setValue ] = useState(3)

    return (
        <div>
            <Rate value={value} onChange={val => setValue(val)} />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="评分">
            <H1>Rate 评分</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Rate } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <RateDemo />
            </Demo>
        </ComponentPage>
    )
}
