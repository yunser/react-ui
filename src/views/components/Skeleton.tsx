import React from 'react'
import { Skeleton } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'

function SkeletonDemo() {
    return (
        <div>
            <Skeleton width={160} height={80} />
            <Skeleton shape="circle" width={40} height={40} />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="骨架屏">
            <H1>Skeleton 骨架屏</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Skeleton } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <SkeletonDemo />
            </Demo>
        </ComponentPage>
    )
}
