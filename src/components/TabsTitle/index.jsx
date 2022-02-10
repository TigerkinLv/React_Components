/**
 * author：liwei
 * 说明：此组件融入tabs组件中
 */

import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";

import "./index.scss";

export default class TabsTitle extends Component {

  static defaultProps = {
    bgColor: "#fff",
    beanColor: "rgba(63,135,243,0.5)",// 必须是rgba 颜色值
    titleColor: "#333"
  }

  clickHandle = () => {
    this.props.onClick(this.props.code);
  }

  render() {
    const { title, beanColor, bgColor, titleColor } = this.props;
    let tmpArr = beanColor.split(",");
    let shadowOpacity = tmpArr[3].substr(0, tmpArr[3].length - 1) * 0.3;
    tmpArr[3] = shadowOpacity;
    let beanColorShadow = tmpArr.join(",");
    let beanBoxShadowL = `-3px 0 ${beanColorShadow}`;
    let beanBoxShadowR = `3px 0 ${beanColorShadow}`;

    return <Fragment>
      <div className='tabsTitle' style={{ backgroundColor: bgColor }} onClick={this.clickHandle}>
        <span className='leftBean' style={{ backgroundColor: beanColor, boxShadow: beanBoxShadowL }}></span>
        <span style={{ color: titleColor }} className='title'>{title}</span>
        <span className='rightBean' style={{ backgroundColor: beanColor, boxShadow: beanBoxShadowR }}></span>
      </div>
    </Fragment>;
  }
}
