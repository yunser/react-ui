import React from 'react'
import { Button, IconButton, Icon } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code, Display } from '../../ui-doc'


function ButtonDemo() {
    return (
        <div>
            <Display>
                <Button>默认按钮</Button>
                <Button color="primary">主要按钮</Button>
                <Button color="secondary">次要按钮</Button>
                <Button color="secondary" disabled={true}>disabled</Button>
            </Display>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="按钮">
            <H1>Button 按钮</H1>

            <H2>Import</H2>

            <Code>{`Import { Button } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>
            <Text>基本的组件。</Text>

            <Demo>
                <ButtonDemo />
            </Demo>

            <H2>Icon Button</H2>
            <Demo>
                <IconButton>
                    <Icon name="menu" />
                </IconButton>
            </Demo>

        </ComponentPage>
    )
}
