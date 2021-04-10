import React, { useState } from 'react'
import { ImagePreviewer } from '../../ui/image-previewer'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code, Display } from '../../ui-doc'


function ArticleDemo() {
    const [ visible, setVisible ] = useState(false)
    const [ current, setCurrent ] = useState(0)
    const images = [
        'https://icons.yunser.com/icons/app.png',
        'https://icons.yunser.com/icons/life.png',
        'https://icons.yunser.com/icons/tool.png',
    ]
    return (
        <div>
            {visible &&
                <ImagePreviewer
                    current={current}
                    images={images}
                    onClose={() => {
                        setVisible(false)
                    }}
                />
            }
            <div>
                {images.map((img, index) => {
                    return (
                        <img src={img} key={index} alt="测试图片" onClick={() => {
                            setCurrent(index)
                            setVisible(true)
                        }}/>
                    )
                })}
                {/* <img src="https://icons.yunser.com/icons/life.png" alt="测试图片"/>
                <img src="https://icons.yunser.com/icons/tool.png" alt="测试图片"/> */}
            </div>
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="图片浏览">
            <H1>ImagePreviewer 图片浏览</H1>

            <H2>Import</H2>

            <Code>{`Import { ImagePreviewer } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>
            {/* <Text>基本的组件。</Text> */}

            <Demo>
                <ArticleDemo />
            </Demo>
        </ComponentPage>
    )
}
