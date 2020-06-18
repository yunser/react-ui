import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { propsShadowByKey } from '../styles'

interface CardProps {
    children: ReactNode
}

const Root = styled.div`
    box-shadow: ${props => propsShadowByKey(props, 'button')};   
`

const Content = styled.div`
    padding: 16px;
`

// function Content() {
//     return (
//         <ContentRoot></ContentRoot>
//     )
// }

export function Card(props: CardProps) {
    const { children } = props
    return (
        <Root>
            {children}
        </Root>
    )
}

Card.Content = Content
