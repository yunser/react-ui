import React from 'react'
import styled from 'styled-components'

interface AvatarProps {
    src: string
}

const Root = styled.img`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
`

export function Avatar(props: AvatarProps) {
    
    const { src } = props

    return (
        <Root src={src} />
    )
}
