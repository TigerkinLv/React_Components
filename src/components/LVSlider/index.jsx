import React, { Component, Children } from 'react';

import "./index.scss";

export default class LVSlider extends Component {
  render() {
    return <div className='lvSlider'>
      {
        Children.map(this.props.children, (item) => {
          return <div className='sliderItem'>
            {item}
          </div>
        })
      }
    </div>;

  }
}
