import Loadable from "react-loadable";
import LoadingComponent from "../../commons/loader";

export default [
  {
    path: "/settings/employee-statuses",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/employee-statuses/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/settings/document-types",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/document-types/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/settings/leaving-reasons",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/leaving-reasons/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/settings/regions",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/regions/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/settings/cities",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/cities/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/settings/branch-locations",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/branch-locations/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/settings/positions",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/positions/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/settings/tenure-ranges",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/tenure-ranges/pages/index"),
      loading: LoadingComponent
    })
  }
];
