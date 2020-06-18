import React from 'react'
import { Avatar } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function AvatarDemo() {
    return (
        <div>
            <Avatar src="https://icons.yunser.com/icons/yunser_icon.svg" />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="头像">
            <H1>Avatar 头像</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Avatar } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <AvatarDemo />
            </Demo>
        </ComponentPage>
    )
}
