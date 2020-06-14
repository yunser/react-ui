import React, { useRef, useEffect, useState, ReactElement, Fragment } from 'react'
import styled from 'styled-components'

const grey700 = '#999'

const Title = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 22px;
    color: #fff;
    z-index: 100000000;
    background: ${grey700};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    border-radius: 4px;
    opacity: .9;
    font-size: 12px;
`

interface TooltipProps {
    children: ReactElement
    title: string
}

export function Tooltip(props: TooltipProps) {
    const { children, title } = props

    const refRoot = useRef(null)
    const refTitle = useRef(null)
    const refButton = useRef(null)
    const [ pot, setPot ] = useState({
        x: 0,
        y: 0
    })

    const [ titleVisible, setTitleVisible ] = useState(false)

    useEffect(() => {
        console.log('ref.current && refTitle.current', refButton.current)
        if (refRoot.current && refTitle.current) {
            const rect: DOMRect = (refRoot.current as any).getBoundingClientRect() // TODO ref.current as HTMLElement
            const titleRect: DOMRect = (refTitle.current as any).getBoundingClientRect() // TODO ref.current as HTMLElement
            // let asd = document.getElementById('asd')
            // asd?.getBoundingClientRect()
            // console.log('rect', rect)
            setPot({
                x: rect.left + rect.width / 2 - titleRect.width / 2,
                y: rect.top - titleRect.height - 14
            })
        }
    }, [titleVisible])

    // const [ hovered ] = useH
    

    return (
        <Fragment>
            <children.type {...children.props} ref={refRoot}
                onMouseEnter={() => {
                    setTitleVisible(true)
                }}
                onMouseLeave={() => {
                    setTitleVisible(false)
                }}
                >{children.props.children}</children.type>
            {/* <div ref={ref}>
                {children}
            </div> */}
            {/* <div ref={ref}>999</div> */}
            {/* <Button ref={refButton}>按钮</Button> */}
            {titleVisible &&
                <Title ref={refTitle} style={{ left: pot.x, top: pot.y }}>{title}</Title>
            }
        </Fragment>
    )
}
