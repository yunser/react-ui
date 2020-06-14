import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface MenuProps {
    open?: boolean
    onClose?: Function
    anchorEl?: any // any
    children?: ReactNode
}

interface MenuItemProps {
    children?: ReactNode
}

const MenuItemWrap = styled.div`
    padding: 6px 16px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
`

function MenuItem(props: MenuItemProps) {
    const { children } = props
    return (
        <MenuItemWrap>{children}</MenuItemWrap>
    )
}

const MenuWrap = styled.div`
    padding: 8px 0;
    min-width: 112px;
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
`

const Mask = styled.div`
     
`

export function Menu(props: MenuProps) {
    const { children } = props
    return (
        <div>
            <MenuWrap>{children}</MenuWrap>
            <Mask />
        </div>
    )
}

Menu.Item = MenuItem
