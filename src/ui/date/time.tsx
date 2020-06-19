import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Dialog } from '../dialog'

import { YearSelector } from './year-selector'
import { MonthSelector } from './month-selector'


const Root = styled.div`
    border: 1px solid #000;
    width: ${48 * 7}px;
    /* height: 400px; */
`

const Header = styled.div`
    color: #fff;
    height: 100px;
    /* display: flex; */
    /* align-items: center; */
    /* flex-direction: row; */
    /* justify-content: center; */
    background-color: #f44336;
    padding: 16px;
`

const Body = styled.div`

`

interface TimePickerProps {
    format?: string
    value?: Date,
    onChange?: (value: Date) => void
}

interface PanelProps {
    value?: Date,
    onChange?: (value: Date) => void
}

const Row = styled.div`
    display: flex;
    align-items: center;
`

const Cell = styled.div`
    /* flex-grow: 1; */
    width: 48px;
    height: 48px;
    /* border: 1px solid #000; */
`

const DateNum = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin: 4px;
    /* border: 1px solid #000; */
    cursor: pointer;
    &:hover {
        background: rgba(0, 0, 0, .12);
    }
`

const Week = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin: 4px;
`

function Panel(props: PanelProps) {
    const { value, onChange } = props

    let weeks = '一二三四五六日'.split('')

    // let dates = [1, 2, 3]

    let m = moment(value)

    let year = m.year()
    let month = m.month()
    console.log('哈哈')
    let time = moment().year(year).month(month)
    let lastDay = time.endOf('month').date()
    let firstweek = time.startOf('month').day() - 1
    console.log('firstweek', firstweek, lastDay)
    console.log('==time', time.format('YYYY-MM-DD HH:mm:ss'))
    let arr: any[] = [] // TODO
    for (let i = 0; i < firstweek; i++) {
        arr.push({})
    }
    for (let i = 1 ; i <= lastDay; i++) {
        arr.push({
            day: i
        })
    }
    console.log('arr', arr)
    let num = Math.ceil(arr.length / 7) * 7 - arr.length
    console.log('num', num)
    for (let i = 0; i < num; i++) {
        arr.push({})
    }
    let table: any[] = []
    for (let i = 0; i < arr.length; i++) {
        let row = Math.floor(i / 7)
        if (!table[row]) {
            table[row] = []
        }
        table[row].push(arr[i])
    }
    console.log('table', table)
    // this.table = table

    function isSelectedDay(day: number) {
        return m.date() === day
    }

    return (
        <div>
            <Row>
                {weeks.map(item => {
                    return (
                        <Cell>
                            <Week>{item}</Week>
                        </Cell>
                    )
                })}
            </Row>
            {table.map((row, index) => {
                return (
                    <Row key={index}>
                        {row.map((item: any, index: number) => {
                            return (
                                <Cell key={index}>
                                    {!!item.day &&
                                        <DateNum
                                            onClick={() => {
                                                onChange && onChange(moment().year(year).month(month).date(item.day).toDate())
                                            }}
                                            style={{
                                                ...(isSelectedDay(item.day) ? {
                                                    color: '#fff',
                                                    background: '#f00'

                                                } : {})
                                            }}
                                        >{item.day}</DateNum>
                                    }
                                </Cell>
                            )
                        })}
                    </Row>
                )
            })
            }
        </div>
    )
}

const Year = styled.div`
    font-size: 32px;
    margin-bottom: 8px;
    cursor: pointer;
    text-align: center;
`

const MonthBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Month = styled.div`
    font-size: 24px;
    margin-bottom: 8px;
    cursor: pointer;
`


export function TimePicker(props: TimePickerProps) {
    const { format = 'YYYY-MM-DD HH:mm:ss', value, onChange } = props

    const [ m, setM ] = useState(moment(value || new Date()))
    const [ mode, setMode ] = useState('date')
    const [ pickerVisible, setPickerVisible ] = useState(false)
    let year = m.year()
    let month = m.month()

    let oldTime = moment(value || new Date()).format(format)

    function nextMonth() {
        setM(moment(m.add(1, 'months')))
    }

    function prevMonth() {
        setM(moment(m.add(-1, 'months')))
    }

    return (
        <div>
            <div onClick={() => {
                setPickerVisible(true)
            }}>
                {oldTime}
            </div>
            {pickerVisible &&
                <Dialog
                    onClose={() => {
                        console.log('close?')
                        setPickerVisible(false)
                    }}
                    >
                    <Root>
                        <Header>
                            <Year onClick={() => {
                                setMode('year')
                            }}>{year}</Year>

                            <MonthBox>
                                {/* {timeText} */}
                                <button onClick={prevMonth}>prev</button>
                                <Month onClick={() => {
                                    setMode('month')
                                }}>{month + 1} 月</Month>
                                <button onClick={nextMonth}>next</button>
                            </MonthBox>

                        </Header>
                        <Body>
                            {/* {year} 年 {month + 1} 月 */}
                            {mode === 'year' &&
                                <YearSelector value={month} onChange={_year => {
                                    setM(moment().year(_year).month(month).date(m.date()))
                                    setMode('date')
                                }} />
                            }
                            {mode === 'month' &&
                                <MonthSelector value={month} onChange={_month => {
                                    setM(moment().year(year).month(_month).date(m.date()))
                                    setMode('date')
                                }} />
                            }
                            {mode === 'date' &&
                                <Panel value={m.toDate()} onChange={value => {
                                    setM(moment(value))
                                }} />
                            }

                        </Body>
                    </Root>
                    <Dialog.Actions>
                        <button onClick={() => {
                            setM(moment(new Date()))
                        }}>今天</button>
                        <button onClick={() => {
                            setPickerVisible(false)
                        }}>取消</button>
                        <button onClick={() => {
                            setPickerVisible(false)
                            onChange && onChange(m.toDate())
                        }}>确认</button>
                    </Dialog.Actions>
                </Dialog>
            }
        </div>
    )
}
