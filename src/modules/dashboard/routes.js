import Loadable from "react-loadable";
import LoadingComponent from "../../commons/loader";

export default [
  {
    path: "/dashboard",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/index"),
      loading: LoadingComponent
    })
  }
];
