import React, { Component } from 'react'


import ListCardWithTag from "../../components/ListCardWithTag";

export default class ListCardWithTagDemo extends Component {
  render() {
    return (
      <div>
        <ListCardWithTag tagTitle="测试title">
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
        </ListCardWithTag>
        <ListCardWithTag tagTitle="测试title1">
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
          <div>naho </div>
        </ListCardWithTag>
      </div>
    )
  }
}
