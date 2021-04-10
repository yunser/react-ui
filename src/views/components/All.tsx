import React from 'react'
import { Progress, Button, Radio, Checkbox, Paper, Divider } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function ProgressDemo() {
    return (
        <div>
            <Progress value={40} />
        </div>
    )
}

interface ComponentListProps {
    list: any[]
}

const ListWrap = styled.div`
    display: flex;
    margin-bottom: 24px;
`

const ItemWrap = styled.div`
    min-width: 100px;
    margin-bottom: 24px;
    border: 1px solid #000;
`

function ComponentList(props: ComponentListProps) {
    const { list } = props
    return (
        <ListWrap>
            {list.map((item, index) => {
                return (
                    <ItemWrap>
                        <Link to={item.url}>{item.title}</Link>
                    </ItemWrap>
                )
            })}
        </ListWrap>
    )
}

function UiKit() {
    return (
        <div>
            <Button color="primary">按钮</Button>
            <Radio />
            <Checkbox />
            <Divider />
            <div style={{
                width: 8,
                height: 8,
                background: '#f00',
            }}></div>
            <Paper level={1} style={{ width: 64, height: 64}}>
                123
            </Paper>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="预览">
            <UiKit />
            
            <H1>Progress 进度条</H1>

            <Link to="/components/tag">Tag</Link>
            <div></div>
            <Link to="/components/image">Image</Link>

            <Text>xxx</Text>

            <H2>输入</H2>
            <ComponentList list={[
                {
                    title: 'Input',
                    url: '/components/input',
                },
                {
                    title: 'Radio',
                    url: '/components/radio',
                },
                {
                    title: 'Checkbox',
                    url: '/components/checkbox',
                },
                {
                    title: 'Time',
                    url: '/components/time',
                },
                {
                    title: 'Color',
                    url: '/components/color',
                },
                {
                    title: 'Rate',
                    url: '/components/rate',
                },
                {
                    title: 'Uploader',
                    url: '/components/uploader',
                },

            ]} />

            <H2>用户反馈</H2>
            <ComponentList list={[
                {
                    title: '空状态',
                    url: '/components/empty',
                },
                {
                    title: '进度',
                    url: '/components/progress',
                },

            ]} />

            <H2>数据展示</H2>
            
            <ComponentList list={[
                {
                    title: 'Article',
                    url: '/components/article',
                },
                {
                    title: 'Avatar',
                    url: '/components/avatar',
                },
                {
                    title: 'Card',
                    url: '/components/card',
                },
                {
                    title: 'Table',
                    url: '/components/table',
                },
                {
                    title: 'ImagePreviewer',
                    url: '/components/imagePreviewer',
                },
            ]} />

            <H2>表单</H2>
            <ComponentList list={[
                {
                    title: 'Input',
                    url: '/components/input',
                },
                {
                    title: 'Radio',
                    url: '/components/radio',
                },
                {
                    title: 'Checkbox',
                    url: '/components/checkbox',
                },

            ]} />

            <H2>导航</H2>
            <ComponentList list={[
                {
                    title: 'Link',
                    url: '/components/link',
                },
                {
                    title: 'Tab',
                    url: '/components/tab',
                },
                {
                    title: 'Pagination',
                    url: '/components/pagination',
                },

            ]} />

            <Code>{`Import { Skeleton } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <ProgressDemo />
            </Demo>
        </ComponentPage>
    )
}
