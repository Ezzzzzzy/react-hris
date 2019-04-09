import React, { Component } from "react";
import { Layout } from "antd";
import SideBar from "./SideBar";
import "./index.css";
const { Sider, Content } = Layout;

const clientLayout = (WrappedComponent, activePage) =>
  class extends Component {
    render() {
      return (
        <div>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              width="240px"
              className="client-sidebar"
              style={{ height: "100vh", position: "fixed" }}
            >
              <SideBar
                {...this.props.client_details}
                permissions={this.props.permissions}
                client_id={this.props.match.params.id}
                bu_data={this.props.business_units_all}
                toast={this.props.toast}
                isLoading={this.props.isLoading}
                onUpdateClient={this.props.updateClientRequest}
                onCreateBusinessUnit={
                  this.props.createClientBusinessUnitRequest
                }
                onCreateBrand={this.props.createClientBrandRequest}
              />
            </Sider>
            <Layout style={{ marginLeft: 240 }}>
              <Content>
                <WrappedComponent {...this.props} />
              </Content>
            </Layout>
          </Layout>
        </div>
      );
    }
  };

export default clientLayout;
