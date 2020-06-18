import React from 'react'
import { Menu } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'

function MenuDemo() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    return (
        <div>
            <button onClick={(e: any) => { // TODO any
                setAnchorEl(e.currentTarget)
            }}>显示菜单</button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => {
                    setAnchorEl(null)
                }}
                >
                <Menu.Item>菜单项1</Menu.Item>
                <Menu.Item>菜单项2</Menu.Item>
                <Menu.Item>菜单项3</Menu.Item>
            </Menu>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="菜单">
            <H1>Menu 菜单</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Menu } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <MenuDemo />
            </Demo>
        </ComponentPage>
    )
}
