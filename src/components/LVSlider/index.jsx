import React, { Component, Children, Fragment } from 'react';

import "./index.scss";

export default class LVSlider extends Component {

  static defaultProps = {
    slideItemHeight: "80px"
  }

  render() {
    const { slideItemHeight } = this.props;
    return <div className='lvSlider'>
      {
        Children.map(this.props.children, (item) => {
          return <div className='sliderItem' style={{ height: slideItemHeight }}>
            {item}
          </div>
        })
      }
    </div>;

  }
}

class Item extends Component {

  clickHandle = () => {
    this.props.onClick && this.props.onClick();
  }
  render() {
    return <div className='slide' onClick={this.clickHandle}>
      {
        Children.map(this.props.children, (item) => {
          return <Fragment>
            {item}
          </Fragment>
        })
      }
    </div>
  }
}

LVSlider.Item = Item;
