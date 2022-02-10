import React, { Component, Children } from 'react';

import "./index.scss";

export default class LVTabs extends Component {

  tabsClickHandle = (index) => {
    this.props.onClick(index);
  }

  render() {
    const { tabs, currentIndex } = this.props;

    return <div className='lvTabs'>
      <div className='titleBox'>
        {
          tabs.map((item, index) => {
            return <div className={`tabsTitle ${currentIndex == index ? 'active' : ''}`} key={index} onClick={() => { this.tabsClickHandle(index) }}>
              <span className='leftBean'></span>
              <span className='title'>{item}</span>
              <span className='rightBean' ></span>
            </div>
          })
        }
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

    </div>;
  }
}
