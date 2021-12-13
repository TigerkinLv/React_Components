import React, { Component } from 'react'
import PropTypes from 'prop-types';

import "./index.less";

export default class FileUploader extends Component {
  state = {
    uploadedFileName: "",
  }

  static defaultProps = {
    uploadBottonTxt: "上传文件"
  }

  static propTypes = {
    onUpload: PropTypes.func.isRequired
  }

  uploadFileHandle = (event) => {
    const files = [...event.target.files];
    if (files.length === 0) return;
    this.setState({
      uploadedFileName: files[0].name,
    });
    this.props.onUpload(files[0]);
  }

  render() {
    let { uploadedFileName } = this.state;
    let { uploadBottonTxt } = this.props;
    return (
      <div className='fileUploader'>
        <input type="file" hidden onChange={this.uploadFileHandle} ref={c => this.uploadEl = c} />
        <div className="fileBox">
          <div className="fileName" style={{ display: uploadedFileName ? "block" : "none" }}>{uploadedFileName}</div>
          <div className='uploadBtn' onClick={() => this.uploadEl.click()}>{uploadBottonTxt}</div>
        </div>
      </div>
    )
  }
}
