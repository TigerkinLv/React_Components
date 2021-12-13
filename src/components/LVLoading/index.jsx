import React, { Component, Fragment } from 'react'
import { Loading, Mask } from "antd-mobile";
import PropTypes from 'prop-types'

import "./index.less";

export default class LVLoading extends Component {

  static defaultProps = {
    loadingTxt: "加载中",
    showMask: false,
  }
  static propTypes = {
    showLoading: PropTypes.bool.isRequired
  }

  render() {
    const { loadingTxt, showLoading, showMask } = this.props;
    return (
      <Fragment>
        <Mask visible={showLoading && showMask} />
        <div style={{ display: showLoading ? "block" : "none", fontSize: 28 }} className='lodingBox'>
          <Loading color={showMask ? 'white' : 'primary'} />
          <div className='loadingTxt' style={{ color: showMask ? '#fff' : '#666' }}>{loadingTxt}</div>
        </div>
      </Fragment>

    )
  }
}
