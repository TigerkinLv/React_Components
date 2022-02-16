import React, { Component } from 'react'

import "./index.scss";
import emptyImg from "./img/empty.png";

export default class Empty extends Component {

  static defaultProps = {
    emptyImg
  }

  render() {

    const { emptyImg, emptyTxt } = this.props;
    return (
      <div className='lv_emptyBox'>
        <img src={emptyImg} alt="" className='img' />
        <div className='txt'>{emptyTxt}</div>
      </div>
    )
  }
}
