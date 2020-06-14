import React, { ReactNode } from "react";
import styled from "styled-components";
import { propsZIndexByKey, propsShadowByKey } from "../styles";

interface SelectProps {
    children: ReactNode
}

interface ItemProps {
    value: string
    children: ReactNode
}

const ItemRoot = styled.div`
    font-size: 16px;
    padding: 6px 16px;
`

function Item(props: ItemProps) {
    const { children } = props
    return (
        <ItemRoot>{children}</ItemRoot>
    )
}

const List = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100000;
    background: #fff;
    z-index: ${props => propsZIndexByKey(props, 'select')};
    box-shadow: ${props => propsShadowByKey(props, 'select')};
    /* box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12); */
    padding: 8px 0;
    min-width: 120px;
`

const Root = styled.div`
    position: relative;
`

export function Select(props: SelectProps) {
    // console.log()
    const { children } = props
    return (
        <Root>
            123
            <List>{children}</List>
        </Root>
    )
}

Select.Item = Item
