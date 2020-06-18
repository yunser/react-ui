import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { propsShadowByKey } from '../styles'

interface ModalProps {
    children?: ReactNode
    visible?: boolean
    onClose?: Function
}

const DialogWrap = styled.div`
    
`

const maskStyle = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    opacity: 1;
`

const Mask = styled.mask`
    position: fixed;
    ${maskStyle}
    z-index: 999999999;
`

const Body = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: #fff; */
    padding: 24px 40px;
    display: flex;
    z-index: ${999999999 + 1};
    align-items: center;
    justify-content: center;
`

const Center = styled.div`
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    background-color: #fff;
    border-radius: 4px;
    box-shadow: ${props => propsShadowByKey(props, 'button')};
    /* padding: 16px; */
`

interface TitlePros {
    children?: ReactNode
    
}

const TitleWrap = styled.div`
    flex: 0 0 auto;
    margin: 0;
    padding: 24px 24px 20px 24px;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
`

export function Title(props: TitlePros) {
    const { children } = props
    return (
        <TitleWrap>{children}</TitleWrap>
    )
}

export function Modal(props: ModalProps) {
    const { children, visible = true, onClose } = props
    return (
        <DialogWrap>
            {visible &&
                <Mask
                    onMouseDown={e => {
                        e.stopPropagation()
                        e.preventDefault()
                    }}
                    onMouseMove={e => {
                        e.stopPropagation()
                        e.preventDefault()
                    }}
                    onMouseUp={e => {
                        e.stopPropagation()
                        e.preventDefault()
                    }}
                    onClick={() => {
                        console.log('clickMakr')
                        onClose && onClose()
                    }}
                />
            }
            {visible &&
                <Body>
                    <Center>
                        {children}
                    </Center>
                </Body>
            }
        </DialogWrap>
    )
}
