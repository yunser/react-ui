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
    animation: MuiSkeleton-keyframes-pulse 1.5s ease-in-out 0.5s infinite;
    @-webkit-keyframes MuiSkeleton-keyframes-pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.4;
        }
        100% {
            opacity: 1;
        }
    }
`

export function Skeleton(props: SkeletonProps) {
    const { width = '100%', height = 2, shape = 'rect' } = props
    return (
        <Root style={{ width, height, borderRadius: shape === 'circle' ? '50%' : 0 }}></Root>
    )
}

