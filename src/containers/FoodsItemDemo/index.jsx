import React, { Component } from 'react'

import foodImg from "../../assets/images/food.png";
import FoodsItem from "../../components/FoodsItem";

export default class FoodsItemDemo extends Component {
  render() {
    return (
      <div>
        <FoodsItem foodImg={foodImg} title="测试" labelTxt="测试标签" />
        <FoodsItem foodImg={foodImg} title="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试" labelTxt="测试标签" />
      </div>
    )
  }
}
