import React, { Component } from 'react'

import ListItem from '../../components/ListItem'

import rightImg from "../../assets/images/rightArrow.png";
import rightPic from "../../assets/images/right.png";
import "./index.scss";

export default class ListItemDemo extends Component {

  clickHandle = () => {
    console.log("点击了");
  }

  render() {
    return (
      <div className='listBox'>
        <ListItem title="测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题" label1="测试label1" label2="测试label2" rightLabelTxt="右侧的文本" rightImg={rightPic} onClick={this.clickHandle} />
        <ListItem title="测试标题" label1="测试label1" label2="测试label2测试label2测试label2测试label2" rightLabelTxt="右侧本" rightImg={rightImg} rightImgWidth="6px" />
      </div>
    )
  }
}
