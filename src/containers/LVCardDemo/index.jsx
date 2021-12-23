import React, { Component } from 'react'

import LVCard from "@/components/LVCard";
import demoBgImg from "@/assets/images/demoBg.png";

export default class LVCardDemo extends Component {
  render() {
    return (
      <div>
        <LVCard cardTit="测试卡片标题" cardTitRight="测试卡片标识">
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
        </LVCard>
        <LVCard cardTit="测试卡片标题" cardTitRight="测试卡片标识" cardTitShow={false}>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
        </LVCard>
        <LVCard cardTit="测试卡片标题" cardTitRight="测试卡片标识" cardTitShow={false} isFold foldNumber={3}>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
        </LVCard>
        <LVCard cardTit="测试卡片标题" cardTitRight="测试卡片标识" isFold foldNumber={2}>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
        </LVCard>
        <LVCard cardTitFreeStyle={true} isFold foldNumber={2}>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
        </LVCard>
        <LVCard cardTit="测试卡片标题" cardTitRight="测试卡片标识" cardTitShow={false} bgIcon={demoBgImg}>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
        </LVCard>
        <LVCard cardTit="测试卡片标题" cardTitRight="测试卡片标识" bgIcon={demoBgImg}>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
          <div>你好</div>
        </LVCard>
      </div>
    )
  }
}
