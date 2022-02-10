import React, { Component, Children, Fragment } from 'react';


import "./index.scss";


export default class LVList extends Component {


  static defaultProps = {
    showCount: 3
  }

  state = {
    childrenCount: 0,
    showCountNumber: 0,
  }

  showMore = () => {
    // 如果是异步的，此处要重新获取子元素的数量
    this.setState({
      showCountNumber: Children.count(this.props.children),
      childrenCount: Children.count(this.props.children)
    })
  }

  componentDidMount() {
    this.setState({
      childrenCount: Children.count(this.props.children),//  获取子组件的个数, 注意：当是异步获取的（异步渲染时），不能获得到子组件的个数。
      showCountNumber: this.props.showCount // 设置显示的个数
    })
  }

  render() {
    const { showCountNumber, childrenCount } = this.state;

    return <div className='lvList'>
      {
        Children.map(this.props.children, (item, index) => {
          return <div className={`${index + 1 <= showCountNumber ? '' : 'hide'}`}>{item}</div>
        })
      }
      <div className={`showMore ${childrenCount == showCountNumber ? 'hide' : ''}`} onClick={this.showMore}>查看更多</div>
    </div>;
  }
}
