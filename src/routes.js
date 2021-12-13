import Home from "./containers/Home";
import FileUploaderDemo from "./containers/FileUploaderDemo";
import LineInputDemo from "./containers/LineInputDemo";
import LinePickerDemo from "./containers/LinePickerDemo";
import LVLoadingDemo from "./containers/LVLoadingDemo";


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
]

export default routes;