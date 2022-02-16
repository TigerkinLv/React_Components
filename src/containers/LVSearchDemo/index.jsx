import React, { Component } from 'react'

import LvSearch from "../../components/LVSearch";

export default class LVSearchDemo extends Component {

  onSearch = (keyword) => {
    console.log(keyword);
  }
  render() {
    return (
      <div>
        <LvSearch placeholder="搜索关键字" onSearch={this.onSearch} />
        <hr />
        <LvSearch placeholder="关键字" border />
      </div >
    )
  }
}
