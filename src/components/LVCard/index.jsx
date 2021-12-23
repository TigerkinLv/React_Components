import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';


import "./index.less";
import downArrow from "./images/down-arrow.png";
import upArrow from "./images/up.png";

export default class LVCard extends Component {

  get itemBeginIndex() {
    if (this.props.cardTitFreeStyle) {
      return 1;
    } else {
      return 0;
    }
  }

  state = {
    isFoldState: true,
  }

  static defaultProps = {
    cardTitRightColor: "#2F8EFF",
    isFold: false,
    cardTitFreeStyle: false,
    cardTitShow: true,
    foldNumber: 3
  }

  static propTypes = {
    cardTit: PropTypes.string,
    foldNumber: PropTypes.number
  }

  foldHandler = () => {
    this.setState({
      isFoldState: !this.state.isFoldState
    })
  }

  // 可以折叠的时候的渲染
  foldRender = () => {
    const { isFoldState } = this.state;
    const { foldNumber, cardTitFreeStyle } = this.props;
    return (
      <Fragment>
        {
          isFoldState ?
            this.props.children.slice(this.itemBeginIndex, cardTitFreeStyle ? foldNumber + 1 : foldNumber)
            : this.props.children.slice(this.itemBeginIndex)
        }
        <div className="foldBtn" onClick={this.foldHandler} >
          <span>{isFoldState ? "查看详情" : "收起"}</span>
          <img src={isFoldState ? downArrow : upArrow} alt="" />
        </div>
      </Fragment>
    )
  }
  commonTitRender = () => {
    const {
      cardTit,
      cardTitRight,
      cardTitRightColor,
    } = this.props;
    return (
      <Fragment>
        <div className="titLeft">{cardTit}</div>
        <div className="titRight"
          style={{ color: cardTitRightColor }}
        >{cardTitRight}</div>
      </Fragment>
    )
  }

  render() {
    const {
      isFold,
      cardTitFreeStyle,
      cardTitShow,
      bgIcon
    } = this.props;

    return (
      <div className="lvCard" style={{ backgroundImage: `url(${bgIcon})` }}>
        <div className="cardTit" style={{ display: cardTitShow ? "flex" : "none" }}>
          {
            cardTitFreeStyle ?
              this.props.children.slice(0, 1)
              : this.commonTitRender()
          }
        </div>
        <div className="cardBody">
          {
            isFold ?
              this.foldRender()
              : this.props.children.slice(this.itemBeginIndex)
          }
        </div>
      </div>
    )
  }
}
