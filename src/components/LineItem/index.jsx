import React, { Component } from 'react'
import PropTypes from 'prop-types';


import "./index.less";
import rightArrow from './images/right-arrow.png';


export default class LineItem extends Component {
  static defaultProps = {
    border: true
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }

  onClickHandle = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.data);
    }
  }

  render() {

    const { title, border } = this.props;
    return (
      <div className="lineItem" style={{ borderBottom: border ? "1px solid #E8E8E8" : "none" }} onClick={this.onClickHandle}>
        <div className="left">{title}</div>
        <div className="right">
          <img src={rightArrow} alt="" />
        </div>
      </div>
    )
  }
}
