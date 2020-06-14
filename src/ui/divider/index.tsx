import React from 'react'
import styled from 'styled-components'
// import { Theme, defaultTheme } from '../styles'

interface DividerProps {}

const DividerWrap = styled.hr<DividerProps>`
    /* color: #fff; */
    background-color: rgba(0, 0, 0, .12);
`

export function Divider() {
    // const { children, color } = props
    return <DividerWrap />
}

