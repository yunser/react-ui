import React from 'react'
import styled from 'styled-components'
import { Input, NumberInput } from '../input';
const Color = require('color');

const Panel = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    background: #000;
    border: 1px solid #000;
`

const Box1 = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
`

const Box2 = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
`

const HueRoot = styled.div`
    position: relative;
    width: 160px;
    height: 12px;
`

const HueBg = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);
`

function HueSlider() {
    return (
        <HueRoot>
            <HueBg />

        </HueRoot>
    )
}

interface HexColor {
    hex: string
    opacity: number
}

interface ColorPickerProps {
    value?: HexColor
    onChange?: (value: HexColor) => void
}

const HexInput = styled(Input)`
    width: 160px;
`

const OpacityInput = styled(NumberInput)`
    width: 80px;
`

const Dot = styled.div`
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    background: #000;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center;
`

export function ColorPicker(props: ColorPickerProps) {

    const { value, onChange } = props

    const { hex, opacity } = value || {
        hex: '#000000',
        opacity: 100
    }

    let color
    try {
        color = Color(hex)
    } catch (err) {
        console.log('e', err)
        color = Color('#000000')
    }

    const rgbArr = color.rgb().array()

    console.log('color', color)
    console.log('color hsv', color.hsv())
    // console.log('rgb', rgb)

    const hexNoSymbol = hex.replace('#', '')

    let rgba = `rgba(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]}, ${opacity / 100})`

    return (
        <div>
            <Dot style={{ backgroundColor: rgba }} />
            # 
            <HexInput value={hexNoSymbol} onChange={value => {
                onChange && onChange({
                    hex: '#' + value,
                    opacity,
                })
            }} />
            <OpacityInput value={opacity} onChange={value => {
                onChange && onChange({
                    hex,
                    opacity: value || 100,
                })
            }} />

            <div>
                Hex: {hex}
            </div>
            <div>
                <div>
                    R: {rgbArr[0]}
                    G: {rgbArr[1]}
                    B: {rgbArr[2]}
                </div>
            </div>
            --
            HSV
            208、86、24
            <HueSlider />
            <Panel style={{
                background: hex,
            }}>
                <Box1 />
                <Box2 />
            </Panel>
        </div>
    )
}
