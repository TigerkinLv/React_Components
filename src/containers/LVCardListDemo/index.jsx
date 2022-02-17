import React, { Component } from 'react'

import LVCardList from "../../components/LVCardList";
import LineItem from "../../components/LineItem";
import demoImg from "../../assets/images/demo3.png";

export default class LVCardListDemo extends Component {

  toMore = () => {
    console.log("查看更多");
  }

  render() {

    return (
      <div>
        <LVCardList
          cardTitleLeftTxt="测试标题"
          cardTitleImg={demoImg}
          cardTitleRightTxt="查看更多 >>"
          onRightClick={this.toMore}>
          <LineItem title="测试" />
          <LineItem title="测试" />
          <LineItem title="测试" />
        </LVCardList>
      </div >
    )
  }
}
