import React, { Component } from 'react';

import "./index.scss";

export default class NewsItem extends Component {


  static defaultProps = {
    border: true
  }

  clickHandle = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {

    const { newsImg, newsTitle, newsAuthor, border } = this.props;

    return <div className={`newsItem ${border ? 'border' : ""}`} onClick={this.clickHandle}>
      <div className='left'>
        <img src={newsImg} alt="" />
      </div>
      <div className='right'>
        <div className='title'>{newsTitle}</div>
        <div className='author'>{newsAuthor}</div>
      </div>
    </div>;
  }
}
