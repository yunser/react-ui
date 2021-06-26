import React, { ReactNode } from 'react'

// interface ViewProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>{

interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function View(props: ViewProps) {
    const { children, ...restProps } = props
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}
