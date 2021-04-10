import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ArticleProps {
    children: ReactNode
    style?: any
}

const ArticleWrap = styled.article`
    font-size: 14px;
    blockquote {
        border-left: 4px solid #aaa;
        /* margin: 0; */
        padding: 8px 0 8px 16px;
        margin-bottom: 16px;
        font-size: 16px;
        /* padding-top: 4px;
        padding-top: 4px; */
    }
    a {
        font-size: 16px;
        color: #0366d6;
        &:hover {
            color: #2364ad;
            text-decoration: underline;
        }
    }
    h1 {
        margin-top: 20px;
        margin-bottom: 15px;
        padding-bottom: 5px;
        font-size: 30px;
    }
    h2 {
        margin-top: 20px;
        margin-bottom: 15px;
        padding-bottom: 5px;
        font-size: 25px;
    }
    h3 {
        font-size: 24px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    h4 {
        font-size: 20px;
    }
    h5,
    h6 {
        font-size: 20px;
    }
    p {
        line-height: 1.7;
        margin-bottom: 15px;
        font-size: 16px;
    }
    img {
        margin-bottom: 16px;
        max-width: 100%;
    }
    ul {
        list-style: disc;
    }
    ol {
        list-style: decimal;
    }
    li {
        line-height: 1.6;
        margin-bottom: 8px;
        list-style-type: inherit;
    }
    ul,
    ol {
        padding-left: 16px;
        margin-bottom: 16px;
        ul,
        ol {
            margin-top: 8px;
            padding-left: 40px;
        }
    }
    ul ul,
    ol ul {
        list-style-type: circle;
    }
    ol ol ul,
    ol ul ul,
    ul ol ul,
    ul ul ul {
        list-style-type: square;
    }
    table {
        max-width: 100%;
        margin-bottom: 16px;
        th,
        td {
            padding: 8px 16px;
            line-height: 1.42857143;
            vertical-align: top;
            border: 1px solid #ddd;
        }
    }
    code {
        margin-left: 4px;
        margin-right: 4px;
        background: #eee;
        border-radius: 4px;
        padding: 4px 8px;
    }
    & > code {
        display: block;
        color: #fff;
        background: #272c34;
        margin-bottom: 16px;
        /* border: 1px solid #eee; */
        border-radius: 4px;
        font-size: 16px;
        /* margin: 0 4px; */
        padding: 16px;
    }
    /* & > code {
        margin-bottom: 16px;
    } */
`

export function Article(props: ArticleProps) {
    const { children, style } = props
    return (
        <ArticleWrap style={style}>{children}</ArticleWrap>
    )
}
