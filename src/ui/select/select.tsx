import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { propsZIndexByKey, propsShadowByKey } from "../styles";



const ItemRoot = styled.div`
    font-size: 16px;
    padding: 6px 16px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
`

interface ItemProps {
    value?: string
    onClick?: Function
    children?: ReactNode
    selected?: boolean
    onChange?: (selected: boolean) => void
}

function Item(props: ItemProps) {
    const { selected, children, onChange } = props
    return (
        <ItemRoot
            onClick={() => {
                onChange && onChange(!selected)
            }}
            style={{ background: selected ? '#eee' : '#fff'}}>{children}</ItemRoot>
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
    max-height: 200px;
    overflow: auto;
`

const Root = styled.div`
    display: inline-block;
    position: relative;
    min-width: 160px;
    padding: 8px 16px;
    /* border-bottom: 1px solid #000; */
    border: 1px solid #000;
`

interface SelectProps {
    value?: any
    children?: ReactNode
    onChange?: (value: any) => void
}

const Mark = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    /* background: #000; */
`

const Value = styled.div`
    min-width: 40px;
`

export function Select(props: SelectProps) {
    // console.log()
    const { value, onChange, children } = props

    const [ menuVisible, setMeenuVisible ] = useState(false)

    let selectedChildren = ''
    let newChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
            return null;
        }
        if (value === child.props.value) {
            selectedChildren = child.props.children
        }
        return React.cloneElement(child, {
            // fullWidth: variant === 'fullWidth',
            // indicator: selected && !mounted && indicator,
            // selected,
            // selectionFollowsFocus,
            // onChange,
            // textColor,
            // value: childValue,
            // onClick: () => {
            //     onChange && onChange(child.props.value)
            // },
            onChange(value: any) {
                onChange && onChange(child.props.value)
                setMeenuVisible(false)
            },
            selected: value === child.props.value
          });
    })

    return (
        <Root>
            <div onClick={() => {
                setMeenuVisible(true)
            }}>
                {/* {value} */}
                <Value>{selectedChildren}</Value>
                {!menuVisible &&
                    <svg style={{width: 40}} fill="#999" className="MuiSvgIcon-root MuiSelect-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                }
                {menuVisible &&
                    <svg style={{
                        width: 40,
                        transform: 'rotate(180deg)'
                    }} className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOpen" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg>
                }
                {/* { menuVisible ? '上' : '下' } */}
            </div>
            {menuVisible &&
                <Mark onClick={() => {
                    setMeenuVisible(false)
                }} />
            }
            {menuVisible &&
                <List>
                    {newChildren}
                </List>
            }
        </Root>
    )
}

Select.Item = Item
