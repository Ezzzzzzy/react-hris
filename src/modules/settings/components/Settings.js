import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Menu } from "antd";
import PageHeaderLayout from "../../../commons/PageHeaderLayout";

const pageHeaderContent = (
  <h2 className="pageHeaderContent">System Settings</h2>
);

const settingsLayout = (WrappedComponent, activePage) =>
  class extends Component {
    render() {
      return (
        <div style={{ margin: "0 16px" }}>
          <PageHeaderLayout content={pageHeaderContent} breadcrumbList={[]}>
            <Row style={{ padding: "0 50px" }}>
              <Col span={5}>
                <h3 className="settings-menu-header">MENU</h3>
                <Menu
                  className="settings-menu-container"
                  style={{ width: 256 }}
                  defaultSelectedKeys={["/settings/employee-statuses"]}
                  selectedKeys={[window.location.pathname]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                >
                  <Menu.Item key="/settings/employee-statuses">
                    <Link to="/settings/employee-statuses">
                      Employee Status
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/settings/document-types">
                    <Link to="/settings/document-types">Document Types</Link>
                  </Menu.Item>
                  <Menu.Item key="/settings/leaving-reasons">
                    <Link to="/settings/leaving-reasons">
                      Reasons for Leaving
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/settings/regions">
                    <Link to="/settings/regions">Regions</Link>
                  </Menu.Item>
                  <Menu.Item key="/settings/cities">
                    <Link to="/settings/cities">Cities</Link>
                  </Menu.Item>
                  <Menu.Item key="/settings/branch-locations">
                    <Link to="/settings/branch-locations">
                      Branch Locations
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/settings/positions">
                    <Link to="/settings/positions">Positions</Link>
                  </Menu.Item>
                  <Menu.Item key="/settings/tenure-ranges">
                    <Link to="/settings/tenure-ranges">Tenure Ranges</Link>
                  </Menu.Item>
                </Menu>
              </Col>

              <Col span={19}>
                <WrappedComponent {...this.props} />
              </Col>
            </Row>
          </PageHeaderLayout>
        </div>
      );
    }
  };

export default settingsLayout;
