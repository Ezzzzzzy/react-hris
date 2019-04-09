import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import LoadingComponent from "./commons/loader";
// import Footer from "./commons/Footer";
import { Layout, Menu, Icon, Modal, Avatar, Spin } from "antd";
import { purgeStoredState } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { deleteToken } from "./utils/token";
import { actionCreators as authActionCreators } from "./modules/auth/reducer";

import "./App.css";
import psLogo from "./images/peopleserve_logo_menu.png";

const { Content, Header } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = { logoutVisible: false, isLoading: false };

  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    // user: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  showModal = () => {
    this.setState({
      logoutVisible: true
    });
  };

  onOk = () => {
    const persistConfig = {
      key: "peoppleserve",
      storage
    };

    const authPersistConfig = {
      key: "peopleserve_auth",
      storage
    };

    this.setState({ isLoading: true });
    this.props.logout(this.props.profile.id);
    deleteToken();
    purgeStoredState(persistConfig);
    purgeStoredState(authPersistConfig);
  };

  hideModal = () => {
    this.setState({
      logoutVisible: false
    });
  };

  renderPrivatePage() {
    const { profile } = this.props;
    const loading = !Object.keys(profile ? profile : {}).length;
    return (
      <Layout style={{ minHeight: "100vh" }} className="dashboard">
        <Header style={{ width: "100%", position: "fixed", zIndex: 2 }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/members"]}
            selectedKeys={[window.location.pathname]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item style={{ paddingLeft: 0 }}>
              <img
                src={psLogo}
                style={{ width: "170px" }}
                alt="Peopleserve Logo"
              />
            </Menu.Item>
            <Menu.Item key="/members">
              <NavLink to="/members" className="nav-text">
                <span>Members</span>
              </NavLink>
            </Menu.Item>

            {this.verified([
              "view_clients",
              "view_add_and_modify_clients_branches_brands_bus"
            ]) && (
              <Menu.Item key="/clients">
                <NavLink to="/clients" className="nav-text">
                  <span>Clients</span>
                </NavLink>
              </Menu.Item>
            )}

            {this.verified([
              "member_list_with_government_ids_only",
              "headcount_list_reports_only",
              "member_list_reports_only",
              "reports_full_access"
            ]) && (
              <Menu.Item key="/reports">
                <NavLink to="/reports" className="nav-text">
                  <span>Reports</span>
                </NavLink>
              </Menu.Item>
            )}

            <SubMenu
              // className="pull-right"

              style={{ float: "right" }}
              key="/profile"
              title={
                <span>
                  <Avatar icon="user" /> {loading ? <Spin /> : profile.name}
                  <Icon type="down" />
                </span>
              }
            >
              {profile && (
                <Menu.Item key="5">
                  <NavLink to={`/profile/${this.props.profile.id}`}>
                    Profile
                  </NavLink>
                </Menu.Item>
              )}

              {this.verified("system_settings") && (
                <Menu.Item key="6">
                  <NavLink to="/settings/employee-statuses">
                    <span>System Settings</span>
                  </NavLink>
                </Menu.Item>
              )}

              <Menu.Item key="7" onClick={this.showModal}>
                Sign out
              </Menu.Item>
            </SubMenu>

            {this.verified("system_users_full_access") && (
              <SubMenu
                // className="pull-right"
                style={{ float: "right" }}
                key="/1"
                title={
                  <span>
                    Users <Icon type="down" />
                  </span>
                }
              >
                <Menu.Item key="2">
                  <NavLink to="/users">
                    <span>Users</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <NavLink to="/user-groups">
                    <span>User Groups</span>
                  </NavLink>
                </Menu.Item>
              </SubMenu>
            )}
          </Menu>
        </Header>
        <Layout style={{ marginTop: "64px" }}>
          <Content style={{ overflowX: "hidden" }}>
            {this.props.children}
          </Content>
          {/* <Footer /> */}
        </Layout>
        <Modal
          title="Signout"
          visible={this.state.logoutVisible}
          onOk={this.onOk}
          onCancel={this.hideModal}
          okText="Ok"
          cancelText="Cancel"
        >
          <p>Are you sure you want to signout?</p>
        </Modal>
      </Layout>
    );
  }

  renderLoginPage() {
    return (
      <div className="app">
        <main className="main">
          <Layout id="auth">
            <Content>{this.props.children}</Content>
          </Layout>
        </main>
      </div>
    );
  }

  verified(permission) {
    let verified = [];

    permission = !Array.isArray(permission) ? [permission] : permission;

    permission.forEach(val => {
      if (this.props.permissions.map(val => val.name).indexOf(val) !== -1) {
        verified.push(1);
      } else verified.push(0);
    });

    return verified.indexOf(1) !== -1 ? true : false;
  }

  render() {
    const { isAuthenticated, isLoading } = this.props;

    if (isAuthenticated) {
      if (isLoading) {
        return <LoadingComponent isLoading={this.state.isLoading} />;
      }

      return this.renderPrivatePage();
    }

    return (
      <div>
        <Spin spinning={isLoading}>{this.renderLoginPage()}</Spin>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(authActionCreators, dispatch)
});

const mapStateToProps = (state, ownState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  profile: state.profile.data,
  permissions: state.profile.permissions
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
