import React, { Component } from 'react'

import FileUploader from "@/components/FileUploader";


export default class FileUploaderDemo extends Component {

  uploadedHandle = (file) => {
    console.log("选择的文件对象", file);
  }

  render() {
    return (
      <div>
        <FileUploader onUpload={this.uploadedHandle} />
      </div>
    )
  }
}
