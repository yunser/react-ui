import React from "react"
import styled from 'styled-components'

const IconWrap = styled.i`
    /* padding-top: 64px; */
`

export interface IcomProps {
    className?: string
    name?: string
}

export function Icon(props: IcomProps) {
    const { className, name } = props

    return (
        <IconWrap className={'mu-icon material-icons ' + className}>{name}</IconWrap>
    )
}
