import React, { useState, ReactNode } from 'react'
import { Divider } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'
import styled from 'styled-components'


function DividerDemo() {
    return (
        <div>
            1
            <Divider />
            2
        </div>
    )
}

const Layout = styled.div`
    position: relative;
    display: flex;
    width: 500px;
    height: 400px;
    border: 1px solid #000;
`

const Left = styled.div`
    position: absolute;
    left: 0;
    width: 200px;
    height: 100%;
    /* border: 1px solid #000; */
    /* background: #f00; */
`

const Right = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    /* width: 200px; */
    height: 100%;
    /* border: 1px solid #09c; */
    /* background: #09c; */
`

const Line = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    /* background: #000; */
    cursor: col-resize;
`

interface LeftRightLayoutProps {
    left: ReactNode
    right: ReactNode
}

function LeftRightLayout(props: LeftRightLayoutProps) {
    const { left, right } = props
    const [ leftWidth, setLeftWidth ] = useState(200)

    let downX
    let downW

    function handlerMouseMove(e: MouseEvent) {
        let pt = {
            x: e.pageX,
            y: e.pageY
        }
        let newWidth = downW + pt.x - downX
        if (newWidth < 100) {
            newWidth = 100
        }
        if (newWidth > 300) {
            newWidth = 300
        }
        setLeftWidth(newWidth)
    }

    function handlerMouseUp() {
        window.removeEventListener('mousemove', handlerMouseMove)
        window.removeEventListener('mouseup', handlerMouseUp)
    }
    
    return (
        <div>
            <Layout>
                <Left style={{width: leftWidth}}>
                    {!!left && left}
                </Left>
                <Right style={{left: leftWidth}}>{!!right && right}</Right>
                <Line style={{left: leftWidth}} onMouseDown={e => {
                    console.log('e', e.pageX)
                    downX = e.pageX
                    downW = leftWidth
                    window.addEventListener('mousemove', handlerMouseMove)
                    window.addEventListener('mouseup', handlerMouseUp)
                }} />
            </Layout>
        </div>
    )
}

const ListWrap = styled.div`
    width: 100px;
    height: 400px;
    border: 1px solid #eee;
`

const ItemWrap = styled.div`
    width: 100%;
    height: 80px;
    border: 1px solid #000;
`

function Item(item, index) {
    return (
        <ItemWrap key={Item.id}>
            {item.name}
        </ItemWrap>
    )
}

function SortableList() {
    const list = [
        {
            id: '1',
            name: '一',
        },
        {
            id: '2',
            name: '二',
        },
        {
            id: '3',
            name: '三',
        },
    ]

    

    return (
        <ListWrap>
            {list.map(Item)}
        </ListWrap>
    )
}


const RectWrap = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px solid #f00;
`

const ResizeRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 8px;
    background-color: #000;
    cursor: col-resize;
`

const ResizeBottom = styled.div`
    position: absolute;
    /* top: 0; */
    right: 0;
    left: 0;
    bottom: 0;
    /* width: 8px; */
    height: 8px;
    background-color: #f00;
    cursor: col-resize;
`

function ResizeRect(props: any) {
    const { width, height } = props
    let downW
    let downX
    function handlerMouseMove(e) {
        // e.pageX - downX
    }

    function handlerMouseUp(e) {
        window.removeEventListener('mousemove', handlerMouseMove)
        window.removeEventListener('mouseup', handlerMouseUp)
    }

    return (
        <RectWrap style={ width, height }>
            123099
            <ResizeRight onMouseDown={e => {
                downX = e.pageX
                downW = width
                window.addEventListener('mousemove', handlerMouseMove)
                window.addEventListener('mouseup', handlerMouseUp)
            }} />
            <ResizeBottom />
        </RectWrap>
    )
}
export default () => {

    const left = (
        <div>这是左边</div>
    )

    const right = (
        <div>这是右边</div>
    )

    const [ width, setWidth ] = useState(200)
    const [ height, setHeight ] = useState(100)

    return (
        <ComponentPage title="Divider">
            <SortableList />
            <ResizeRect style={{ width, height }}  />
            <p draggable="true">拖动我!</p>
            <p draggable="true">可以拖到这里</p>
            {/* <LeftRightLayout left={left} right={right} /> */}
            {/* <H1>Divider</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Divider } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2> */}

            {/* <Demo>
                <DividerDemo />
            </Demo> */}
        </ComponentPage>
    )
}
