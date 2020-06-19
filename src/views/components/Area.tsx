import React, { useState } from 'react'
import { Select } from '../../ui'
import { ComponentPage } from '../../components'
import { H1, H2, Text, Demo, Code } from '../../ui-doc'
const areaData = require('../../ui/area/ChinaPartNew')

console.log('areaData', areaData)

interface AreaItem {
    name: string
    code: string
    children?: AreaItem[]
}

function AreaDemo() {

    // const 

    const provinces: AreaItem[] = areaData

    // function onProvinceChange(e: any) { // TODO
    //     console.log('onProvinceChange', e.target.value)
    // }

    // const cities: any[] = provinces[0].children

    // const [ areas, setAreas ] = useState(['440000', '440100', '4401'])
    const [ areas, setAreas ] = useState(['440000'])
    
    let provinceCode = areas[0]
    let cityCode = areas[1]
    let countyCode = areas[2]
    if (provinceCode) {

    }
    let cities: AreaItem[] = []
    let province = provinces.find(item => item.code === provinceCode)
    if (province) {
        cities = province.children || []
    }

    let city = cities.find(item => item.code === cityCode)
    // .find(province => province.code === cityCode)
    let counties: AreaItem[] = []
    if (city) {
        counties = city.children || []
    }

    console.log('provinces', provinceCode, provinces)
    console.log('city', cityCode, cities)

    return (
        <div>
            <Select value={provinceCode} onChange={value => {
                console.log('概览', value)
                // setArea(value)
                setAreas([value, cityCode, countyCode])
            }}>
                {provinces.map(item => {
                    return (
                        <Select.Item key={item.code} value={item.code}>{item.name}</Select.Item>
                    )
                })}
            </Select>
            |
            {cities.length > 0 &&
                <Select value={cityCode} onChange={value => {
                    console.log('概览', value)
                    setAreas([provinceCode, value, countyCode])
                }}>
                    {cities.map(item => {
                        return (
                            <Select.Item key={item.code} value={item.code}>{item.name}</Select.Item>
                        )
                    })}
                </Select>
            }
            |
            {counties.length > 0 &&
                <Select value={countyCode} onChange={value => {
                    console.log('概览', value)
                    setAreas([provinceCode, cityCode, value])
                }}>
                    {counties.map(item => {
                        return (
                            <Select.Item key={item.code} value={item.code}>{item.name}</Select.Item>
                        )
                    })}
                </Select>
            }

            {/* <select onChange={onProvinceChange}>
                {provinces.map(item => {
                    return (
                        <option value={item.value}>{item.label}</option>
                        // <div>
                        // </div>
                    )
                })
                    
                }
            </select> */}
            {/* 123 */}
        </div>
    )
}

export default () => {

    return (
        <ComponentPage title="进度条">
            <H1>Progress 进度条</H1>
            <Text>xxx</Text>

            <H2>Import</H2>

            <Code>{`Import { Skeleton } from '@yunser/react-ui/core'`}
            </Code>

            <H2>基本</H2>

            <Demo>
                <AreaDemo />
            </Demo>
        </ComponentPage>
    )
}
