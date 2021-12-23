import React, { Component } from 'react'

import LineText from "@/components/LineText";


export default class LineTextDemo extends Component {
  render() {
    return (
      <div>
        <LineText title="测试标题" content="测试测试测试内容测试测试测试内容测试测试测试内容测试测试测试内容测试测试测试内容" border />
        <LineText title="测试标题" content="测试内容" />
        <LineText title="测试标题" content="测试内容测试内容" titleBold />
      </div >
    )
  }
}
