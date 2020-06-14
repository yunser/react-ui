
import React, { ReactNode } from 'react'


interface ConfigProviderProps {
    children: ReactNode
}

const {Provider, Consumer} = React.createContext({
    asd: 0
});

export function ConfigProvider(props: ConfigProviderProps) {
    const { children } = props
    
    return (
        <React.Fragment>
            <Provider value={{asd: 1}}>
                {children}
            </Provider>
        </React.Fragment>
    )
}

export interface TextProps {
    id: string
}

export function Text(props: TextProps) {
    return <div>
        <Consumer>
            {
                value => value.asd
            }
        </Consumer>
    </div>
}