import auth from "../modules/auth/routes";
import dashboard from "../modules/dashboard/routes";
import members from "../modules/members/routes";
import clients from "../modules/clients/routes";
import settings from "../modules/settings/routes";
import users from "../modules/users/routes";
import reports from "../modules/reports/routes"

export default [
  ...auth,
  ...dashboard,
  ...members,
  ...clients,
  ...settings,
  ...users,
  ...reports
];
