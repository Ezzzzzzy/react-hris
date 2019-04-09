import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as locationActionCreators } from "../reducer";
import { actionCreators as cityActionCreators } from "../../cities/reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  locations: state.location.data,
  cities: state.city.data,
  meta: state.location.meta,
  isLoading: state.location.isLoading,
  user: state.profile.data
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(locationActionCreators, dispatch),
  ...bindActionCreators(cityActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
