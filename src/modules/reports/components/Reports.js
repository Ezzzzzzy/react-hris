import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Menu } from "antd";
import PageHeaderLayout from "../../../commons/PageHeaderLayout";

const pageHeaderContent = (
  <h2 className="pageHeaderContent">Reports</h2>
);

const reportsLayout = (WrappedComponent, activePage) =>
  class extends Component {
    render() {
      return (
        <div style={{ margin: "0 16px" }}>
          <PageHeaderLayout content={pageHeaderContent} breadcrumbList={[]}>
            <Row type="flex" justify="center" gutter={16}>
              <Col span={4}>
                <h3 className="reports-menu-header">MENU</h3>
                <Menu
                  className="reports-menu-container"
                  defaultSelectedKeys={["/reports"]}
                  selectedKeys={[window.location.pathname]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                >
                  <Menu.Item key="/reports">
                    <Link to="/reports">
                      Generated Reports
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/reports/templates">
                    <Link to="/reports/templates">Saved Templates</Link>
                  </Menu.Item>
                </Menu>
              </Col>

              <Col span={16}>
                <WrappedComponent {...this.props} />
              </Col>
            </Row>
          </PageHeaderLayout>
        </div>
      );
    }
  };

export default reportsLayout;
