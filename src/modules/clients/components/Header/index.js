import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import "./index.css";

const sectionHeaderColProps = {
  xs: 24,
  sm: 24,
  md: { span: 4 },
  lg: { span: 4 },
  xl: { span: 4 }
};

const ClientHeader = props => {
  const {
    id,
    code,
    name,
    members_count,
    brands_count,
    branches_count,
    business_unit_count
  } = props;
  return (
    <Col span={24}>
      <Card>
        <Row gutter={16}>
          <Col {...sectionHeaderColProps} md={8} lg={8} xl={8}>
            <h1 className="header_code">{code}</h1>
            <h5 className="header_company">{name}</h5>
          </Col>

          <Col {...sectionHeaderColProps}>
            <Link to={`/client/${id}/members`}>
              <div className="client-header_sub-title">
                <h1> {members_count || 0} </h1>
                <h5>MEMBERS</h5>
              </div>
            </Link>
          </Col>

          <Col {...sectionHeaderColProps}>
            <Link to={`/client/${id}/business-units`}>
              <div className="client-header_sub-title">
                <h1> {business_unit_count || 0} </h1>
                <h5>BUSINESS UNITS</h5>
              </div>
            </Link>
          </Col>

          <Col {...sectionHeaderColProps}>
            <Link to={`/client/${id}/brands`}>
              <div className="client-header_sub-title">
                <h1> {brands_count || 0} </h1>
                <h5>BRANDS</h5>
              </div>
            </Link>
          </Col>

          <Col {...sectionHeaderColProps}>
            <Link to={`/client/${id}/branches`}>
              <div className="client-header_sub-title">
                <h1> {branches_count || 0} </h1>
                <h5>BRANCHES</h5>
              </div>
            </Link>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ClientHeader;
