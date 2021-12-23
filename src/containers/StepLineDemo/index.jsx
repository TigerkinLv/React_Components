import React, { Component } from 'react'

import StepLine from "@/components/StepLine";

export default class StepLineDemo extends Component {

  state = {
    stepList: ['第一步', '第二步', "第三步"],
  }

  render() {
    const { stepList } = this.state;
    return (
      <div>
        <StepLine steps={stepList} curStep={1} />
      </div>
    )
  }
}
