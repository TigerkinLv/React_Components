import React, { Component } from 'react'

import LVList from "@/components/LVList";

export default class LVListDemo extends Component {
  render() {
    return (
      <div>
        <LVList>
          <div>列表内容</div>
          <div>列表内容</div>
          <div>列表内容</div>
          <div>列表内容</div>
          <div>列表内容</div>
        </LVList>
      </div>
    )
  }
}
