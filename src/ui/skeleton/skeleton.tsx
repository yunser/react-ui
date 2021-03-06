import React from 'react'
import styled from 'styled-components'

interface SkeletonProps {
    shape?: string
    width: number | string
    height: number | string
    animation?: boolean
}

const Root = styled.div`
    min-height: 2px;
    background: #eee;
    border-radius: 2px;
    @keyframes keyframes-pulse {
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
    const { width = '100%', height = 2, shape = 'rect', animation = false } = props
    return (
        <Root style={{
            width,
            height,
            borderRadius: shape === 'circle' ? '50%' : 0,
            animation: animation ? 'keyframes-pulse 1.5s ease-in-out 0.5s infinite' : 'none'
        }}></Root>
    )
}

