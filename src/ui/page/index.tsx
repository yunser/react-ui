import React, { ReactNode, useState, useEffect, useCallback } from "react"
import styled, {} from 'styled-components'
import { AppBar, ToolBar, Icon, IconButton, List, Drawer } from '..'
import { themeColor } from '../styles'
// import { useStore } from '../../store'

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


// 创建自定义函数来写入方法
function useDocSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    })
    // 写入方法
    // 使用 useCallback 缓存方法
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, [])
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize',  onResize)
        }
    }, [onResize])
    return size
}


export function SimplePage(props: SimplePageProps) {
    const { title, children, action, side } = props

    const docSize = useDocSize()
    const [ sideVisible, setSideVisible ] = useState(docSize.width >= 800)
    const sideType = docSize.width >= 1000 ? 'fixedSide' : 'drawer'
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
                <List.Item to="/about">
                    <List.Icon name="info" />
                    <List.Title>关于</List.Title>
                </List.Item>
                <List.Item href="https://project.yunser.com/products/d0a7c630a55911eaa3824f27432dbf16" target="_blank">
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
