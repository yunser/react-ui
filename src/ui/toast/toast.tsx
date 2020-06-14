import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components"

const ToastsWrap = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100000000;
    /* background: #f00; */
    padding: 16px;
`

interface ToastProps {
    type?: string
    children?: ReactNode
}

function getBg(props: any) {
    if (props.type === 'success') {
        return '#4caf50'
    }
    if (props.type === 'error') {
        return '#f44336'
    }
    if (props.type === 'info') {
        return '#2196f3'
    }
    if (props.type === 'warning') {
        return '#ff9800'
    }
    return `rgb(50, 50, 50)`
}

const ToastWrap = styled.div<ToastProps>`
    /* position: fixed;
    top: 0;
    left: 0;
    z-index: 100000000;
    background: #f00; */
    height: 48px;
    padding: 0 16px;
    /* border: 1px solid #f00; */
    color: #fff;
    background-color: ${props => getBg(props)};
    margin-top: 16px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
`

interface ToastsProps {
    ref?: any
    children?: ReactNode
    notices?: ReactNode[]
}

export function Toasts(props: ToastsProps) {
    const { children, ref, notices = [] } = props
    return (
        <ToastsWrap ref={ref}>
            {children}
            {notices.map(item => item)}
        </ToastsWrap>
    )
}

export function Toast(props: ToastProps) {
    const { children, type } = props
    return (
        <ToastWrap type={type}>{children}</ToastWrap>
    )
}

function createNotification() {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const ref = React.createRef()

    let notices: ReactNode[] = []

    ReactDOM.render((
        <Toasts notices={notices} ref={ref}>
            {/* <Toast>123</Toast> */}
            <div id="ui-divs"></div>
        </Toasts>
    ), div)

    setTimeout(() => {

    })
    return {
        addNotice(type: string, content: ReactNode) {
            notices.push(content)
            let p = document.getElementById('ui-divs')
            let div: any // TODO
            if (p) {
                div = document.createElement('div')
                p.append(div)
                ReactDOM.render((
                    <Toast type={type}>{content}</Toast>
                ), div)
            }
            // return ref.current.addNotice(notice)
            return {
                destroy() {
                    ReactDOM.unmountComponentAtNode(div)
                }
            }
        },
        // destroy() {
        //     ReactDOM.unmountComponentAtNode(div)
        //     document.body.removeChild(div)
        // }
    }
}

let g_box: any // TODO

interface ShowToastParam {
    type: string
    content: ReactNode
}

function showToast({type, content}: ShowToastParam) {
    if (!g_box) {
        g_box = createNotification()
    }
    let ret = g_box.addNotice(type, <div>{content}</div>)
    // return 
    setTimeout(() => {
        ret.destroy()
    }, 2000)
}

Toast.info = function (text: string) {
    showToast({
        type: 'info',
        content: text
    })
}

Toast.success = function (text: string) {
    showToast({
        type: 'success',
        content: text
    })
    // showToast(text)
}

Toast.error = function (text: string) {
    showToast({
        type: 'error',
        content: text
    })
    // showToast(text)
}
