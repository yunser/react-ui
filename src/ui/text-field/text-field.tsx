import React from 'react'
import styled from 'styled-components'
import { TextInput, NumberInput } from '../input'
import { TextInputProps, NumberInputProps } from '../input'

interface TextFieldProps extends TextInputProps {
    label: string
}

interface NumberFieldProps extends NumberInputProps {
    label: string
}

const Root = styled.div`
    max-width: 256px;
`

const Label = styled.div`
    margin-bottom: 16px;
    color: #999;
`

export function TextField(props: TextFieldProps) {
    const { label, ...resProps } = props
    return (
        <Root>
            <Label>{label}</Label>
            <TextInput {...resProps} />
        </Root>
    )
}

export function NumberField(props: NumberFieldProps) {
    const { label, ...resProps } = props
    return (
        <Root>
            <Label>{label}</Label>
            <NumberInput {...resProps} />
        </Root>
    )
}
