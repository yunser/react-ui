import React from 'react'
import { Uploader } from '../../ui/uploader'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function ProgressDemo() {
    return (
        <div>
            <Uploader />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="上传">
            <H1>Uploader 上传</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Uploader } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <ProgressDemo />
            </Demo>
        </ComponentPage>
    )
}
