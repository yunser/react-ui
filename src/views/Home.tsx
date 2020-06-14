import React from 'react'

import { Icon, IconButton } from '../ui'
import styled, {} from 'styled-components'
import { Apps } from './apps'
import { SimplePage } from '../components'

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

export default function Home() {
    console.log('首页渲染')
    return (
        <SimplePage title="首页" action={
            <React.Fragment>
                <IconButton href="https://project.yunser.com/products/d0a7c630a55911eaa3824f27432dbf16" target="_blank">
                    <Icon name="help" />
                </IconButton>
                <IconButton href="https://project.yunser.com/products/d0a7c630a55911eaa3824f27432dbf16" target="_blank">
                    <Icon name="help" />
                </IconButton>
            </React.Fragment>
        }>
            {/* <GlobalStyle /> */}
            <Container>
                <Apps groups={[
                    {
                        name: '基本',
                        apps: [
                            {
                                icon: 'https://edu.yunser.com/static/img/math.svg',
                                name: '数学',
                                href: 'https://math.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '语文',
                            },
                            {
                                name: '英语',
                            },
                            {
                                name: '物理',
                            },
                            {
                                name: '化学',
                            },
                        ]
                    },
                    {
                        name: '其他',
                        apps: [
                            {
                                name: '数学',
                            },
                            {
                                name: '语文',
                            },
                        ]
                    },
                ]} />
            </Container>
            
        </SimplePage>
    )
}
