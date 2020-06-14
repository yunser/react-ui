import { useState, useEffect, useLayoutEffect, useCallback } from "react"

export function useInterval(handler: (...args: any[]) => void, timeout: number) {
    useEffect(() => {
        let timerId = setInterval(handler, timeout)
        return () => {
            clearInterval(timerId)
        }
    }, [])
}


export function useTimeout(handler: (...args: any[]) => void, timeout: number) {
    useEffect(() => {
        let timerId = setTimeout(handler, timeout)
        return () => {
            clearTimeout(timerId)
        }
    }, [])
}

export function useTitle(title: string) {
    useEffect(() => {
        document.title = title
    }, [])
}

export function useEvent(type: string, listener: EventListenerOrEventListenerObject) {
    let elem = window
    useEffect(() => {
        elem.addEventListener(type, listener)
        return () => {
            elem.removeEventListener(type, listener)
        }
    }, [])
}

export function useHover(rel: React.MutableRefObject<null>) {
    const [ hovered, setHovered ] = useState(false)
    // TODO useLayoutEffect?
    useLayoutEffect(() => {
        // console.log('==effect')
        // console.log('elRef', rel, rel.current)
        const hoverEl: any = rel.current // TODO any
        const onHover = () => {
            console.log('hover in')
            setHovered(true)
        }
        const offHover = () => {
            console.log('hover out')
            setHovered(false)
        }
        if (hoverEl) {
            hoverEl.addEventListener('mouseover', onHover)
            hoverEl.addEventListener('mouseout', offHover)
        }
        return () => {
          hoverEl.removeEventListener('mouseover', onHover)
          hoverEl.removeEventListener('mouseout', offHover)
        }

    }, [])
    return [ hovered, setHovered ]
}

// 创建自定义函数来写入方法
export function useDocSize(callback?: Function) {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    })
    // 写入方法
    // 使用 useCallback 缓存方法
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
        callback && callback()
    }, [])
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize',  onResize)
        }
    }, [onResize])
    return size
}
