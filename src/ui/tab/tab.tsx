import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Root = styled.div`
    display: flex;
`

interface ItemProps {
    children: ReactNode
    style?: any // TODO
    value: string
    onClick?: any // TODO
    selected?: boolean
}

const ItemRoot = styled.div`
    flex-grow: 1;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #09f;
`

function Item(props: ItemProps) {
    const { selected = false, onClick, children } = props

    return (
        <ItemRoot onClick={onClick} style={{ borderBottom: selected ? '2px solid #f00' : 'none'}}>{children}</ItemRoot>
    )
}

interface TabProps {
    value?: string
    onChange?: (value: string) => void
    children: ReactNode
}

export function Tab(props: TabProps) {
    const { value, onChange, children } = props

    let newChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
            return null;
        }
        return React.cloneElement(child, {
            // fullWidth: variant === 'fullWidth',
            // indicator: selected && !mounted && indicator,
            // selected,
            // selectionFollowsFocus,
            // onChange,
            // textColor,
            // value: childValue,
            onClick: () => {
                onChange && onChange(child.props.value)
            },
            selected: value === child.props.value
          });
    })
    return (
        <Root>
            {newChildren}
            {/* <Item>第一</Item>
            <Item>第2</Item>
            <Item>第3</Item> */}
        </Root>
    )
}

Tab.Item = Item
