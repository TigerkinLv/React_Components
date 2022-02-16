import React, { Component } from 'react'


import LVBlockTxt from "../../components/LVBlockTxt";

export default class LVBLockTxtDemo extends Component {
  render() {
    return (
      <div>
        <LVBlockTxt>
          <LVBlockTxt.Item title="测试" />
          <LVBlockTxt.Item title="测试" />
          <LVBlockTxt.Item title="测试" />
          <LVBlockTxt.Item title="测试" />
        </LVBlockTxt>
      </div>
    )
  }
}
