import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PaperProps {
    children?: ReactNode
    level?: number
}

const Root = styled.div<PaperProps>`
    box-shadow: ${props => {
        console.log('阴影', props.level, props.theme.shadows[props.level || 0])
        return props.theme.shadows[props.level || 0]
    }};
`

export function Paper(props: PaperProps) {
    const { children } = props

    return (
        <Root {...props}>
            {children}
        </Root>
    )
}
