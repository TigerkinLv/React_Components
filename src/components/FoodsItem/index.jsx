import React, { Component } from 'react'

import "./index.scss";

export default class FoodsItem extends Component {


  static defaultProps = {
    borderBottom: true
  }

  clickHandle = () => {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const { foodImg, title, labelTxt, borderBottom } = this.props;

    return (
      <div className='FoodsItem' style={{ borderBottom: borderBottom ? "1px solid #e8e8e8" : "none" }} onClick={this.clickHandle}>
        <div className='left'>
          <div className='title'>{title}</div>
          <div className='label'>{labelTxt}</div>
        </div>
        <div className='right'>
          <img src={foodImg} alt="" />
        </div>
      </div>
    )
  }
}
