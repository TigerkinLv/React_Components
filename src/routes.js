import Home from "./containers/Home";
import FileUploaderDemo from "./containers/FileUploaderDemo";
import LineInputDemo from "./containers/LineInputDemo";
import LinePickerDemo from "./containers/LinePickerDemo";
import LVLoadingDemo from "./containers/LVLoadingDemo";
import StepLineDemo from "./containers/StepLineDemo";
import LineItemDemo from "./containers/LineItemDemo";
import LineTextDemo from "./containers/LineTextDemo";
import LVCardDemo from "./containers/LVCardDemo";
import LVListDemo from "./containers/LVListDemo";
import ListItemDemo from "./containers/ListItemDemo";
import LVSliderDemo from "./containers/LVSliderDemo";
import LVTabsDemo from "./containers/LVTabsDemo";
import NewsItemDemo from "./containers/NewsItemDemo";
import LVTabsOneDemo from "./containers/LVTabsOneDemo";
import ListCardWithTagDemo from "./containers/ListCardWithTagDemo";
import EmptyBoxDemo from "./containers/EmptyBoxDemo";
import LVBlockDemo from "./containers/LVBlockDemo";
import LVBLockTxtDemo from "./containers/LVBLockTxtDemo";
import LVSearchDemo from "./containers/LVSearchDemo";
import TitleBLockDemo from "./containers/TitleBlockDemo";
import FoodsItemDemo from "./containers/FoodsItemDemo";
import LVCardListDemo from "./containers/LVCardListDemo";
import LVImgBlockDemo from "./containers/LVImgBlockDemo";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "react 组件库",
    }
  },
  {
    path: "/file-uploader-demo",
    component: FileUploaderDemo,
    meta: {
      title: "文件上传组件",
    }
  },
  {
    path: "/line-input-demo",
    component: LineInputDemo,
    meta: {
      title: "输入框组件",
    }
  },
  {
    path: "/line-picker-demo",
    component: LinePickerDemo,
    meta: {
      title: "选择器组件",
    }
  },
  {
    path: "/lv-loading-demo",
    component: LVLoadingDemo,
    meta: {
      title: "加载组件",
    }
  },
  {
    path: "/step-line-demo",
    component: StepLineDemo,
    meta: {
      title: "步进条组件",
    }
  },
  {
    path: "/line-item-demo",
    component: LineItemDemo,
    meta: {
      title: "列表条目组件",
    }
  },
  {
    path: "/line-text-demo",
    component: LineTextDemo,
    meta: {
      title: "文本条目组件",
    }
  },
  {
    path: "/lv-card-demo",
    component: LVCardDemo,
    meta: {
      title: "卡片组件",
    }
  },
  {
    path: "/lv-list-demo",
    component: LVListDemo,
    meta: {
      title: "列表容器组件",
    }
  },
  {
    path: "/list-item-demo",
    component: ListItemDemo,
    meta: {
      title: "列表条目组件(带标签)",
    }
  },
  {
    path: "/lv-slider-demo",
    component: LVSliderDemo,
    meta: {
      title: "滑块组件",
    }
  },
  {
    path: "/lv-tabs-demo",
    component: LVTabsDemo,
    meta: {
      title: "tab组件",
    }
  },
  {
    path: "/news-item-demo",
    component: NewsItemDemo,
    meta: {
      title: "新闻组件",
    }
  },
  {
    path: "/lv-tabs-one-demo",
    component: LVTabsOneDemo,
    meta: {
      title: "tabs组件类型1",
    }
  },
  {
    path: "/list-card-tag-demo",
    component: ListCardWithTagDemo,
    meta: {
      title: "带标签的列表",
    }
  },
  {
    path: "/empty-box-demo",
    component: EmptyBoxDemo,
    meta: {
      title: "空盒子组件",
    }
  },
  {
    path: "/lv-block-demo",
    component: LVBlockDemo,
    meta: {
      title: "块组件",
    }
  },
  {
    path: "/lv-block-txt-demo",
    component: LVBLockTxtDemo,
    meta: {
      title: "块组件(文本)",
    }
  },
  {
    path: "/lv-search-demo",
    component: LVSearchDemo,
    meta: {
      title: "搜索组件",
    }
  },
  {
    path: "/title-block-demo",
    component: TitleBLockDemo,
    meta: {
      title: "标题组件",
    }
  },
  {
    path: "/foods-item-demo",
    component: FoodsItemDemo,
    meta: {
      title: "美食组件",
    }
  },
  {
    path: "/lv-card-list-demo",
    component: LVCardListDemo,
    meta: {
      title: "卡片列表容器组件(图片)",
    }
  },
  {
    path: "/lv-img-block-demo",
    component: LVImgBlockDemo,
    meta: {
      title: "图片块组件",
    }
  },
]

export default routes;