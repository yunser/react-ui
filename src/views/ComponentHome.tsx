import React from 'react'
import { ComponentPage } from '../components'
import { H1, H2, Text } from '../ui-doc'

export default function View(props: any) {

    return (
        <ComponentPage title="首页">
            <H1>简介</H1>
            <Text>123</Text>

            <H2>基本</H2>
            {/* <P>基本的组件。</P> */}
            {/* <Box>
                <Switch />
            </Box> */}
        </ComponentPage>
    )
}
