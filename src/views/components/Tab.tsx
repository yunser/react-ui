import React, { useState } from 'react'
import { Tab } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'

function TabDemo() {
    const [ value, setValue ] = useState('1')

    return (
        <div>
            <Tab value={value} onChange={v => setValue(v)}>
                <Tab.Item value="1">第一</Tab.Item>
                <Tab.Item value="2">第二</Tab.Item>
                <Tab.Item value="3">第三3</Tab.Item>
            </Tab>
            {value === '1' &&
                <div>111</div>
            }
            {value === '2' &&
                <div>222</div>
            }
            {value === '3' &&
                <div>333</div>
            }
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="Tab">
            <H1>Tab</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Tab } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <TabDemo />
            </Demo>
        </ComponentPage>
    )
}
