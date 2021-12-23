### 一个简单card的组件（可配合LVCardItem使用）

### 可以设置的属性
  * cardTit                      设置Card头部的左侧文字， 可选
  * cardTitRight                 设置Card头部右侧文字，可选
  * cardTitRightColor            设置Card头部右侧文字颜色，可选 ，默认值 #2F8EFF
  * isFold                       设置Card是否内容是否可以折叠
  * foldNumber                   可折叠的情况下，不展开时显示的条目数量,未开启cardTitFreeStyle时，数量为n, 开启cardTitFreeStyle 时，数量为n-1
  * cardTitFreeStyle             是否开启Card 头部自定义，当为ture ，前三项设置将失效, 可以这定义title ,类似插槽
  * cardTitShow                   是否显示Card  头，默认ture