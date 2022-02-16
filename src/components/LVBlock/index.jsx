import React, { Component, Children, Fragment } from 'react'


import "./index.scss";


export default class LVBlock extends Component {


  static defaultProps = {
    colNumber: 3
  }


  render() {

    const { colNumber } = this.props;

    return (
      <div className={`LVBlock col${colNumber}`}>
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

    const { title, iconImg } = this.props;
    return (
      <div className='lvBlockItem' onClick={this.clickHandle}>
        <img src={iconImg} alt="" className='iconImg' />
        <div className='title'>{title}</div>
      </div>
    )
  }
}


LVBlock.Item = Item;


