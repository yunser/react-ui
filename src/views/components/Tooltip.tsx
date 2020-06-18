import React from 'react'
import { Tooltip, Button } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function TooltipDemo() {
    return (
        <div>
            <Tooltip title="提示文字啦啦">
                <Button>这是按钮</Button>
            </Tooltip>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="工具提示">
            <H1>Tooltip 工具提示</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Tooltip } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <TooltipDemo />
            </Demo>
        </ComponentPage>
    )
}
