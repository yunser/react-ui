import React from 'react'
import styled from 'styled-components'


interface MonthSelectorProps {
    value: number    
    onChange: (value: number) => void
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Item = styled.div`
    width: 80px;
    border: 1px solid #000;
    margin-right: 8px;
    margin-bottom: 8px;
`

export function MonthSelector(props: MonthSelectorProps) {
    const { value, onChange } = props

    let months = Array.from({ length: 12 }, (v, i) => i)
    console.log('months', months)
    return (
        <List>
            {months.map(item => {
                return (
                    <Item
                        onClick={() => {
                            onChange && onChange(item)
                        }}
                    >{item + 1}月</Item>
                )
            })}
        </List>
    )
}
