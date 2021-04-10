import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Simple } from './simple'

const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000000;
    background: rgba(0, 0, 0, .8);
`

const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000001;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RightIcon = styled.i`
    width: 40px;
    height: 40px;
    position: fixed;
    top: 50%;
    
    right: 0;
    background: #f00;
`

const LeftIcon = styled.i`
    width: 40px;
    height: 40px;
    position: fixed;
    top: 50%;
    left: 0;
    background: #f00;
`

const CloseIcon = styled.i`
    width: 40px;
    height: 40px;
    position: fixed;
    top: 0;
    right: 0;
    background: #f00;
`

const Info = styled.div`
    width: 40px;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    background: #f00;
`

interface ImagePreviewerProps {
    images: string[]
    onClose?: Function
    current?: number
}

export function ImagePreviewer(props: ImagePreviewerProps) {
    const { images = [], onClose, current = 0 } = props
    const [ current2, setCurrent ] = useState(current)

    function close() {
        onClose && onClose()
    }

    function prev() {
        setCurrent((current2 + images.length - 1) % images.length)
    }

    function next() {
        setCurrent((current2 + 1) % images.length)
    }

    // TODO use keydown
    useEffect(() => {
        let handler = (e: KeyboardEvent) => {
            console.log('e', e.keyCode)
            switch (e.keyCode) {
                case 27:
                    close()
                    break
                case 37:
                    prev()
                    break
                case 39:
                    next()
                    break
            }
        }
        window.addEventListener('keydown', handler)
        return () => {
            window.removeEventListener('keydown', handler)
        }
    })

    return (
        <div>
            {/* <Simple /> */}
            <Mask />
            <Content>
                <Info>{current2 + 1}/{images.length}</Info>
                <img src={images[current2]} alt="image" />
                <CloseIcon className="material-icons" onClick={() => {
                    close()
                }}>close</CloseIcon>
                <LeftIcon className="material-icons" onClick={() => {
                    prev()
                }}>navigate_before</LeftIcon>
                <RightIcon className="material-icons" onClick={() => {
                    next()
                }}>navigate_next</RightIcon>
                
            </Content>
            
        </div>
    )
}
