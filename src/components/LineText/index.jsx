import React, { Component } from 'react'
import PropTypes from "prop-types";

import "./index.less";

export default class LineText extends Component {

  static defaultProps = {
    titleSize: 16,
    titleColor: "#333333",
    contentSize: 16,
    contentColor: "#666666"
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }

  render() {

    let {
      title,
      content,
      titleSize,
      titleColor,
      contentSize,
      contentColor,
      titleBold,
      contentBold,
      border,
      bgColor,
      freeStyle
    } = this.props;
    let style = { ...{ borderBottom: border ? "1px solid #DCDCDC" : "none", backgroundColor: bgColor }, ...freeStyle };
    return (
      <div className="itemLine" style={style}>
        <div className="itemTit" style={{ fontSize: titleSize, color: titleColor, fontWeight: titleBold ? "bold" : "initial" }}>{title}</div>
        <div className="itemCont" style={{ fontSize: contentSize, color: contentColor, fontWeight: contentBold ? "bold" : "initial" }}>{content}</div>
      </div>
    )
  }
}
