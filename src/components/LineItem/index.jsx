import React, { Component } from 'react'
import PropTypes from 'prop-types';


import "./index.scss";
import rightArrow from './images/right-arrow.png';


export default class LineItem extends Component {
  static defaultProps = {
    borderBottom: true,
    borderTop: false
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

    const { title, borderBottom, borderTop } = this.props;
    return (
      <div className="lineItem" style={{ borderBottom: borderBottom ? "1px solid #E8E8E8" : "none", borderTop: borderTop ? "1px solid #E8E8E8" : "none" }} onClick={this.onClickHandle}>
        <div className="left">{title}</div>
        <div className="right">
          <img src={rightArrow} alt="" />
        </div>
      </div>
    )
  }
}
