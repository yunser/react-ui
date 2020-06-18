import React from 'react'
import { Icon } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function IconDemo() {
    return (
        <div>
            <Icon name="add" />
            <Icon name="menu" />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="Icon">
            <H1>Icon</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Icon } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <IconDemo />
            </Demo>
        </ComponentPage>
    )
}
