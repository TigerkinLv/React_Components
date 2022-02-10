import React, { Component } from 'react'

import LVSlider from "../../components/LVSlider";
import demoImg from "../../assets/images/demoImg.png";

export default class LVSliderDemo extends Component {
  render() {
    return (
      <div>
        <LVSlider>
          <img src={demoImg} alt="" />
          <img src={demoImg} alt="" />
          <img src={demoImg} alt="" />
        </LVSlider>
      </div>
    )
  }
}
