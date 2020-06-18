import React, { useState } from 'react'
import { Dialog, Button } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function DialogDemo() {
    const [ dialogOpen, setDialogOpen ] = useState(false)

    return (
        <div>
            <button onClick={() => {
                setDialogOpen(!dialogOpen)
            }}>显示 Dialog</button>
            <Dialog visible={dialogOpen} onClose={() => {
                setDialogOpen(false)
            }}>
                <Dialog.Title>这是标题2</Dialog.Title>
                <Dialog.Content>
                    我们测试一下，我们测试一下，我们测试一下，我们测试一下，我们测试一下，我们测试一下，
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onClick={() => {
                        setDialogOpen(false)
                    }} color="primary">
                        取消
                    </Button>
                    <Button color="primary" onClick={() => {
                        setDialogOpen(false)
                    }}>
                        确定
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="对话框">
            <H1>Dialog 对话框</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Dialog } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <DialogDemo />
            </Demo>
        </ComponentPage>
    )
}
