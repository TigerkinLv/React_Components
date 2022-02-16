import React, { Component } from 'react'

import LVBlock from "../../components/LVBlock";
import demoImg from "../../assets/images/demo.png";

export default class LVBlockDemo extends Component {
  render() {
    return (
      <div>
        <LVBlock colNumber={4}>
          <LVBlock.Item title="测试" iconImg={demoImg} />
          <LVBlock.Item title="测试" iconImg={demoImg} />
          <LVBlock.Item title="测试" iconImg={demoImg} />
          <LVBlock.Item title="测试" iconImg={demoImg} />
          <LVBlock.Item title="测试" iconImg={demoImg} />
          <LVBlock.Item title="测试" iconImg={demoImg} />
        </LVBlock>
      </div>
    )
  }
}
