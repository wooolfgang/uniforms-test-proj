import React, { Fragment } from 'react'
import { TimePicker } from 'antd';
import connectField from 'uniforms/connectField';
import moment from 'moment';

const TimeRange = ({ onChange, value: { start, end } }) => (
  <Fragment>
      <TimePicker 
        value={start} 
        onChange={(start) => {
          if (start && end && (start._d > end._d)) return;
          onChange({ start, end })
        }}
        defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
      <TimePicker 
        value={end} 
        onChange={(end) => {
          if (start && end && (start._d > end._d)) return;
          onChange({ start, end: end })
        }} 
        defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} 
      />,
  </Fragment>
)

export default connectField(TimeRange)