import { useState, useEffect } from 'react'

// TODO
/* eslint-disable */

let map: any = {}
let values: any = {}
let callbacks: any = {}
let g_size: any

console.log(g_size)

export function useStore<S>(defaultValue: S, key: string): [S, (value: S) => void] {
    const [size, setSize] = useState(defaultValue)
    g_size = size

    if (!map[key]) {
        map[key] = '' + new Date().getTime()
        values[key] = defaultValue
        callbacks[key] = [setSize]
    } else {
        // values[key] = defaultValue
        callbacks[key].push(setSize)
    }
    // 写入方法
    // 使用 useCallback 缓存方法
    // const onResize = useCallback(() => {
    //     setSize({
    //         width: document.documentElement.clientWidth,
    //         height: document.documentElement.clientHeight,
    //     })
    // }, [])
    useEffect(() => {
        // window.addEventListener('resize', onResize)
        // return () => {
        //     window.removeEventListener('resize',  onResize)
        // }
        // set
    }, [map[key]])
    let setter = (value: S) => {
        // setSize(value)
        map[key] = '' + new Date().getTime()
        values[key] = value
        for (let call of callbacks[key]) {
            call && call(value)
        }
    }
    return [values[key], setter]
}
