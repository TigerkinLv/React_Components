import React, { Component } from 'react'

import LVTabs from '../../components/LVTabs';

export default class LVTabsDemo extends Component {

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
        <LVTabs currentIndex={currentIndex} tabs={tabs} onClick={this.tabChange}>
          <div>tabs1得内容</div>
          <div>tabs2得内容</div>
        </LVTabs>
      </div>
    )
  }
}
