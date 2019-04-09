import Loadable from "react-loadable";
import LoadingComponent from "../../commons/loader";

export default [
  {
    path: "/reports",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/generate/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/reports/templates",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/template/pages/index"),
      loading: LoadingComponent
    })
  }
];
