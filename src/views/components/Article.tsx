import React from 'react'
import { Article } from '../../ui/article'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code, Display } from '../../ui-doc'


function ArticleDemo() {
    return (
        <div>
            <Article style={{maxWidth: 700}}>
                <h1>一级标题</h1>
                <h2>测试段落</h2>
                <blockquote>引用块</blockquote>
                <p>第一段。</p>
                <p>第二段。</p>
                <p>测试<a href="xxx">超链接</a></p>
                <p>测试内嵌代码<code>java</code>啦啦啦</p>
                <code><pre>console.log('Hello world.')</pre></code>

                <img src="https://icons.yunser.com/icons/app.png" alt="测试图片"/>

                <h2>测试列表</h2>
                <p>无序列表：</p>
                <ul>
                    <li>
                        列表项 1
                        <ul>
                            <li>列表项 11</li>
                            <li>列表项 12
                                <ul>
                                    <li>列表项 121</li>
                                    <li>列表项 122</li>
                                    <li>列表项 123</li>
                                </ul>
                            </li>
                            <li>列表项 13</li>
                        </ul>
                    </li>
                    <li>列表项 2</li>
                    <li>列表项 3</li>
                </ul>

                <p>有序列表：</p>
                <ol>
                    <li>列表项 1</li>
                    <li>列表项 2</li>
                    <li>列表项 3</li>
                </ol>
            </Article>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="文章">
            <H1>Article 文章</H1>

            <H2>Import</H2>

            <Code>{`Import { Article } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>
            {/* <Text>基本的组件。</Text> */}

            <Demo>
                <ArticleDemo />
            </Demo>
        </ComponentPage>
    )
}
