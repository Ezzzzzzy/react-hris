import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Col, Divider, Icon, Menu, Row } from "antd";

const PageHeaderContent = ({ member, full_name, verified }) => (
  <Row gutter={16}>
    <Col xl={16} sm={24}>
      <h1 className="pageHeaderContent">Member - {full_name}</h1>
    </Col>
    <Col xl={8} sm={24} className="actions-container">
      {verified("download_profile") && (
        <Button type="primary">
          <Icon type="cloud-download" /> Download Profile
        </Button>
      )}
      {verified("modify_profile_of_members") && (
        <NavLink to={`/members/${member.id}/edit`}>
          <Button type="primary">
            <Icon type="edit" /> Edit Profile
          </Button>
        </NavLink>
      )}
    </Col>
    <Col span={24}>
      <Divider />
      <Menu
        style={{ marginBottom: "-16px" }}
        defaultSelectedKeys={["/members/1"]}
        selectedKeys={[window.location.pathname]}
        mode="horizontal"
      >
        <Menu.Item key={`/members/${member.id}`}>
          <NavLink to={`/members/${member.id}`}>Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key={`/members/${member.id}/deployment-details`}>
          <NavLink to={`/members/${member.id}/deployment-details`}>
            Deployment Details
          </NavLink>
        </Menu.Item>
        <Menu.Item key={`/members/${member.id}/complete-profile`}>
          <NavLink to={`/members/${member.id}/complete-profile`}>
            Complete Profile
          </NavLink>
        </Menu.Item>
      </Menu>
    </Col>
  </Row>
);

export default PageHeaderContent;
