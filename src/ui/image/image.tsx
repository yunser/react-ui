import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ImageProps {
    src: string
    // children: ReactNode
}

const Root = styled.img`
`

export function Image(props: ImageProps) {
    const { src } = props
    return (
        <Root src={src}></Root>
    )
}
