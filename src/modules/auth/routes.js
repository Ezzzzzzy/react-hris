import Loadable from "react-loadable";
import LoadingComponent from "../../commons/loader";

export default [
  {
    path: "/",
    exact: true,
    component: Loadable({
      loader: () => import("./pages/login"),
      loading: LoadingComponent
    })
  }
];
