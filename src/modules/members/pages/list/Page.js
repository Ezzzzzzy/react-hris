import React, { Component } from "react";
import {
  Col,
  Row,
  Table,
  Card,
  Button,
  Input,
  Divider,
  Select,
  Spin,
  Checkbox,
  Icon,
  Tag,
  Tooltip
} from "antd";
import { Link } from "react-router-dom";
import PageHeaderLayout from "../../../../commons/PageHeaderLayout";
import BulkUploadMember from "../components/BulkUploadMember";
import BulkModal from "../../../../commons/Modal";

import "./index.css";

const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

class Page extends Component {
  state = {
    bulkModalVisible: false,
    filters: {},
    total: ""
  };

  componentDidMount() {
    this.props.getMembersRequest({});
    this.props.allEmployeeStatus();
    this.props.allPosition();
    this.props.allLocation();
    this.props.allTenureRange();
    this.props.allBrand();
  }

  showBulkUploadModal = () => {
    this.setState({ bulkModalVisible: true });
  };

  onCancel = () => {
    this.setState({ bulkModalVisible: false });
  };

  verified = permission => {
    let verified = [];

    permission = !Array.isArray(permission) ? [permission] : permission;

    permission.forEach(val => {
      if (this.props.permissions.map(val => val.name).indexOf(val) !== -1) {
        verified.push(1);
      } else verified.push(0);
    });

    return verified.indexOf(1) !== -1 ? true : false;
  };

  onChangeFilter = (val, propName) => {
    let filters = Object.assign({}, this.state.filters);

    filters[propName] = val;

    this.setState({ filters }, () => {
      this.props.getMembersRequest(this.state.filters);
    });
  };

