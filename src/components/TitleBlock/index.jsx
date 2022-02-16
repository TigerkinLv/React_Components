import React, { Component } from 'react'


import "./index.scss";

export default class TitleBlock extends Component {


  render() {

    const { title } = this.props;

    return (
      <div className='lv_titleBlock'>
        <div className='title'>{title}</div>
        <div className='line'></div>
      </div>
    )
  }
}
