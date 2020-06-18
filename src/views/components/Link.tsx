import React from 'react'
import { Link } from '../../ui'
import { Link as RouterLink } from '../../ui/router-link'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function LinkDemo() {
    return (
        <div>
            <Link href="https://www.baidu.com/">百度一下</Link>
        </div>
    )
}

function RouterLinkDemo() {
    return (
        <div>
            <RouterLink to="/">回到首页</RouterLink>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="链接">
            <H1>Link 链接</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Link } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <LinkDemo />
            </Demo>

            <H2>RouterLink</H2>

            <Demo>
                <RouterLinkDemo />
            </Demo>
        </ComponentPage>
    )
}
