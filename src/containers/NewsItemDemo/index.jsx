import React, { Component } from 'react'

import NewsItem from '../../components/NewsItem'
import demoImg from "../../assets/images/demoImg.png";

export default class NewsItemDemo extends Component {

  toNewsDetail = () => {
    console.log("新闻详情页");
  }
  render() {
    return (
      <div>
        <NewsItem
          newsImg={demoImg}
          newsTitle="测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题"
          newsAuthor="测试来源"
          onClick={this.toNewsDetail} />
      </div>
    )
  }
}
