import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
    display: flex;
`

const Item = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid #000; */
    border-radius: 50%;
    margin: 0 3px;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
`

interface PaginationProps {
    page?: number
    totalPage?: number
    onChange?: (page: number) => void
}

export function Pagination(props: PaginationProps) {
    const { page = 1, onChange, totalPage = 1 } = props

    const items: any[] = []
    items.push('prev')
    let preArr: any[] = []
    if (page > 1) {
        for (let idx = page - 1; idx >= 1; idx--) {
            preArr.push(idx)
        }
        if (preArr.length > 3) {
            preArr = [preArr[0], '...', preArr[preArr.length - 1]]
        }
        items.push(...preArr.reverse())
    }
    items.push(page)
    if (page < totalPage) {
        let arr: any[] = []
        for (let idx = page + 1; idx <= totalPage; idx++) {
            arr.push(idx)
        }
        if (arr.length > 3) {
            arr = [arr[0], '...', arr[arr.length - 1]]
        }
        items.push(...arr)
    }
    items.push('next')

    return (
        <Root>
            {items.map((item) => {
                return (
                    <Item key={item}
                        onClick={() => {
                            onChange && onChange(item)
                        }}
                        style={{
                            backgroundColor: item === page ? '#ddd' : undefined
                        }}
                    >
                        {item}
                    </Item>
                )
            })}
        </Root>
    )
}
