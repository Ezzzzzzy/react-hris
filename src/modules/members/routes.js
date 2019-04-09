import Loadable from "react-loadable";
import LoadingComponent from "../../commons/loader";

export default [
  {
    path: "/members",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/list"),
      loading: LoadingComponent
    })
  },
  {
    path: "/members/create",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/create"),
      loading: LoadingComponent
    })
  },
  {
    path: "/members/:id/edit",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/update"),
      loading: LoadingComponent
    })
  },
  {
    path: "/members/:id",
    exact: true,
    authL: false,
    component: Loadable({
      loader: () => import("./pages/dashboard"),
      loading: LoadingComponent
    })
  },
  {
    path: "/members/:id/deployment-details",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/deployment"),
      loading: LoadingComponent
    })
  },
  {
    path: "/members/:id/complete-profile",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/profile"),
      loading: LoadingComponent
    })
  }
];
