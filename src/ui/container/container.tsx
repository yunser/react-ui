import React, { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
    children: ReactNode
}

const Root = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px;
`

export function Container(props: ContainerProps) {
    const { children } = props
    return (
        <Root>
            {children}
        </Root>
    )
}
