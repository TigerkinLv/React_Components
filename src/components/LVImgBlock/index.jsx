import React, { Component, Children, Fragment } from 'react'

import "./index.scss";

export default class LVImgBlock extends Component {
  render() {
    return (
      <div className='LVImgBlock'>
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
    const { itemImg, itemTxt, txtColor, txtSize } = this.props;
    return (
      <div className='item' onClick={this.clickHandle}>
        <img src={itemImg} alt="" className='itemImg' />
        <div className="itemTxt" style={{ color: txtColor, fontSize: txtSize }}>{itemTxt}</div>
      </div>
    )
  }
}


LVImgBlock.Item = Item;
