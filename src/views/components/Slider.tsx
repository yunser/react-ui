import React from 'react'
import { Slider } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'

function SliderDemo() {
    return (
        <div>
            <Slider value={24} />
            {/* <Skeleton width={160} height={80} />
            <Skeleton shape="circle" width={40} height={40} /> */}
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="Slider">
            <H1>Slider 滑块</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Slider } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <SliderDemo />
            </Demo>
        </ComponentPage>
    )
}
