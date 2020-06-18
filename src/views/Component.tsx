import React, { useState, useEffect, ReactNode } from 'react'
import { Link, AppBar, ToolBar,
    Icon, SubHeader, Fab,
    } from '../ui'
import { ComponentPage } from '../components'

import { Text } from '../ui/config-provider'

import styled, {} from 'styled-components'

import { $t } from '../locale'
import { useStore } from '../store'

import { Example as HooksExample } from '../hooks/Example'


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

function useStyle() {
    const style = document.createElement('style')
    style.type = 'text/css'; 
    style.innerHTML=".asd222{ color: #f00 }";
    document.getElementsByTagName('head').item(0).appendChild(style)
}

function objToStyleText(obj) {
    let results = []
    for (let name in obj) {
        results.push(`${name}: ${obj[name]}`)
        // if (name === 'color') {
        // }
    }
    return results.join(';')
}

function useClass(obj: any) {

    let styleText = ''
    let classes = {}
    for (let name in obj) {
        const uniqueClassName = `${name}-${new Date().getTime() + Math.floor(1000 * Math.random())}`
        styleText += `.${uniqueClassName} {${objToStyleText(obj[name])}}`
        classes[name] = uniqueClassName
    }
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = styleText
    document.getElementsByTagName('head').item(0).appendChild(style)

    return classes
}

// function use
function UseStyleDemo() {

    useStyle()

    const classes = useClass({
        red: {
            color: '#f00',
        },
        blue: {
            color: '#09c'
        }
    })

    // cons
    return (
        <div>
            <div style={{ color: '#f00' }}>直接设置颜色（style）</div>
            <div className={'asd222'}>直接设置颜色（className）</div>
            <div className={classes.red}>红色（useClass）</div>
            <div className={classes.blue}>蓝色（useClass）</div>
        </div>
    )
}







export default function Component(props: any) {

    // const {Provider, Consumer} = React.createContext({
    //     asd: 3
    // });

    console.log('组件渲染')

    const [ count, setCount ] = useStore(0, 'count')
    const [ color, setColor ] = useState('w')
    
    
    
    

    

    return (
        <ComponentPage title="组件23">
            
            {/* <GlobalStyle /> */}
            <Container>

                useStyle
                <Box>
                    <UseStyleDemo />
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
                


                subheader
                <Box>
                    <SubHeader>标题1</SubHeader>
                    <SubHeader>标题2</SubHeader>
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


                appbar
                <Box>
                    <AppBar>普通按钮</AppBar>
                </Box>
                
            </Container>

            
            <PageFab color="secondary">
                <Icon name="add" />
            </PageFab>
        </ComponentPage>
    )
}
