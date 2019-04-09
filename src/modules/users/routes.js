import Loadable from "react-loadable";
import LoadingComponent from "../../commons/loader";

export default [
  {
    path: "/profile/:id",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/users/pages/profile"),
      loading: LoadingComponent
    })
  },
  {
    path: "/users",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/users/pages/list"),
      loading: LoadingComponent
    })
  },
  {
    path: "/users/edit/:id",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/users/pages/edit"),
      loading: LoadingComponent
    })
  },
  {
    path: "/user-groups/create",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/groups/pages/create"),
      loading: LoadingComponent
    })
  },
  {
    path: "/user-groups/:id/edit",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/groups/pages/edit"),
      loading: LoadingComponent
    })
  },
  {
    path: "/user-groups",
    exact: true,
    authL: true,
    component: Loadable({
      loader: () => import("./pages/groups/pages/list"),
      loading: LoadingComponent
    })
  }
];
