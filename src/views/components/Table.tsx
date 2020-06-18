import React from 'react'
import { Table } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'


function TableDemo() {
    return (
        <div>
            <Table columns={[
                {
                    title: '姓名',
                    dataKey: 'name',
                },
                {
                    title: '年龄',
                    dataKey: 'age',
                },
            ]} data={[
                {
                    name: '张三',
                    age: 18,
                },
                {
                    name: '李四',
                    age: 20,
                }
            ]}>
            </Table>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="表格">
            <H1>Table 表格</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Table } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <TableDemo />
            </Demo>
        </ComponentPage>
    )
}
