import React, { useState } from 'react'
import { Pagination } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'

function PaginationDemo() {
    const [ page, setPage ] = useState(3)
    return (
        <div>
            <Pagination page={page} totalPage={10} onChange={page => setPage(page)} />
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="分页器">
            <H1>Pagination 分页器</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Pagination } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <PaginationDemo />
            </Demo>
        </ComponentPage>
    )
}
