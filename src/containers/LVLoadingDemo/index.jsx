import React, { Component } from 'react'

import LVLoading from "@/components/LVLoading";

export default class LVLoadingDemo extends Component {
  render() {
    return (
      <div>
        <LVLoading showLoading={true} loadingTxt="加载测试文本" showMask={true} />
      </div >
    )
  }
}
