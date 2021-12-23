import React, { Component, Fragment } from 'react'

import { Picker } from 'antd-mobile';
import PropTypes from "prop-types";

import "./index.less";
import arrowImg from './images/arrow.png';

export default class LinePicker extends Component {


  state = {
    visible: false,
    value: "请选择",
    // init: true
  }

  static defaultProps = {
    border: true,
    necessary: false,
    titleColor: "#333333",
    valueColor: "#666666",
    // cols: 1,
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    onChoose: PropTypes.func.isRequired
  }


  onOkHandle = (_, extend) => {
    this.setState({
      visible: false,
      value: extend[0].label
    });
    this.props.onChoose(extend[0]);

  }
  dismissPicker = () => {
    this.setState({
      visible: false
    })
  }

  chooseData = () => {
    this.setState({
      visible: true
    })
  }


  render() {
    const { visible, value } = this.state;

    const {
      border,
      necessary,
      title,
      pickTitle,
      valueColor,
      // cols,
      data,
      // defaultValue,
      freeStyle,
    } = this.props;


    let style = { ...{ borderBottom: border ? "1px solid #DCDCDC" : "none" }, ...freeStyle }
    return (
      <Fragment>
        <div className="linePicker" style={style}>
          <div className='left'>
            <span className="necessary" style={{ display: necessary ? "inline-block" : "none" }}>*</span>
            <span className="title">{title}</span>
          </div>
          <div className="right" onClick={this.chooseData}>
            <span className='value' style={{ color: valueColor }}>{value}</span>
            <img src={arrowImg} alt="" />
          </div>
        </div>
        <Picker
          title={pickTitle}
          // cols={cols}
          columns={data}
          visible={visible}
          onConfirm={(v, extend) => this.onOkHandle(v, extend.items)}
          // onSelect={(val, extend) => {
          //   this.onOkHandle(val, extend.items)
          // }}
          onCancel={this.dismissPicker}
        />
      </Fragment>

    )
  }
}
