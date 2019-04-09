import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as clientActionCreators } from "../../../reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    client_details: state.client.client_details.data,
    brands: state.client.client_details.brands,
    business_units: state.client.client_details.business_units.data,
    business_units_all: state.client.client_details.business_units.data_all,
    toast: state.client.toast,
    isLoading: state.client.isLoading,
    permissions: state.profile.permissions,
    user: state.profile.data
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(clientActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
