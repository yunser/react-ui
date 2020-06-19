"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePicker = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var moment_1 = __importDefault(require("moment"));
var dialog_1 = require("../dialog");
var year_selector_1 = require("./year-selector");
var month_selector_1 = require("./month-selector");
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: 1px solid #000;\n    width: ", "px;\n    /* height: 400px; */\n"], ["\n    border: 1px solid #000;\n    width: ", "px;\n    /* height: 400px; */\n"])), 48 * 7);
var Header = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: #fff;\n    height: 100px;\n    /* display: flex; */\n    /* align-items: center; */\n    /* flex-direction: row; */\n    /* justify-content: center; */\n    background-color: #f44336;\n    padding: 16px;\n"], ["\n    color: #fff;\n    height: 100px;\n    /* display: flex; */\n    /* align-items: center; */\n    /* flex-direction: row; */\n    /* justify-content: center; */\n    background-color: #f44336;\n    padding: 16px;\n"])));
var Body = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var Row = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n"], ["\n    display: flex;\n    align-items: center;\n"])));
var Cell = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    /* flex-grow: 1; */\n    width: 48px;\n    height: 48px;\n    /* border: 1px solid #000; */\n"], ["\n    /* flex-grow: 1; */\n    width: 48px;\n    height: 48px;\n    /* border: 1px solid #000; */\n"])));
var DateNum = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50px;\n    margin: 4px;\n    /* border: 1px solid #000; */\n    cursor: pointer;\n    &:hover {\n        background: rgba(0, 0, 0, .12);\n    }\n"], ["\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50px;\n    margin: 4px;\n    /* border: 1px solid #000; */\n    cursor: pointer;\n    &:hover {\n        background: rgba(0, 0, 0, .12);\n    }\n"])));
var Week = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50px;\n    margin: 4px;\n"], ["\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50px;\n    margin: 4px;\n"])));
function Panel(props) {
    var value = props.value, onChange = props.onChange;
    var weeks = '一二三四五六日'.split('');
    // let dates = [1, 2, 3]
    var m = moment_1.default(value);
    var year = m.year();
    var month = m.month();
    console.log('哈哈');
    var time = moment_1.default().year(year).month(month);
    var lastDay = time.endOf('month').date();
    var firstweek = time.startOf('month').day() - 1;
    console.log('firstweek', firstweek, lastDay);
    console.log('==time', time.format('YYYY-MM-DD HH:mm:ss'));
    var arr = []; // TODO
    for (var i = 0; i < firstweek; i++) {
        arr.push({});
    }
    for (var i = 1; i <= lastDay; i++) {
        arr.push({
            day: i
        });
    }
    console.log('arr', arr);
    var num = Math.ceil(arr.length / 7) * 7 - arr.length;
    console.log('num', num);
    for (var i = 0; i < num; i++) {
        arr.push({});
    }
    var table = [];
    for (var i = 0; i < arr.length; i++) {
        var row = Math.floor(i / 7);
        if (!table[row]) {
            table[row] = [];
        }
        table[row].push(arr[i]);
    }
    console.log('table', table);
    // this.table = table
    function isSelectedDay(day) {
        return m.date() === day;
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Row, null, weeks.map(function (item) {
            return (react_1.default.createElement(Cell, null,
                react_1.default.createElement(Week, null, item)));
        })),
        table.map(function (row, index) {
            return (react_1.default.createElement(Row, { key: index }, row.map(function (item, index) {
                return (react_1.default.createElement(Cell, { key: index }, !!item.day &&
                    react_1.default.createElement(DateNum, { onClick: function () {
                            onChange && onChange(moment_1.default().year(year).month(month).date(item.day).toDate());
                        }, style: __assign({}, (isSelectedDay(item.day) ? {
                            color: '#fff',
                            background: '#f00'
                        } : {})) }, item.day)));
            })));
        })));
}
var Year = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    font-size: 32px;\n    margin-bottom: 8px;\n    cursor: pointer;\n    text-align: center;\n"], ["\n    font-size: 32px;\n    margin-bottom: 8px;\n    cursor: pointer;\n    text-align: center;\n"])));
var MonthBox = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"])));
var Month = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    font-size: 24px;\n    margin-bottom: 8px;\n    cursor: pointer;\n"], ["\n    font-size: 24px;\n    margin-bottom: 8px;\n    cursor: pointer;\n"])));
function TimePicker(props) {
    var _a = props.format, format = _a === void 0 ? 'YYYY-MM-DD HH:mm:ss' : _a, value = props.value, onChange = props.onChange;
    var _b = react_1.useState(moment_1.default(value || new Date())), m = _b[0], setM = _b[1];
    var _c = react_1.useState('date'), mode = _c[0], setMode = _c[1];
    var _d = react_1.useState(false), pickerVisible = _d[0], setPickerVisible = _d[1];
    var year = m.year();
    var month = m.month();
    var oldTime = moment_1.default(value || new Date()).format(format);
    function nextMonth() {
        setM(moment_1.default(m.add(1, 'months')));
    }
    function prevMonth() {
        setM(moment_1.default(m.add(-1, 'months')));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { onClick: function () {
                setPickerVisible(true);
            } }, oldTime),
        pickerVisible &&
            react_1.default.createElement(dialog_1.Dialog, { onClose: function () {
                    console.log('close?');
                    setPickerVisible(false);
                } },
                react_1.default.createElement(Root, null,
                    react_1.default.createElement(Header, null,
                        react_1.default.createElement(Year, { onClick: function () {
                                setMode('year');
                            } }, year),
                        react_1.default.createElement(MonthBox, null,
                            react_1.default.createElement("button", { onClick: prevMonth }, "prev"),
                            react_1.default.createElement(Month, { onClick: function () {
                                    setMode('month');
                                } },
                                month + 1,
                                " \u6708"),
                            react_1.default.createElement("button", { onClick: nextMonth }, "next"))),
                    react_1.default.createElement(Body, null,
                        mode === 'year' &&
                            react_1.default.createElement(year_selector_1.YearSelector, { value: month, onChange: function (_year) {
                                    setM(moment_1.default().year(_year).month(month).date(m.date()));
                                    setMode('date');
                                } }),
                        mode === 'month' &&
                            react_1.default.createElement(month_selector_1.MonthSelector, { value: month, onChange: function (_month) {
                                    setM(moment_1.default().year(year).month(_month).date(m.date()));
                                    setMode('date');
                                } }),
                        mode === 'date' &&
                            react_1.default.createElement(Panel, { value: m.toDate(), onChange: function (value) {
                                    setM(moment_1.default(value));
                                } }))),
                react_1.default.createElement(dialog_1.Dialog.Actions, null,
                    react_1.default.createElement("button", { onClick: function () {
                            setM(moment_1.default(new Date()));
                        } }, "\u4ECA\u5929"),
                    react_1.default.createElement("button", { onClick: function () {
                            setPickerVisible(false);
                        } }, "\u53D6\u6D88"),
                    react_1.default.createElement("button", { onClick: function () {
                            setPickerVisible(false);
                            onChange && onChange(m.toDate());
                        } }, "\u786E\u8BA4")))));
}
exports.TimePicker = TimePicker;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=time.js.map