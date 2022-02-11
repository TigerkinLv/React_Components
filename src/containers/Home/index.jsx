import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';

import "./index.less";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className='name'>
          <div>一个react 组件库</div>
        </div>
        <div className='componentsBox'>
          <NavLink to="/file-uploader-demo" className="navLink">文件上传组件</NavLink>
          <NavLink to="/line-input-demo" className="navLink">输入框组件</NavLink>
          <NavLink to="/line-picker-demo" className="navLink">选择器组件</NavLink>
          <NavLink to="/lv-loading-demo" className="navLink">加载组件</NavLink>
          <NavLink to="/step-line-demo" className="navLink">步进条组件</NavLink>
          <NavLink to="/line-item-demo" className="navLink">列表条目组件</NavLink>
          <NavLink to="/line-text-demo" className="navLink">文本条目组件</NavLink>
          <NavLink to="/lv-card-demo" className="navLink">卡片组件</NavLink>
          <NavLink to="/lv-list-demo" className="navLink">列表容器组件</NavLink>
          <NavLink to="/lv-item-demo" className="navLink">列表条目组件(带标签)</NavLink>
          <NavLink to="/lv-slider-demo" className="navLink">滑块组件</NavLink>
          <NavLink to="/lv-tabs-demo" className="navLink">tab组件</NavLink>
          <NavLink to="/news-item-demo" className="navLink">新闻组件</NavLink>
          <NavLink to="/lv-tabs-one-demo" className="navLink">tabs组件类型1</NavLink>
        </div>
      </Fragment>
    )
  }
}
