import React from 'react'
import { ComponentPage } from '../../components'
import styled from 'styled-components'

const Root = styled.div`
    font-size: 32px;
    text-align: center;
    padding: 160px 0;
`

function Error404() {
    return (
        <Root>页面找不到了</Root>
    )
}

export default () => {

    return (
        <ComponentPage title="404">
            <Error404 />
        </ComponentPage>
    )
}
