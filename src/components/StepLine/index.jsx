import React, { Component } from 'react'
import PropTypes from 'prop-types';

import "./index.less";

export default class StepLine extends Component {


  static defaultProps = {
  }

  static propTypes = {
    steps: PropTypes.array.isRequired,
    curStep: PropTypes.number.isRequired
  }

  render() {

    let { steps, curStep } = this.props;
    let stepArr = steps.slice(1);

    return (
      <div className='stepLine'>
        <div className='stepItem'>
          <div className="stepNode passStep"></div>
          <div className="stepName">{steps[0]}</div>
        </div>
        {
          stepArr.map((item, index) => {
            return <div className='stepItem' key={index}>
              <div className="gapLine"></div>
              <div className={`stepNode ${index + 1 < curStep ? "passStep" : ""}`}></div>
              <div className="stepName">{item}</div>
            </div>
          })
        }
      </div>
    )
  }
}
