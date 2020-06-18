import React, { ReactNode, Attributes, CSSProperties } from 'react'
import styled from 'styled-components'

interface PaperProps {
    children?: ReactNode
    level?: number
    style?: CSSProperties & Attributes
}

const defaultLevel = 1

const Root = styled.div<PaperProps>`
    box-shadow: ${props => {
        console.log('阴影', props.level, props.theme.shadows[props.level || defaultLevel])
        return props.theme.shadows[props.level || defaultLevel]
    }};
`

export function Paper(props: PaperProps) {
    const { children, style } = props

    return (
        <Root {...props} style={style}>
            {children}
        </Root>
    )
}
