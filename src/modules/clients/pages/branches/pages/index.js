import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as clientActionCreators } from "../../../reducer";
import { actionCreators as locationsActionCreators } from "../../../../settings/pages/branch-locations/reducer";
import { actionCreators as citiesActionCreators } from "../../../../settings/pages/cities/reducer";
import { actionCreators as regionsActionCreators } from "../../../../settings/pages/regions/reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    client_details: state.client.client_details.data,
    branches: state.client.client_details.branches,
    business_units_all: state.client.client_details.business_units.data_all,
    brands_all: state.client.client_details.brands.data_all,
    branch_locations: state.location.data_all,
    cities: state.city.data_all,
    regions: state.region.data_all,
    toast: state.client.toast,
    isLoading: state.client.isLoading,
    permissions: state.profile.permissions,
    user: state.profile.data
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(clientActionCreators, dispatch),
  ...bindActionCreators(locationsActionCreators, dispatch),
  ...bindActionCreators(citiesActionCreators, dispatch),
  ...bindActionCreators(regionsActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
