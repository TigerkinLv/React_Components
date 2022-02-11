import React, { Component } from 'react'

import LVTabsOne from '../../components/LVTabsOne'
import "./index.scss";

export default class LVTabsOneDemo extends Component {

  state = {
    currentIndex: 0,
    tabs: ["测试tab1", "测试tab2"],
  }

  tabChange = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  render() {

    const { currentIndex, tabs } = this.state;
    return (
      <div>
        <LVTabsOne currentIndex={currentIndex} tabs={tabs} onClick={this.tabChange}>
          <div>
            <div>哈哈哈</div>
            <div>哈哈哈</div>
            <div>哈哈哈</div>
            <div>哈哈哈</div>
            <div>哈哈哈</div>
          </div>
          <div>
            <div>呵呵呵呵</div>
            <div>呵呵呵呵</div>
            <div>呵呵呵呵</div>
            <div>呵呵呵呵</div>
            <div>呵呵呵呵</div>
            <div>呵呵呵呵</div>
            <div>呵呵呵呵</div>
          </div>
        </LVTabsOne>
      </div>
    )
  }
}
