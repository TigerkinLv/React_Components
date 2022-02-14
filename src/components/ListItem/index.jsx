import React, { Component } from 'react';

import "./index.scss";

export default class ListItem extends Component {

  clickHandle = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { title, label1, label2, rightLabelTxt, rightImg, rightImgWidth, rightLabelTxtColor, freeStyle } = this.props;
    return <div className='lv_listItem' onClick={this.clickHandle} style={freeStyle}>
      <div className='left'>
        <div className='title'>{title}</div>
        <div className='lableBox'>
          <span className='labelTxt marginR10'>{label1}</span>
          <span className='labelTxt'>{label2}</span>
        </div>
      </div>
      <div className='right'>
        <span className='labelTxt' style={{ color: rightLabelTxtColor ? rightLabelTxtColor : '' }}>{rightLabelTxt}</span>
        <span>
          <img src={rightImg} alt="" className='arrowR' style={{ width: rightImgWidth ? rightImgWidth : '12px' }} />
        </span>
      </div>
    </div>;
  }
}
