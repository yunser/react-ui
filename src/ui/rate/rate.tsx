import React from 'react'
import styled from 'styled-components'

interface RateProps {
    value: number
    onChange?: (value: number) => void
}

interface StarIconProps {
    size: number
    color: string
    onClick?: any // TODO
}

function StarIcon(props: StarIconProps) {
    const { size, color, onClick } = props
    return (
        <div onClick={onClick} style={{
            cursor: 'pointer'
        }}>
            <svg style={{
                width: size,
                height: size
            }} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path fill={color} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
        </div>
    )
}

const Row = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    /* height: 48px;
    width: 300px; */
    border: 1px solid #eee;
`

const Root = styled.div`
    position: relative;
    height: 48px;
    width: 300px;
`

export function Rate(props: RateProps) {
    const { value, onChange } = props
    const stars = [1, 2, 3, 4, 5]
    return (
        <Root>
            <Row>
                <StarIcon size={40} color="#000" />
                <StarIcon size={40} color="#000" />
                <StarIcon size={40} color="#000" />
                <StarIcon size={40} color="#000" />
                <StarIcon size={40} color="#000" />
            </Row>
            <Row>
                {stars.map((item, index: number) => {
                    return (
                        <StarIcon size={40}
                            onClick={() => {
                                onChange && onChange(index + 1)
                            }}
                            color={index < value ? '#ffb400' : '#000'} />
                    )
                })}
            </Row>
        </Root>
    )
}
