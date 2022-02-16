import React, { Component } from 'react'

import "./index.scss";
import searchImg from "./img/search.png";

export default class LVSearch extends Component {


  static defaultProps = {
    placeholder: "请输入搜索关键字",
    bgColor: "#fff"
  }


  keyDownHandle = (e) => {
    if (e.keyCode == 13) {
      this.props.onSearch && this.props.onSearch(e.target.value);
    }
  }
  clickHandle = () => {
    this.props.onClick && this.props.onClick();
  }


  render() {

    const { placeholder, bgColor, border } = this.props;

    return (
      <div className='lvSearch' style={{ backgroundColor: bgColor ? bgColor : "", border: border ? "1px solid #ccc" : "" }} onClick={this.clickHandle}>
        <input type="text" className='input' placeholder={placeholder} onKeyDown={e => this.keyDownHandle(e)} />
        <img src={searchImg} alt="" className='searchImg' />
      </div>
    )
  }
}
