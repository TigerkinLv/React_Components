import React, { Component } from 'react'

import LineInput from "@/components/LineInput";

export default class LineInputDemo extends Component {

  inputHandle = (value) => {
    console.log("输入的值", value);
  }

  render() {
    return (
      <div>
        <LineInput title="标题" onChange={this.inputHandle} />
      </div>
    )
  }
}
