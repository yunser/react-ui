import React from 'react'
import styled from 'styled-components'
import { Link } from '../ui'

export interface App {
    icon?: string
    name: string
    href?: string
    to?: string
    target?: string
}

export interface Group {
    name: string,
    apps: App[]
}

interface AppsProps {
    groups: Group[]
}

const GroupName = styled.div`
    font-size: 24px;
    margin: 16px 0;
`

const AppList = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
`

const AppItemWrap = styled.div`
    width: 200px;
    margin-right: 16px;
    margin-bottom: 16px;
    &:hover {
        background-color: rgba(0, 0, 0, .1);
    }
`

const AppLink = styled(Link)`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 8px;
    box-shadow: 0 1px 6px rgba(0,0,0,.118), 0 1px 4px rgba(0,0,0,.118);
`

const AppImg = styled.img`
    width: 72px;
    height: 72px;
    margin-right: 16px;
    border-radius: 8px;
`

const Name = styled.div`
    font-size: 16px;
    color: #000;
`

export function Apps(props: AppsProps) {
    const { groups } = props

    function AppItem(app: App, index: number) {
        return (
            <AppItemWrap>
                <AppLink to={app.to} href={app.href} target={app.target}>
                    <AppImg src={app.icon} />
                    <Name>{app.name}</Name>
                </AppLink>
            </AppItemWrap>
        )
    }

    function GroupItem(group: Group, index: number) {
        return (
            <div key={index}>
                <GroupName>{group.name}</GroupName>
                <AppList>
                    {group.apps.map(AppItem)}
                </AppList>
            </div>
        )
    }

    return (
        <div>
            {groups.map(GroupItem)}
        </div>
    )
}
