import Loadable from "react-loadable";
import LoadingComponent from "../../common/loader";

export default [
  {
    path: "/dashboard/profile",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/details"),
      loading: LoadingComponent
    })
  }
];
