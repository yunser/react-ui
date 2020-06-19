import React, { useState } from 'react'
import { TimePicker } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'

function DateDemo() {

    const [ time, setTime ] = useState(new Date('2020-06-16 00:00:00'))
    
    return (
        <div>
            <TimePicker
                format="YYYY-MM-DD HH:mm"
                value={time}
                onChange={value => {

                    console.log('好的', value)
                    setTime(value)
                }}
            />
            {/* <Progress value={40} /> */}
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="时间选择">
            <H1>Time 进度条</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Skeleton } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>
            <Demo>
                <DateDemo />
            </Demo>
        </ComponentPage>
    )
}
