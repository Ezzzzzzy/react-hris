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

const BrandHeader = props => {
  const {
    id,
    brands,
    client_name,
    members_count,
    branches_count,
    cities_count,
    regions_count
  } = props;

  return (
    <Col span={24}>
      <Card>
        <Row gutter={16}>
          <Col {...sectionHeaderColProps} md={8} lg={8} xl={8}>
            <h1 className="header_code" style={{ marginBottom: "0" }}>{brands && brands[0].brand_name}</h1>
            <h5 className="header_company">{client_name}</h5>
          </Col>

          <Col {...sectionHeaderColProps}>
            <Link to={`/client/${id}/brand/${id}`}>
              <div className="client-header_sub-title">
                <h1> {members_count || 0} </h1>
                <h5>MEMBERS</h5>
              </div>
            </Link>
          </Col>

          <Col {...sectionHeaderColProps}>
            <div className="client-header_sub-title">
              <h1> {branches_count || 0} </h1>
              <h5>BRANCHES</h5>
            </div>
          </Col>

          <Col {...sectionHeaderColProps}>
            <div className="client-header_sub-title">
              <h1> {cities_count || 0} </h1>
              <h5>CITIES</h5>
            </div>
          </Col>
          <Col {...sectionHeaderColProps}>
            <div className="client-header_sub-title">
              <h1> {regions_count || 0} </h1>
              <h5>REGIONS</h5>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default BrandHeader;
