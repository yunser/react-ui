import React, { Component } from 'react'
import { Link } from '../ui/router-link'
import { SimplePage } from '../components'

export default class About extends Component {
    render() {
        return (
            <SimplePage title="关于">
                这是关于页面？？
                <Link to="/">首页</Link>
            </SimplePage>
        )
    }
}
