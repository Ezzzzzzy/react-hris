import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as cityActionCreators } from "../reducer";
import { actionCreators as regionActionCreators } from "../../regions/reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  cities: state.city.data,
  regions: state.region.data_all,
  meta: state.city.meta,
  isLoading: state.city.isLoading,
  user: state.profile.data
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cityActionCreators, dispatch),
  ...bindActionCreators(regionActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
