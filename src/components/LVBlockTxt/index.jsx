import React, { Component, Children, Fragment } from 'react'

import "./index.scss";

export default class LVBlockTxt extends Component {

  static defaultProps = {
    colNumber: 3
  }

  render() {

    const { colNumber } = this.props;
    return (
      <div className={`lvBlockTxt col${colNumber}`}>
        {
          Children.map(this.props.children, (item) => {
            return <Fragment>{item}</Fragment>
          })
        }
      </div>
    )
  }
}

class Item extends Component {

  clickHandle = () => {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const { title } = this.props;
    return (
      <div className='lvBlockTxtItem' onClick={this.clickHandle}>
        <div className='item'>{title}</div>
      </div>
    )
  }
}

LVBlockTxt.Item = Item;
