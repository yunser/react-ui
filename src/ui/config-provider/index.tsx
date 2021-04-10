
import React, { ReactNode } from 'react'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../styles'

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
            <ThemeProvider theme={defaultTheme}>
                <Provider value={{asd: 1}}>
                    {children}
                </Provider>
            </ThemeProvider>
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