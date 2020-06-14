import React, { Component } from 'react'
import { Link } from '../ui'
import { SimplePage } from '../components'

class About extends Component {
    render() {
        return (
            <SimplePage title="关于">
                这是关于页面
                <Link to="/">首页</Link>
            </SimplePage>
        )
    }
}

export default About