  render() {
    const {
      members,
      isMemberLoading,
      meta,
      statuses,
      positions,
      isPositionLoading,
      locations,
      tenureRanges,
      brands
    } = this.props;

    const columns = [
      {
        title: "ID",
        dataIndex: "member_id",
        key: "member_id"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text, record) => {
          return (
            <span>
              <p
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold"
                }}
              >
                {text}
              </p>
              {record.complete === 0 ? (
                <p
                  style={{
                    color: "#F6555D",
                    fontSize: "1em",
                    lineHeight: "0.2em"
                  }}
                >
                  Incomplete Profile
                </p>
              ) : null}
            </span>
          );
        }
      },
      {
        title: "Position",
        dataIndex: "position",
        key: "position",
        render: (text, record) => {
          return text ? (
            <span>
              <p style={{ lineHeight: "0.2em" }}>{text}</p>
              <p style={{ color: "#808FA3", fontSize: "0.9em" }}>
                {record.brand}, {record.business_unit}
              </p>
            </span>
          ) : (
              <center>---</center>
            );
        }
      },
      {
        title: "Location",
        dataIndex: "location",
        key: "location",
        render: (text, record) =>
          text ? (
            <span>
              <p>{text}</p>
              <p
                style={{
                  color: "#808FA3",
                  fontSize: "0.9em",
                  lineHeight: "0.2em"
                }}
              >
                {record.city}
              </p>
            </span>
          ) : (
              <center>---</center>
            )
      },
      {
        title: "Hiring Date",
        dataIndex: "hiring_date",
        key: "hiring_date",
        render: (text, record) => {
          return (
            <span>
              <p>{text}</p>
              <p
                style={{
                  color: "#808FA3",
                  fontSize: "0.9em"
                }}
              >
                {record.time_diff}
              </p>
            </span>
          );
        }
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (text, record) => {
          const { status, color } = record;
          return status ? <Tag color={color}>{text}</Tag> : null;
        }
      },
      {
        title: "Last Modified",
        dataIndex: "updated_at",
        key: "updated_at",
        render: (text, record) => {
          return (
            <span>
              <p>{text}</p>
              <p style={{ color: "#808FA3", fontSize: "0.9em" }}>
                {record.last_modified_by}
              </p>
            </span>
          );
        }
      },
      {
        title: "",
        dataIndex: "action",
        key: "action",
        render: (text, record) => {
          return (
            <div>
              <Link to={`/members/${record.id}`}>View</Link>
              <Divider type="vertical" />
              {this.verified("modify_profile_of_members") && (
                <Link to={`/members/${record.id}/edit`}>Edit</Link>
              )}
            </div>
          );
        }
      }
    ];

    return (
      <div>
        <div style={{ margin: "0 16px" }}>
          <PageHeaderLayout
            content={<h1 className="pageHeaderContent">Members List</h1>}
            breadcrumbList={[]}
          >
            <Row gutter={30} style={{ padding: "0 25px" }}>
              <Col xs={24} sm={24} md={10} lg={6} xl={5}>
                <Card className="filter-card">
                  <h2>Filter by</h2>

                  <h5>STATUS</h5>
                  <Row>
                    <CheckboxGroup
                      style={{ width: "100%" }}
                      onChange={e => {
                        this.onChangeFilter(e.join(), "status");
                      }}
                    >
                      {statuses &&
                        statuses.map((item, i) => (
                          <div key={i} className="checkbox-container">
                            <Col xs={12} sm={12} md={16} lg={16} xl={16}>
                              <Checkbox value={item.id}>
                                {item.status_name}
                              </Checkbox>
                            </Col>
                            <Col
                              className="text-right"
                              xs={12}
                              sm={12}
                              md={8}
                              lg={8}
                              xl={8}
                            >
                              {/* 
                              TO DOs:
                                [] count of members per status  
                              {item.id} 
                              
                              */}
                            </Col>
                          </div>
                        ))}
                    </CheckboxGroup>
                  </Row>

                  <Divider />
                  <h5>TENURE</h5>
                  <Row>
                    <CheckboxGroup
                      style={{ width: "100%" }}
                      onChange={e => this.onChangeFilter(e.join(), "tenure")}
                    >
                      {tenureRanges &&
                        tenureRanges.map((item, i) => (
                          <div key={i} className="checkbox-container">
                            <Col span={24}>
                              <Checkbox value={item.id}>{item.range}</Checkbox>
                            </Col>
                          </div>
                        ))}
                    </CheckboxGroup>
                  </Row>

                  <Divider />
                  <h5>POSITION</h5>
                  <Select
                    style={{ width: "100%" }}
                    defaultValue=""
                    notFoundContent={
                      isPositionLoading ? <Spin size="small" /> : null
                    }
                    onChange={position =>
                      this.onChangeFilter(position, "position")
                    }
                  >
                    <Option value="">Filter all position</Option>
                    {positions &&
                      positions.map((item, i) => (
                        <Option value={item.id} key={i}>
                          {item.position_name}
                        </Option>
                      ))}
                  </Select>

                  <Divider />
                  <h5>BRAND</h5>
                  <Select
                    style={{ width: "100%" }}
                    defaultValue=""
                    onChange={brand => this.onChangeFilter(brand, "brand")}
                  >
                    <Option value="">Filter all brand</Option>
                    {brands &&
                      brands.map((item, i) => (
                        <Option value={item.id} key={i}>
                          {item.brand_name}
                        </Option>
                      ))}
                  </Select>

                  <Divider />
                  <h5>LOCATION</h5>
                  <Select
                    style={{ width: "100%" }}
                    defaultValue=""
                    onChange={location =>
                      this.props.getMembersRequest({ location })
                    }
                  >
                    <Option value="">Filter all location</Option>
                    {locations &&
                      locations.map((item, i) => (
                        <Option value={item.id} key={i}>
                          {item.location_name}
                        </Option>
                      ))}
                  </Select>
                </Card>
              </Col>

              <Col xs={24} sm={24} md={14} lg={18} xl={19}>
                <Row gutter={8}>
                  <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                    <Select
                      defaultValue=""
                      onChange={complete =>
                        this.props.getMembersRequest({ complete })
                      }
                    >
                      <Option value="">All Members</Option>
                      <Option value="0">Incomplete Profiles</Option>
                      <Option value="1">Complete Profiles</Option>
                    </Select>
                  </Col>

                  <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                    <h3>Total: {meta && meta.total}</h3>
                  </Col>

                  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Input
                      suffix={
                        <Icon
                          type="search"
                          style={{ color: "rgba(0,0,0,.25)", width: "100%" }}
                        />
                      }
                      placeholder="Search by Member Name or ID"
                      onPressEnter={e =>
                        this.onChangeFilter(e.target.value, "q")
                      }
                    />
                  </Col>

                  <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                    <Button
                      type="primary"
                      onClick={this.showBulkUploadModal}
                      disabled={!this.verified("add_member")}
                      style={{ width: "100%" }}
                    >
                      <Icon type="plus" />
                      Upload Bulk Member
                    </Button>
                  </Col>

                  <Col xs={24} sm={24} md={8} lg={6} xl={3}>
                    <Link to="/members/create">
                      <Tooltip
                        placement="topRight"
                        title={
                          !this.verified("add_member") &&
                          "You don't have any permission"
                        }
                      >
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={!this.verified("add_member")}
                          style={{ width: "100%" }}
                        >
                          <Icon type="plus" />
                          New Member
                        </Button>
                      </Tooltip>
                    </Link>
                  </Col>
                </Row>

                <Row style={{ marginTop: "10px" }}>
                  <Col span={24}>
                    <Table
                      loading={isMemberLoading}
                      pagination={{
                        ...meta,
                        onShowSizeChange: (current, limit) => {
                          this.onChangeFilter(limit, "limit");
                        },
                        showSizeChanger: true,
                        onChange: page => this.onChangeFilter(page, "page"),
                        showTotal: (total, range) =>
                          `${range[0]}-${range[1]} of ${total} items`
                      }}
                      style={{ background: "#fff" }}
                      rowKey={record => record.id}
                      dataSource={members}
                      columns={columns}
                      scroll={{ x: 970 }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </PageHeaderLayout>
        </div>

        <BulkModal
          visible={this.state.bulkModalVisible}
          onCancel={this.onCancel}
          title="Bulk Upload Member"
          content={
            <BulkUploadMember
              isLoading={isMemberLoading}
              success={this.props.uploadSuccessMessage}
              error={this.props.uploadErrorMessage}
              onUpload={this.props.uploadBulkMembers}
            />
          }
        />
      </div>
    );
  }
}

export default Page;
