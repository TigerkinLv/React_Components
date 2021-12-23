import React, { Component } from 'react'

import LineItem from "@/components/LineItem";

export default class LineItemDemo extends Component {


  clickHandle = (value) => {
    console.log("点击的条目", value);
  }

  render() {
    return (
      <div>
        <LineItem title="测试条目啊啊啊" onClick={this.clickHandle} data={1} />
        <LineItem title="测试条目啊啊啊1" onClick={this.clickHandle} data={2} />
      </div>
    )
  }
}
