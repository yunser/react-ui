import React from 'react'
import styled from 'styled-components'

interface SkeletonProps {
    shape?: string
    width: number | string
    height: number | string
}

const Root = styled.div`
    min-height: 2px;
    background: #eee;
    border-radius: 2px;
`

export function Skeleton(props: SkeletonProps) {
    const { width = '100%', height = 2, shape = 'rect' } = props
    return (
        <Root style={{ width, height, borderRadius: shape === 'circle' ? '50%' : 0 }}></Root>
    )
}
