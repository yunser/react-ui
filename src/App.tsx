import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// page
import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'
import ComponentHome from './views/ComponentHome'
import ComponentOne from './views/Component'
import ComponentSwitch from './views/ComponentSwitch'
import ComponentButton from './views/components/Button'
import ComponentPagination from './views/components/Pagination'
import ComponentSkeleton from './views/components/Skeleton'
import ComponentProgress from './views/components/Progress'
import ComponentRadio from './views/components/Radio'
import ComponentTab from './views/components/Tab'
import ComponentSlider from './views/components/Slider'
import ComponentEmpty from './views/components/Empty'
import ComponentDivider from './views/components/Divider'
import ComponentIcon from './views/components/Icon'
import ComponentTable from './views/components/Table'
import ComponentDialog from './views/components/Dialog'
import ComponentMenu from './views/components/Menu'
import ComponentDrawer from './views/components/Drawer'
import Component404 from './views/components/Error404'
import ComponentPaper from './views/components/Paper'
import ComponentTooltip from './views/components/Tooltip'
import ComponentList from './views/components/List'
import ComponentToast from './views/components/Toast'
import ComponentCheckbox from './views/components/Checkbox'
import ComponentSelect from './views/components/Select'
import ComponentTest from './views/components/Test'
import ComponentAll from './views/components/All'
import ComponentTag from './views/components/Tag'
import ComponentImage from './views/components/Image'
import ComponentCard from './views/components/Card'
import ComponentAvatar from './views/components/Avatar'
import ComponentLink from './views/components/Link'
import ComponentDate from './views/components/DatePicker'
import ComponentColor from './views/components/Color'
import ComponentRate from './views/components/Rate'
import ComponentUploader from './views/components/Uploader'

import Editor from './views/Editor'
import Start from './views/Start'

import { ThemeProvider } from "styled-components";
import { defaultTheme } from './ui/styles'

import './App.css' // TODO
import { ConfigProvider } from './ui'

const routers = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/start',
        component: Start
    },
    // {
    //     path: '/components/button',
    //     component: Start
    // },
]

export default class App extends Component {

    render() {
        console.log('app页渲染')
        return (
            <ConfigProvider>
                <ThemeProvider theme={defaultTheme}>
                    <BrowserRouter>
                        {/* <PrimaryLayout /> */}
                        <div>
                            {/* {routers.map(item => {
                                return <Route path={item.path} exact component={item.component} key={item.path} />
                            })} */}
                            <Route path="/" exact component={ComponentHome} />
                            <Route path="/start" exact component={About} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/components" exact component={ComponentOne} />
                            <Route path="/editor" exact component={Editor} />
                            {/* <Route path="/components/:id" exact component={Components} /> */}
                            <Route path="/start" exact component={Start} />

                            <Route path="/components/switch" exact component={ComponentSwitch} />
                            <Route path="/components/button" exact component={ComponentButton} />
                            <Route path="/components/pagination" exact component={ComponentPagination} />
                            <Route path="/components/skeleton" exact component={ComponentSkeleton} />
                            <Route path="/components/progress" exact component={ComponentProgress} />
                            <Route path="/components/radio" exact component={ComponentRadio} />
                            <Route path="/components/tab" exact component={ComponentTab} />
                            <Route path="/components/slider" exact component={ComponentSlider} />
                            <Route path="/components/empty" exact component={ComponentEmpty} />
                            <Route path="/components/divider" exact component={ComponentDivider} />
                            <Route path="/components/icon" exact component={ComponentIcon} />
                            <Route path="/components/table" exact component={ComponentTable} />
                            <Route path="/components/dialog" exact component={ComponentDialog} />
                            <Route path="/components/menu" exact component={ComponentMenu} />
                            <Route path="/components/drawer" exact component={ComponentDrawer} />
                            <Route path="/components/paper" exact component={ComponentPaper} />
                            <Route path="/components/tooltip" exact component={ComponentTooltip} />
                            <Route path="/components/list" exact component={ComponentList} />
                            <Route path="/components/toast" exact component={ComponentToast} />
                            <Route path="/components/checkbox" exact component={ComponentCheckbox} />
                            <Route path="/components/select" exact component={ComponentSelect} />
                            <Route path="/components/test" exact component={ComponentTest} />
                            <Route path="/components/all" exact component={ComponentAll} />
                            <Route path="/components/tag" exact component={ComponentTag} />
                            <Route path="/components/image" exact component={ComponentImage} />
                            <Route path="/components/card" exact component={ComponentCard} />
                            <Route path="/components/avatar" exact component={ComponentAvatar} />
                            <Route path="/components/link" exact component={ComponentLink} />
                            <Route path="/components/time" exact component={ComponentDate} />
                            <Route path="/components/color" exact component={ComponentColor} />
                            <Route path="/components/rate" exact component={ComponentRate} />
                            <Route path="/components/uploader" exact component={ComponentUploader} />
                            {/* <Route path="/components/*" exact component={Component404} /> */}
                        </div>
                    </BrowserRouter>
                </ThemeProvider>
            </ConfigProvider>
        )
    }
}
