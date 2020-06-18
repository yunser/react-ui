import React from 'react'
import { Toast } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function ToastDemo() {
    return (
        <div>
            <button onClick={() => {
                Toast.info('info' + new Date().getTime())
            }}>info</button>
            <button onClick={() => {
                Toast.success('success' + new Date().getTime())
            }}>success</button>
            <Toast>测试数据</Toast>
            <Toast type="info">info</Toast>
            <Toast type="success">success</Toast>
            <Toast type="error">error</Toast>
            <Toast type="warning">warning</Toast>
            <Toast>这是一条很长很长的提示文字</Toast>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="Toast">
            <H1>Toast</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Toast } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <ToastDemo />
            </Demo>
        </ComponentPage>
    )
}
