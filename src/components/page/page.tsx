import React, { ReactNode, useState } from "react"
import styled, {} from 'styled-components'
import { AppBar, ToolBar, Icon, IconButton, List, Drawer } from '../../ui'
import { Link } from '../../ui/router-link'
import { themeColor } from '../../ui/styles'
// import { useStore } from '../../store'
import { useDocSize } from '../../hooks'

const side_width = 256


const PageWrap = styled.div`
    padding-top: 64px;
    min-height: 100vh;
    color: ${props => themeColor(props.theme, { light: '#000', dark: '#fff'})};
    background: ${props => themeColor(props.theme, { light: '#fff', dark: '#000'})};
`

interface PageProps {
    children?: ReactNode
}

export function Page(props: PageProps) {
    const { children } = props

    return (
        <PageWrap>
            {children}
        </PageWrap>
    )
}


interface SimplePageProps {
    title: string
    children?: ReactNode
    action?: ReactNode
    side?: ReactNode
}

const PageHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #f00;
    z-index: 100000;
    color: #fff;
`

const Side = styled.div`
    position: fixed;
    top: 64px;
    left: 0;
    bottom: 0;
    width: ${side_width}px;
    /* right: 0; */
    background: ${props => themeColor(props.theme, { light: '#fff', dark: '#424242'})};
    z-index: 100;
    bottom: 0;
    border-right: 1px solid rgba(0, 0, 0, .12);
    transition: all .2s;
`

const Content = styled.div`
    padding-left: 256px;
    transition: all .2s;
`

const ToolBarRight = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`

const SideHeader = styled.div`
    padding: 40px 0;
    border-bottom: 1px solid rgba(0,0,0,.12);
`

const HeaderImage = styled.img`
    display: block;
    width: 80px;
    margin: 0 auto;
`
interface IMenuItem {
    title: string,
    url: string
}

const menus: IMenuItem[] = [
    {
        title: '首页',
        url: '/'
    },
    {
        title: '开始使用',
        url: '/start'
    },
    {
        title: '组件',
        url: '/components'
    },
    {
        title: '概览',
        url: '/components/all'
    },
    {
        title: 'Layout 布局',
        url: '/components/layout'
    },
    {
        title: 'Switch 开关',
        url: '/components/switch'
    },
    {
        title: 'Button 按钮',
        url: '/components/button'
    },
    {
        title: 'Pagination 分页器',
        url: '/components/pagination'
    },
    {
        title: 'skeleton',
        url: '/components/skeleton'
    },
    {
        title: 'Progress',
        url: '/components/progress'
    },
    {
        title: 'Radio',
        url: '/components/radio'
    },
    {
        title: 'Tab',
        url: '/components/tab'
    },
    {
        title: 'Slider',
        url: '/components/slider'
    },
    {
        title: 'Empty',
        url: '/components/empty'
    },
    {
        title: 'Divider',
        url: '/components/divider'
    },
    {
        title: 'Icon',
        url: '/components/icon'
    },
    {
        title: 'Table',
        url: '/components/table'
    },
    {
        title: 'Dialog',
        url: '/components/dialog'
    },
    {
        title: 'Menu',
        url: '/components/menu'
    },
    {
        title: 'Drawer',
        url: '/components/drawer'
    },
    {
        title: 'Paper',
        url: '/components/paper'
    },
    {
        title: 'Switch',
        url: '/components/switch'
    },
    {
        title: 'Tooltip',
        url: '/components/tooltip'
    },
    {
        title: 'List',
        url: '/components/list'
    },
    {
        title: 'Toast',
        url: '/components/toast'
    },
    {
        title: 'Checkbox',
        url: '/components/checkbox'
    },
    {
        title: 'Select',
        url: '/components/select'
    },
    {
        title: '测试',
        url: '/components/test'
    },
    {
        title: '404',
        url: '/components/error404'
    },
]


export function SimplePage(props: SimplePageProps) {
    const { title, children, action, side } = props

    const pointPx = 1000
    
    const docSize = useDocSize(() => {
        setSideVisible(docSize.width >= pointPx)
    })

    const [ sideVisible, setSideVisible ] = useState(docSize.width >= pointPx)
    const sideType = docSize.width >= pointPx ? 'fixedSide' : 'drawer'
    // const [ count, setCount ] = useStore(0, 'count')

    const SideContent = side || (
        <div>
            <SideHeader>
                <HeaderImage src="https://icons.yunser.com/icons/app.svg" />
            </SideHeader>
            <List>
                <List.Item to="/">
                    <List.Icon name="home" />
                    <List.Title>首页</List.Title>
                </List.Item>
                <List.Item to="/components">
                    <List.Icon name="info" />
                    <List.Title>组件</List.Title>
                </List.Item>
                {/* <List.Item to="/about">
                    <List.Icon name="info" />
                    <List.Title>关于</List.Title>
                </List.Item> */}
                <List.Item href="https://project.yunser.com/products/3a3bcc40ad3911eabf7b417cd2376690" target="_blank">
                    <List.Icon name="help" />
                    <List.Title>帮助</List.Title>
                </List.Item>
            </List>
            {/* {count}
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button> */}
        </div>
    )
    
    return (
        <PageWrap>
            <PageHeader>
                <AppBar color={{ light: '#fff', dark: '#333' }} themeType="light">
                    <ToolBar>
                        <IconButton onClick={() => {
                            console.log('click')
                            setSideVisible(!sideVisible)
                        }}>
                            <Icon name="menu" />
                        </IconButton>
                        <AppBar.Title>{title}</AppBar.Title>
                        <ToolBarRight>
                            {action}
                        </ToolBarRight>
                    </ToolBar>
                </AppBar>
            </PageHeader>
            <Side style={{ left: (sideVisible && sideType === 'fixedSide') ? 0 : (- side_width)}}>
                {SideContent}
            </Side>
            <Content style={{ paddingLeft: (sideVisible && sideType === 'fixedSide') ? side_width : 0}}>
                {children}
            </Content>
            <Drawer visible={sideVisible && sideType === 'drawer'} onClose={() => { setSideVisible(false) }}>
                {SideContent}
            </Drawer>
        </PageWrap>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

const MenuList = styled.div`
    padding: 8px 0;
`

const MenuItem = styled.div`
    &:hover {
        background-color: rgba(0, 0, 0, .12);
    }
`

const MySide = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
`

export function ComponentPage(props: SimplePageProps) {
    
    
    
    function SideMenuItem(item: IMenuItem, index: number) {
        return (
            <MenuItem data-class="menu-item" key={index}>
                <Link to={item.url} style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    padding: '8px 16px',
                }}>{item.title}</Link>
            </MenuItem>
        )
    }
    const side = (
        <MySide>
            <MenuList>
                {menus.map(SideMenuItem)}
                {/* <Link to="/components/switch">Switch 开关</Link> */}
            </MenuList>
        </MySide>
    )
    
    return (
        <SimplePage {...props} side={side}  action={
            <IconButton href="https://project.yunser.com/products/d0a7c630a55911eaa3824f27432dbf16" target="_blank">
                <Icon name="help" />
            </IconButton>
        }>
            <Container style={{ padding: 16 }}>
                {props.children}
            </Container>
        </SimplePage>
    )
}
