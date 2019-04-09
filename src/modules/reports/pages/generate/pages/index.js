import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as reportActionCreators } from "../../../reducer";
import { actionCreators as clientActionCreators } from "../../../../clients/reducer";
import { actionCreators as regionActionCreators } from "../../../../settings/pages/regions/reducer";
import { actionCreators as cityActionCreators } from "../../../../settings/pages/cities/reducer";
import { actionCreators as locationActionCreators } from "../../../../settings/pages/branch-locations/reducer";
import { actionCreators as positionActionCreators } from "../../../../settings/pages/positions/reducer";
import { actionCreators as documentActionCreators } from "../../../../settings/pages/document-types/reducer";
import { actionCreators as statusActionCreators } from "../../../../settings/pages/employee-statuses/reducer";
import { actionCreators as buActionCreators } from "../../../../settings/reducers/businessUnits";
import { actionCreators as brandsActionCreators } from "../../../../settings/reducers/brands";

import Page from "./Page";

const mapStateToProps = state => {
  console.log(state)
  return {
    isAuthenticated: state.auth.isAuthenticated,
    reports: state.report.data,
    templates: state.report.templates,
    meta: state.report.meta,
    downloadLink: state.report.downloadLink,
    links: state.report.links,
    errors: state.report.errors,
    isLoading: state.report.isLoading,
    toast: state.report.toast,
    clients: state.client.data_all,
    brands: state.brand.data,
    business_units: state.businessUnit.data,
    regions: state.region.data_all,
    cities: state.city.data_all,
    locations: state.location.data_all,
    positions: state.position.data_all,
    documentTypes: state.documentType.data,
    statuses: state.employeeStatus.data_all,
    user: state.profile.data
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(reportActionCreators, dispatch),
  ...bindActionCreators(clientActionCreators, dispatch),
  ...bindActionCreators(regionActionCreators, dispatch),
  ...bindActionCreators(cityActionCreators, dispatch),
  ...bindActionCreators(locationActionCreators, dispatch),
  ...bindActionCreators(positionActionCreators, dispatch),
  ...bindActionCreators(documentActionCreators, dispatch),
  ...bindActionCreators(statusActionCreators, dispatch),
  ...bindActionCreators(brandsActionCreators, dispatch),
  ...bindActionCreators(buActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
