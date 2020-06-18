import React from 'react'
import { Tag } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function TagDemo() {
    return (
        <div>
            <Tag>这是标签</Tag>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="标签">
            <H1>Tag 标签</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { tag } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <TagDemo />
            </Demo>
        </ComponentPage>
    )
}
