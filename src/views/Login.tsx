import React, { Component } from 'react'
import { Link } from '../ui'

export default class Login extends Component {
    render() {
        return (
            <div>
                这是登录页面
                <Link to="/">首页</Link>
            </div>
        )
    }
}
