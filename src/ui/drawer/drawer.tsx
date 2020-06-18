import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { propsShadowByKey } from '../styles'
// import { Theme, defaultTheme } from '../styles'
import { Modal } from '../modal'

interface DrawerProps {
    children?: ReactNode
    visible?: boolean
    onClose?: Function
    placement?: string
}

const DrawerWrap = styled.div<DrawerProps>`
`

const transitionParam = '225ms cubic-bezier(0.4, 0, 0.2, 1)'
const draw_width = 256
const drawer_z = 1000000

const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: ${draw_width}px;
    bottom: 0;
    background: #fff;
    z-index: ${drawer_z};
    transition: left ${transitionParam};
`

const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: ${props => propsShadowByKey(props, 'drawer')};
    /* box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); */
    padding: 10px;
    padding: 6px 16px;
    /* cursor: pointer; */
    z-index: 1000000;
`

export function Drawer(props: DrawerProps) {
    const { children, visible: open = true, onClose } = props
    return (
        // <Modal
        //     visible={true}
        //     onClose={onClose}
        // >
        //     1234
        // </Modal>
        <DrawerWrap {...props}>
            {open &&
                <Mask onClick={() => {onClose && onClose() }} />
            }
            <Content style={{ left: open ? 0 : (- draw_width)}}>
                {children}
            </Content>
        </DrawerWrap>
    )
}

