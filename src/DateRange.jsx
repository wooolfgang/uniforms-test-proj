import React from 'react'
import { DatePicker } from 'antd';
import connectField from 'uniforms/connectField';

const { RangePicker } = DatePicker;

const DateRange = ({ onChange }) => (
  <RangePicker 
    onChange={([ start, end ]) => onChange({ start, end })} />
)

export default connectField(DateRange)