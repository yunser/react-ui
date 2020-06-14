import React, { useState, useEffect, ReactNode } from 'react'

// import { Button } from 'tiny-ui'
// import 'tiny-ui/dist/styles/index.css'
// import { Button } from "sancho";
// import { Button } from 'insites-ui'
// import { ThemeProvider } from "styled-components";
// import { GlobalStyle, defaultTheme } from "make-my-ui2";
// import { Button } from 'cp-design'
// import classNames from 'classnames'
import { Link, Button, AppBar, ToolBar, Checkbox, List, Divider,
    Icon, Table, Drawer, IconButton, SubHeader, Fab, Empty, Toast, Dialog, Menu, Switch } from '../ui'
import { SimplePage } from '../components'
import { Text } from '../ui/config-provider'

import styled, {} from 'styled-components'

// import styles from './Home.module.scss'

// import { Apps } from './apps'

import { $t } from '../locale'
import { useStore } from '../store'

import { Example as HooksExample } from '../hooks/Example'
import { Toasts } from '../ui/toast'

// console.log('Tabs', Tabs)

const Title = styled.h1`
  font-size: 14px;
//   text-align: center;
  color: #000;
`;




const BoxWrap = styled.div`
    position: relative;
    border: 1px solid #999;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
`
const Demo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    background: #f00;
    margin-bottom: 12px;
`




function Box(props: any) {
    const { children } = props
    return (
        <BoxWrap>
            {children}
            <Demo>demo</Demo>
        </BoxWrap>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

const PageFab = styled(Fab)`
    position: fixed;
    right: 24px;
    bottom: 24px;
`

const ThemeTest = styled.div`
    width: 100px;
    height: 100px;
    color: ${props => props.theme.palatte.type === 'light' ? '#000' : '#fff'};
    background: ${props => props.theme.palatte.type === 'light' ? '#fff' : '#000'};
    border: 1px solid #000;
`

function Dog() {
    const [ num, setNum ] = useStore(0, 'dog')
    console.log('Dog渲染')
    useEffect(() => {
        console.log('Dog初始化')
    }, [])
    return (
        <div>
            🐶{num}
            <Box>
                <button onClick={() => {
                    setNum(num + 1)
                }}>+</button>
            </Box>
        </div>
    )
}

function Counter() {
    const [ num, setNum ] = useStore(0, 'dog')
    console.log('Counter渲染')
    useEffect(() => {
        console.log('Counter初始化')
    }, [])
    return (
        <div>
            {num}
            <Box>
                <button onClick={() => {
                    setNum(num + 1)
                }}>+</button>
            </Box>
        </div>
    )
}

interface StyleDivProps {
    color: string
    children: ReactNode
}

// function StyleDivWrap() {

// }

const StyleDivWrap = styled.div`
    font-size: 24px;
    color: ${props => props.color === 'w' ? '#09c' : '#f90'};
`

function StyleDiv(props: StyleDivProps) {
    return <StyleDivWrap {...props}></StyleDivWrap>
}

// const StyleDiv = styled.div`
//     color: #f00;
// `

