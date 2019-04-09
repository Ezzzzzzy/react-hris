import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./index.css";

import PageHeaderLayout from "../../../commons/PageHeaderLayout";

class Page extends Component {
  render() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }

    const pageHeaderContent = (
      <div className="pageHeaderContent">Welcome to Dashboard</div>
    );

    const breadcrumbList = [{ title: "Dashboard" }];

    return (
      <div>
        <div style={{ margin: "0 16px" }}>
          <PageHeaderLayout
            content={pageHeaderContent}
            breadcrumbList={breadcrumbList}
          >
            <div>Hello world</div>
          </PageHeaderLayout>
        </div>
      </div>
    );
  }
}

export default Page;
