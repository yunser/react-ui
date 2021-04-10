import React, { useState } from 'react'
import { Drawer, Button } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'

function DrawerDemo() {

    const [ drawerVisible, seetDrawerVisible ] = useState(false)

    return (
        <div>
            <Button onClick={() => {
                seetDrawerVisible(true)
            }}>显示</Button>

            <Drawer visible={drawerVisible} onClose={() => {
                seetDrawerVisible(false)
            }}>
                123
            </Drawer>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="抽屉菜单">
            <H1>Drawer 抽屉菜单</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Drawer } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <DrawerDemo />
            </Demo>
        </ComponentPage>
    )
}