export default function Component(props: any) {

    // const {Provider, Consumer} = React.createContext({
    //     asd: 3
    // });

    console.log('组件渲染')

    const [ count, setCount ] = useStore(0, 'count')
    const [ color, setColor ] = useState('w')
    
    
    const [ dialogOpen, setDialogOpen ] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

    interface MenuItem {
        title: string,
        to: string
    }
    const menus: MenuItem[] = [
        {
            title: '首页',
            to: '/'
        },
        {
            title: 'Switch 开关',
            to: '/components/switch'
        },
    ]
    
    function SideMenuItem(item: MenuItem, index: number) {
        return (
            <div key={index}>
                <Link to={item.to}>{item.title}</Link>
            </div>
        )
    }
    const side = (
        <div>
            {menus.map(SideMenuItem)}
            {/* <Link to="/components/switch">Switch 开关</Link> */}
        </div>
    )

    return (
        <SimplePage title="组件+" action={
            <IconButton href="https://project.yunser.com/products/d0a7c630a55911eaa3824f27432dbf16" target="_blank">
                <Icon name="help" />
            </IconButton>
        } side={side}>
            <PageFab color="secondary">
                <Icon name="add" />
            </PageFab>
            {/* <GlobalStyle /> */}
            <Container>
                Switch
                <Box>
                    <Switch />
                </Box>

                Menu
                <Box>
                    <button onClick={(e: any) => { // TODO any
                        setAnchorEl(e.currentTarget)
                        // setDialogOpen(!dialogOpen)
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
                </Box>

                Dialog
                <Box>
                    <button onClick={() => {
                        setDialogOpen(!dialogOpen)
                    }}>显示 Dialog</button>
                    <Dialog open={dialogOpen} onClose={() => {
                        setDialogOpen(false)
                    }}>
                        <Dialog.Title>这是标题</Dialog.Title>
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
                </Box>

                Toast
                <Box>
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
                    {/* <Toasts>
                    </Toasts> */}
                </Box>


                Hooks
                <Box>
                    <HooksExample />
                </Box>

                Style
                <Box>
                    <div style={{
                        color: '#f00',
                        fontSize: 24
                    }}>测试样式</div>
                    ---***
                    <StyleDiv color={color}>哈哈哈</StyleDiv>
                    <StyleDiv color="b">呵呵呵</StyleDiv>
                    <button onClick={() => {
                        setColor(color === 'w' ? 'b' : 'w')
                    }}>点击变色</button>
                </Box>

                Dog
                <Box>
                    <Dog />
                </Box>

                state
                <Box>
                    <Counter />
                </Box>

                store
                <Box>
                    {count}
                    <button onClick={() => {
                        setCount(count + 1)
                    }}>+</button>
                </Box>

                国际化
                <Box>
                    {$t()}
                    <Text id="asd" />
                    {/* <Consumer>
                        {value => value}
                    </Consumer> */}
                    {/* <ThemeTest>测试</ThemeTest> */}
                </Box>

                主题测试
                <Box>
                    <ThemeTest>测试</ThemeTest>
                </Box>

                自定义样式
                <Box>
                    <ThemeTest>测试</ThemeTest>
                </Box>
                

                Empty
                <Box>
                    <Fab>
                        <Empty />
                        {/* <Icon name="add" /> */}
                    </Fab>
                </Box>

                icon
                <Box>
                    <Fab>
                        <Icon name="add" />
                    </Fab>
                </Box>

                subheader
                <Box>
                    <SubHeader>标题1</SubHeader>
                    <SubHeader>标题2</SubHeader>
                </Box>

                checkBox
                <Box>
                    <Checkbox></Checkbox>
                </Box>
                Icon
                <Box>
                    <Icon name="menu" />
                </Box>


                Devider
                <Box>
                    1
                    <Divider />
                    2
                </Box>
                Table
                <Box>
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
                        1212
                    </Table>
                </Box>
                <Box>
                    <Link href="https://www.baidu.com/" target="_blank">百度一下</Link>
                    /
                    <Link to="/about">关于</Link>
                    /
                    <Link to="/login">登录</Link>
                    /
                    <Link to="/editor">编辑器</Link>
                </Box>
                按钮
                <Box>
                    <Button>普通按钮</Button>
                    2
                    <Button color="primary">主要按钮</Button>
                    2
                    <Button color="secondary">次要按钮</Button>
                </Box>
                Icon Button
                <Box>
                    <IconButton>
                        <Icon name="menu" />
                    </IconButton>
                </Box>
                appbar
                <Box>
                    <AppBar>普通按钮</AppBar>
                </Box>
                List
                <Box>
                    <List>
                        <List.Item>1</List.Item>
                        <List.Item>
                            2
                        </List.Item>
                        <List.Item>
                            3
                        </List.Item>
                    </List>
                </Box>
            </Container>

            {/* <Drawer>
                123
            </Drawer> */}
            <Fab>122</Fab>
        </SimplePage>
    )
}
