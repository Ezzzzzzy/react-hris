import Loadable from "react-loadable";
import LoadingComponent from "../../commons/loader";

export default [
  {
    path: "/clients",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/clients/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/client/:id/branches",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/branches/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/client/:id/business-units",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/business-units/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/client/:id/brands",
    exact: true,
    authL: false,
    component: Loadable({
      loader: () => import("./pages/brands/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/client/:id/members",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/members/pages/index"),
      loading: LoadingComponent
    })
  },
  {
    path: "/client/:id/brand/:brand_id",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/brand-members/pages/index"),
      loading: LoadingComponent
    })
  }
];
