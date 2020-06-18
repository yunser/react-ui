import React from 'react'
import { Progress, Card } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function CardDemo() {
    return (
        <div>
            <Card>
                <Card.Content>
                    12
                </Card.Content>
            </Card>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="卡片">
            <H1>Card 卡片</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Card } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <CardDemo />
            </Demo>
        </ComponentPage>
    )
}
