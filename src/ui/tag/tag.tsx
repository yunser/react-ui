import React, { ReactNode } from 'react'

interface TagProps {
    children: ReactNode
}
export function Tag(props: TagProps) {
    const { children } = props
    return (
        <div>
            {children}
        </div>
    )
}
