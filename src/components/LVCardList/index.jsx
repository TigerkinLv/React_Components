import React, { Component, Children, Fragment } from 'react'

import "./index.scss"

export default class LVCardList extends Component {

  static defaultProps = {
    cardTitleLeftTxtColor: "#fff",
    cardTitleLeftTxtSize: "21px",
    cardTitleRightTxtColor: "#fff",
    cardTitleLeftTxtSize: "16px"
  }

  rightClick = () => {
    this.props.onRightClick && this.props.onRightClick();
  }

  render() {

    const {
      cardTitleLeftTxt,
      cardTitleLeftTxtColor,
      cardTitleLeftTxtSize,
      cardTitleRightTxt,
      cardTitleRightTxtColor,
      cardTitleRightTxtSize,
      cardTitleImg
    } = this.props;
    return (
      <div className='LVCardList'>
        <div className='cardTitle'>
          <img src={cardTitleImg} alt="" className='img' />
          <div className='titleLeft'
            style={{ color: cardTitleLeftTxtColor, fontSize: cardTitleLeftTxtSize }}>{cardTitleLeftTxt}
          </div>
          <div className='titleRight'
            style={{ color: cardTitleRightTxtColor, fontSize: cardTitleRightTxtSize }}
            onClick={this.rightClick}
          >{cardTitleRightTxt}</div>
        </div>
        <div className='cardCont'>
          {
            Children.map(this.props.children, (item) => {
              return <Fragment>{item}</Fragment>
            })
          }
        </div>

      </div>
    )
  }
}

