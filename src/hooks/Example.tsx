import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useInterval, useTitle, useEvent, useHover } from './index'

export function Example() {

    useInterval(() => {
        console.log('timer')
    }, 1000)

    let num = localStorage.getItem('num')
    // const [ num, setNum ] = useState(localStorage.getItem('num'))

    useTitle('组件')

    useEffect(() => {
        console.log('==effect')
    }, [])
    useLayoutEffect(() => {
        console.log('==layout effect')
    }, [])
    console.log('==render')


    useEvent('scroll', () => {
        console.log('on Scroll', window.scrollY)
    })

    
    const elRef = useRef(null)
    

    


    const [ hovered, setHovered ] = useHover(elRef)

    return (
        <div>
            实例

            <div ref={elRef}>

                1
                <div></div>
                { hovered ? 'animated' : 'static' }
                <div></div>
                2
            </div>

            <h2>local storage</h2>
            num: {num}
            <div>
                <button onClick={() => {
                    setNum(num + 1)
                }}>+1</button>
            </div>
        </div>
    )
}
