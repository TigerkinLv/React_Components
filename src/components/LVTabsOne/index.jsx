import React, { Component, Children } from 'react'

import "./index.scss";
import leftImg from "./img/left.png";
import rightImg from "./img/right.png";

export default class LVTabsOne extends Component {


  static defaultProps = {
    tabBorder: false
  }

  tabsClickHandle = (index) => {
    this.props.onClick(index);
  }

  render() {

    const { currentIndex, tabs, tabBorder, tabTitleFreeStyle } = this.props;
    return (
      <div className='lvTabsOne'>
        <div className='tabTitle' style={tabTitleFreeStyle}>
          <img src={leftImg} alt="" className='arrow' />
          {
            tabs.map((item, index) => {
              return <div key={index} className={`title ${currentIndex == index ? 'active' : ''} ${tabBorder ? 'tabBorder' : ''}`} onClick={() => { this.tabsClickHandle(index) }}>{item}</div>
            })
          }
          <img src={rightImg} alt="" className='arrow' />
        </div>
        <div className='tabCont'>
          {
            Children.map(this.props.children, (item, index) => {
              return <div
                key={index}
                style={{ display: currentIndex == index ? "block" : "none" }}>{item}</div>
            })
          }
        </div>
      </div >
    )
  }
}
