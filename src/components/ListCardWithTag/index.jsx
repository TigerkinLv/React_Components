import React, { Component, Children, Fragment } from 'react'

import "./index.scss";
import tagImg from "./img/tag.png";

export default class ListCardWithTag extends Component {


  static defaultProps = {
    tagImg,
  }

  render() {
    const { tagImg, tagTitle } = this.props;

    return (
      <div className='lv_listCardWithTag'>
        <div className='tag'>
          <img src={tagImg} alt="" className='tagImg' />
          <span className='tagTxt'>{tagTitle}</span>
        </div>
        {
          Children.map(this.props.children, child => {
            return <Fragment>
              {child}
            </Fragment>
          })
        }
      </div>
    )
  }
}
