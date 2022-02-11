import React, { Component, Children } from 'react'

import "./index.scss";
import leftImg from "./img/left.png";
import rightImg from "./img/right.png";

export default class LVTabsOne extends Component {


  tabsClickHandle = (index) => {
    this.props.onClick(index);
  }

  render() {

    const { currentIndex, tabs } = this.props;
    return (
      <div className='lvTabsOne'>
        <div className='tabTitle'>
          <img src={leftImg} alt="" className='arrow' />
          {
            tabs.map((item, index) => {
              return <div key={index} className={`title ${currentIndex == index ? 'active' : ''}`} onClick={() => { this.tabsClickHandle(index) }}>{item}</div>
            })
          }
          <img src={rightImg} alt="" className='arrow' />
        </div>
        <div>
          {
            Children.map(this.props.children, (item, index) => {
              return <div
                key={index}
                style={{ display: currentIndex == index ? "block" : "none" }}>{item}</div>
            })
          }
        </div>
      </div>
    )
  }
}
