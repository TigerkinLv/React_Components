import React, { Component } from 'react'


import EmptyBox from "../../components/EmptyBox";

export default class EmptyBoxDemo extends Component {
  render() {
    return (
      <div>
        <EmptyBox emptyTxt="暂无内容" />
      </div>
    )
  }
}
