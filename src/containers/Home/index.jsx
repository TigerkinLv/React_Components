import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';

import "./index.less";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className='name'>
          <div>一个react 组件库</div>
          <div>部分组件基于antd-mobile(5.0.0-rc.3)</div>
        </div>
        <div className='componentsBox'>
          <NavLink to="/file-uploader-demo" className="navLink">文件上传组件</NavLink>
          <NavLink to="/line-input-demo" className="navLink">输入框组件</NavLink>
          <NavLink to="/line-picker-demo" className="navLink">选择器组件</NavLink>
          <NavLink to="/lv-loading-demo" className="navLink">加载组件</NavLink>
        </div>
      </Fragment>
    )
  }
}
