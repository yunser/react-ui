import React, { useState } from 'react'
import styled from 'styled-components'

const Root = styled.div`
    display: inline-block;
`

const MyInput = styled.input<TextInputProps>`
    display: inline-block;
    width: 100%;
    outline: none;
    height: 32px;
    line-height: 32px;
    border-top: none;
    border-left: none;
    border-right: none;
`

export interface InputProps {
    className?: string
    defaultValue?: string
    placeholder?: string
    type?: string
    value: string | number
    onChange?: (value: string) => void
}

export interface TextInputProps extends InputProps {}

export function Input(props: InputProps) {

    const { className, defaultValue, placeholder, type= 'text', value, onChange } = props

    const [ isFocus, setIsFocus ] = useState(false)

    function handlerChange(e: any) { // TODO
        onChange && onChange(e.target.value)
    }

    function handlerFocus() {
        setIsFocus(true)
    }

    function handlerBlur() {
        setIsFocus(false)
    }
    
    return (
        <Root>
            <MyInput
                className={className}
                type={type}
                placeholder={placeholder}
                onFocus={handlerFocus}
                onBlur={handlerBlur}
                defaultValue={defaultValue} value={value} onChange={handlerChange}
                style={{
                    borderBottom: isFocus ? '1px solid #4285f4' : '1px solid rgba(0, 0, 0, .4)',
                }}
            />
        </Root>
    )

}

export interface NumberInputProps {
    className?: string
    defaultValue?: string
    placeholder?: string
    type?: string
    value: string | number
    onChange?: (value: number | undefined) => void
}

export function NumberInput(props: NumberInputProps) {

    const { className, defaultValue, placeholder, value, onChange } = props

    const [ isFocus, setIsFocus ] = useState(false)

    function handlerChange(e: any) { // TODO
        onChange && onChange(e.target.value ? parseFloat(e.target.value) : undefined)
    }

    function handlerFocus() {
        setIsFocus(true)
    }

    function handlerBlur() {
        setIsFocus(false)
    }
    
    return (
        <Root>
            <MyInput
                className={className}
                type="number"
                placeholder={placeholder}
                onFocus={handlerFocus}
                onBlur={handlerBlur}
                defaultValue={defaultValue} value={value} onChange={handlerChange}
                style={{
                    borderBottom: isFocus ? '1px solid #4285f4' : '1px solid rgba(0, 0, 0, .4)',
                }}
            />
        </Root>
    )
}

export const TextInput = Input
