import React, { Component } from 'react'

import LinePicker from '@/components/LinePicker'

export default class LinePickerDemo extends Component {


  state = {
    testData: [[
      { value: 1, label: "测试1" },
      { value: 2, label: "测试2" },
      { value: 3, label: "测试3" },
      { value: 4, label: "测试4" },
      { value: 5, label: "测试5" },
    ]]
  }

  chooseData = (value) => {
    console.log("选择数据", value);
  }

  render() {

    const { testData } = this.state;

    return (
      <div>
        <LinePicker title="测试title" data={testData} onChoose={this.chooseData} />
      </div>
    )
  }
}
