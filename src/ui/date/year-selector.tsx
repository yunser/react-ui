import React from 'react'
import styled from 'styled-components'


interface YearSelectorProps {
    value: number    
    onChange: (value: number) => void
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 200px;
    overflow: auto;
`

const Item = styled.div`
    width: 80px;
    border: 1px solid #000;
    margin-right: 8px;
    margin-bottom: 8px;
`

export function YearSelector(props: YearSelectorProps) {
    const { value, onChange } = props

    // const years = []
    // for (let i = 1900; i <= 2100; i++) {
    //     years
    // }
    const years = Array.from({ length: 200 }, (v, i) => 1900 + i)
    // console.log('months', months)
    return (
        <List>
            {years.map(item => {
                return (
                    <Item
                        onClick={() => {
                            onChange && onChange(item)
                        }}
                    >{item}</Item>
                )
            })}
        </List>
    )
}
