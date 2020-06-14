import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// page
import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'
import ComponentOne from './views/Component'
import Components from './views/Components'
import ComponentSwitch from './views/ComponentSwitch'
import Editor from './views/Editor'

import { ThemeProvider } from "styled-components";
import { defaultTheme } from './ui/styles'

import './App.css' // TODO
import { ConfigProvider } from './ui'

class App extends Component {

    render() {
        console.log('app页渲染')
        return (
            <ConfigProvider>
                <ThemeProvider theme={defaultTheme}>
                    <BrowserRouter>
                        {/* <PrimaryLayout /> */}
                        <div>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" exact component={About} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/components" exact component={ComponentOne} />
                            <Route path="/editor" exact component={Editor} />
                            {/* <Route path="/components/:id" exact component={Components} /> */}
                            <Route path="/components/switch" exact component={ComponentSwitch} />
                        </div>
                    </BrowserRouter>
                </ThemeProvider>
            </ConfigProvider>
        )
    }
}

export default App
