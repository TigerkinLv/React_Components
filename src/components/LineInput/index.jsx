import React, { Component } from 'react'
import PropTypes from "prop-types";

import "./index.less";

export default class LineInput extends Component {


  static defaultProps = {
    border: true,
    valueColor: "#666666",
    readonly: false,
    placeholder: "请输入",
    inputType: "text"
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  onChangeHandle = (e) => {
    let inputValue = e.target.value.replace(/^\s+|\s+$/g, "");

    this.props.onChange(inputValue);
  }

  render() {

    const {
      placeholder,
      title,
      border,
      valueColor,
      necessary,
      freeStyle,
      readonly,
      inputType,
      maxlength,
      defaultValue
    } = this.props;
    let style = {
      ...{ borderBottom: border ? "1px solid #DCDCDC" : "none" }, ...freeStyle
    }

    return (
      <div className="lineInput" style={style} >
        <div className='left'>
          <span className="necessary" style={{ display: necessary ? "block" : "none" }}>*</span>
          <span className="title">{title}</span>
        </div>
        <div className="right">
          <input type={inputType}
            readOnly={readonly}
            placeholder={placeholder}
            maxLength={maxlength}
            className="input"
            defaultValue={defaultValue}
            onChange={this.onChangeHandle}
            style={{ color: valueColor, textAlign: title ? "right" : "left" }} />
        </div>
      </div>
    )
  }
}
