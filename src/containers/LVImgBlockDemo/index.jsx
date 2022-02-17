import React, { Component } from 'react'

import LVImgBlock from "../../components/LVImgBlock";
import demo11Img from "../../assets/images/demo11.png";

export default class LVImgBlockDemo extends Component {
  clickHandle = () => {
    console.log("点击");
  }

  render() {
    return (
      <div>
        <LVImgBlock>
          <LVImgBlock.Item
            itemImg={demo11Img}
            itemTxt="测试"
            txtColor='#2280D4'
            onClick={this.clickHandle}
          />
          <LVImgBlock.Item
            itemImg={demo11Img}
            itemTxt="测试"
            txtColor='#2280D4'
            onClick={this.clickHandle}
          />
          <LVImgBlock.Item
            itemImg={demo11Img}
            itemTxt="测试"
            txtColor='#2280D4'
            onClick={this.clickHandle}
          />
          <LVImgBlock.Item
            itemImg={demo11Img}
            itemTxt="测试"
            txtColor='#2280D4'
            onClick={this.clickHandle}
          />
        </LVImgBlock>
      </div >
    )
  }
}
