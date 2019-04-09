import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Col,
  Row,
  Breadcrumb,
  Button,
  Icon,
  Divider,
  Card,
  Menu,
  Spin,
  Input,
  Form,
  Table
} from "antd";

import "./index.css";
import PageHeaderLayout from "../../../../commons/PageHeaderLayout";

const FormItem = Form.Item;

const educationalColumns = [
  {
    title: "Type",
    dataIndex: "school_type",
    key: "school_type"
  },
  {
    title: "School",
    dataIndex: "school_name",
    key: "school_name"
  },
  {
    title: "Course / Degree",
    dataIndex: "degree",
    key: "degree",
    render: (text, record) => (
      <p>{record.degree !== " " ? record.degree : "---"}</p>
    )
  },
  {
    title: "Year Graduated",
    dataIndex: "started_at",
    key: "year_graduated",
    render: (text, record) => (
      <p>
        {record.started_at} - {record.ended_at}
      </p>
    )
  }
];

const employeeColumns = [
  {
    title: "Company",
    dataIndex: "company_name",
    key: "company_name"
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position"
  },
  {
    title: "Inclusive Date",
    dataIndex: "date",
    key: "date",
    render: (text, record) => `${record.started_at} - ${record.ended_at}`
  },
  {
    title: "Reason for Leaving",
    dataIndex: "reason_for_leaving",
    key: "reason_for_leaving"
  }
];

const familyColumns = [
  {
    title: "Type",
    dataIndex: "family_type",
    key: "family_type"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Company / Occupation",
    dataIndex: "occupation",
    key: "occupation"
  }
];

const emergencyColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Relationship",
    dataIndex: "relationship",
    key: "relationship"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Contact Number",
    dataIndex: "contact",
    key: "contact"
  }
];

const referenceColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "25%",
    render: (text, record) => (
      <div className="reference-data">
        <p className="title">{record.name}</p>
        <p className="sub-title">
          {record.position}, {record.company}
        </p>
      </div>
    )
  },
  {
    title: "Address",
    dataIndex: "address",
    width: "55%",
    key: "address"
  },
  {
    title: "Contact Number",
    dataIndex: "contact",
    width: "15%",
    key: "contact"
  }
];

class Page extends Component {
  render() {
    const { profile, isLoading } = this.props;

    if (isLoading) {
      return (
        <center>
          <h1>
            <Spin />
          </h1>
        </center>
      );
    }

    const pageHeaderContent = (
      <Row gutter={16}>
        <Col xl={16} sm={24}>
          <h1 className="pageHeaderContent">
            Member - {profile.last_name} {profile.first_name}{" "}
            {profile.middle_name}
          </h1>
        </Col>
        <Col xl={8} sm={24} className="actions-container">
          <Button type="primary">
            <Icon type="cloud-download" /> Download Profile
          </Button>
          <NavLink to={`/members/${profile.id}/edit`}>
            <Button type="primary">
              <Icon type="edit" /> Edit Profile
            </Button>
          </NavLink>
        </Col>
        <Col span={24}>
          <Divider />
          <Menu
            style={{ marginBottom: "-16px" }}
            defaultSelectedKeys={["/members/1"]}
            selectedKeys={[window.location.pathname]}
            onClick={this.handleClick}
            mode="horizontal"
          >
            <Menu.Item key="/members/1">
              <NavLink to={`/members/${profile.id}`}>Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key={`/members/${profile.id}/deployment-details`}>
              <NavLink to={`/members/${profile.id}/deployment-details`}>
                Deployment Details
              </NavLink>
            </Menu.Item>
            <Menu.Item key={`/members/${profile.id}/complete-profile`}>
              <NavLink to={`/members/${profile.id}/complete-profile`}>
                Complete Profile
              </NavLink>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    );

    const sectionHeaderColProps = {
      xs: 24,
      sm: 24,
      md: { span: 6 },
      lg: { span: 6, offset: 1 },
      xl: { span: 6, offset: 2 }
    };

    const sectionContentColProps = {
      xs: 24,
      sm: 24,
      md: 18,
      lg: 17,
      xl: 16
    };

    const formColProps = {
      xs: 24,
      sm: 24,
      md: 20,
      lg: 20,
      xl: 20
    };

    const quickLinkColProps = {
      xs: 24,
      sm: 24,
      md: 4,
      lg: 4,
      xl: 4
    };

    const breadcrumbList = [
      {
        title: "Members",
        url: "/members"
      },
      {
        title: `${profile.first_name} ${profile.last_name}`
      },
      {
        title: "Complete Profile"
      }
    ];

    return (
      <div>
        <div style={{ margin: "0 16px" }}>
          <PageHeaderLayout content={pageHeaderContent} breadcrumbList={[]}>
            <Row gutter={16} style={{ padding: "0 25px" }}>
              <Col span={24} style={{ margin: "8px 0 24px" }}>
                <Breadcrumb className="breadcrumb" separator=">">
                  {breadcrumbList.map(item => (
                    <Breadcrumb.Item key={item.title}>
                      {item.url ? (
                        <Link to={item.url}>{item.title}</Link>
                      ) : (
                        item.title
                      )}
                    </Breadcrumb.Item>
                  ))}
                </Breadcrumb>
              </Col>
              <Col {...formColProps}>
                <Form layout="vertical">
                  <Row gutter={16} style={{ margin: "16px 0" }}>
                    <Col {...sectionHeaderColProps}>
                      <h2 className="section-header">Old Member ID</h2>
                    </Col>
                    <Col {...sectionContentColProps}>
                      <Input
                        style={{ width: 250 }}
                        defaultValue={profile.existing_member_id}
                        disabled
                      />
                    </Col>
                  </Row>
                  <Row gutter={16} style={{ margin: "16px 0" }}>
                    <Col {...sectionHeaderColProps}>
                      <h2 className="section-header">Personal Information</h2>
                    </Col>
                    <Col {...sectionContentColProps}>
                      <Card>
                        <Row gutter={8}>
                          <Col xl={10} md={12} sm={24} xs={24}>
                            <FormItem label="Last Name">
                              <Input
                                defaultValue={profile.last_name}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={10} md={12} sm={24} xs={24}>
                            <FormItem label="First Name">
                              <Input
                                defaultValue={profile.first_name}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={4} md={12} sm={24} xs={24}>
                            <FormItem label="Name Ext.">
                              <Input
                                defaultValue={profile.extension_name}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Middle Name">
                              <Input
                                defaultValue={profile.middle_name}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Nickname">
                              <Input defaultValue={profile.nickname} disabled />
                            </FormItem>
                          </Col>
                          <Col xl={16} md={24} xs={24}>
                            <FormItem label="Present Address">
                              <Input
                                defaultValue={profile.present_address}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={8} md={24} xs={24}>
                            <FormItem label="City">
                              <Input
                                defaultValue={profile.present_address_city}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={16} md={24} xs={24}>
                            <FormItem label="Permanent / Provincial Address">
                              <Input
                                defaultValue={profile.permanent_address}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={8} md={24} xs={24}>
                            <FormItem label="City">
                              <Input
                                defaultValue={profile.permanent_address_city}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Date of Birth">
                              <Input
                                defaultValue={profile.birthdate}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Place of Birth">
                              <Input
                                defaultValue={profile.birthplace}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={6} md={12} sm={24} xs={24}>
                            <FormItem label="Gender">
                              <Input
                                defaultValue={
                                  profile.gender === "F" ? "Female" : "Male"
                                }
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={6} md={12} sm={24} xs={24}>
                            <FormItem label="Height">
                              <Input defaultValue={profile.height} disabled />
                            </FormItem>
                          </Col>
                          <Col xl={6} md={12} sm={24} xs={24}>
                            <FormItem label="Weight">
                              <Input defaultValue={profile.weight} disabled />
                            </FormItem>
                          </Col>
                          <Col xl={6} md={12} sm={24} xs={24}>
                            <FormItem label="Civil Status">
                              <Input
                                defaultValue={profile.civil_status}
                                disabled
                              />
                            </FormItem>
                          </Col>

                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Telephone Number">
                              {profile.telephone_number.length !== 0 ? (
                                profile.telephone_number.map((val, i) => {
                                  return (
                                    <div key={i}>
                                      <Input
                                        defaultValue={val.number}
                                        disabled
                                      />{" "}
                                      <br />
                                      <br />
                                    </div>
                                  );
                                })
                              ) : (
                                <Input
                                  defaultValue="No Telephone Number"
                                  disabled
                                />
                              )}
                            </FormItem>
                          </Col>
                          <Col sxl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Mobile Number">
                              {profile.mobile_number.length !== 0 ? (
                                profile.mobile_number.map((val, i) => {
                                  return (
                                    <div key={i}>
                                      <Input
                                        defaultValue={val.number}
                                        disabled
                                      />{" "}
                                      <br />
                                      <br />
                                    </div>
                                  );
                                })
                              ) : (
                                <Input
                                  defaultValue="No Mobile Number"
                                  disabled
                                />
                              )}
                            </FormItem>
                          </Col>

                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Facebook Email Address">
                              <Input
                                defaultValue={profile.fb_address}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Personal Email Address">
                              <Input
                                defaultValue={profile.email_address}
                                disabled
                              />
                            </FormItem>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>

                  <Row gutter={16} style={{ margin: "16px 0" }}>
                    <Col {...sectionHeaderColProps}>
                      <h2 className="section-header">
                        Government Mandated Numbers
                      </h2>
                    </Col>
                    <Col {...sectionContentColProps}>
                      <Card>
                        <Row gutter={8}>
                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="SSS Number">
                              <Input defaultValue={profile.sss_num} disabled />
                            </FormItem>
                          </Col>
                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Pag-ibig Number">
                              <Input
                                defaultValue={profile.pag_ibig_num}
                                disabled
                              />
                            </FormItem>
                          </Col>

                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="Philhealth Number">
                              <Input
                                defaultValue={profile.philhealth_num}
                                disabled
                              />
                            </FormItem>
                          </Col>
                          <Col xl={12} md={12} sm={24} xs={24}>
                            <FormItem label="TIN Number">
                              <Input defaultValue={profile.tin} disabled />
                            </FormItem>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </Form>

                <Row gutter={16} style={{ margin: "16px 0" }}>
                  <Col {...sectionHeaderColProps}>
                    <h2 className="section-header">Educational Attainment</h2>
                  </Col>
                  <Col {...sectionContentColProps}>
                    <Card>
                      <Table
                        scroll={{ x: "650px" }}
                        pagination={false}
                        columns={educationalColumns}
                        dataSource={profile.schools}
                        rowKey={record => record.id}
                      />
                    </Card>
                  </Col>
                </Row>

                <Row gutter={16} style={{ margin: "16px 0" }}>
                  <Col {...sectionHeaderColProps}>
                    <h2 className="section-header">Employee History</h2>
                  </Col>
                  <Col {...sectionContentColProps}>
                    <Card>
                      <Table
                        scroll={{ x: "650px" }}
                        pagination={false}
                        columns={employeeColumns}
                        dataSource={profile.emp_history_data}
                        rowKey={record => record.id}
                      />
                    </Card>
                  </Col>
                </Row>

                <Row gutter={16} style={{ margin: "16px 0" }}>
                  <Col {...sectionHeaderColProps}>
                    <h2 className="section-header">Family Background</h2>
                    <p className="help-text">Mother required</p>
                  </Col>
                  <Col {...sectionContentColProps}>
                    <Card>
                      <Table
                        scroll={{ x: "650px" }}
                        pagination={false}
                        columns={familyColumns}
                        dataSource={profile.family_data}
                        rowKey={record => record.id}
                      />
                    </Card>
                  </Col>
                </Row>

                <Row gutter={16} style={{ margin: "16px 0" }}>
                  <Col {...sectionHeaderColProps}>
                    <h2 className="section-header">In Case of Emergency</h2>
                    <p className="help-text">
                      Add at least one emergency contact
                    </p>
                  </Col>
                  <Col {...sectionContentColProps}>
                    <Card>
                      <Table
                        scroll={{ x: "650px" }}
                        pagination={false}
                        columns={emergencyColumns}
                        dataSource={profile.emergency_data}
                        rowKey={record => record.id}
                        locale={{
                          emptyText: "Add at least one Emergency Contact"
                        }}
                      />
                    </Card>
                  </Col>
                </Row>

                <Row gutter={16} style={{ margin: "16px 0" }}>
                  <Col {...sectionHeaderColProps}>
                    <h2 className="section-header">Character Reference</h2>
                    <p className="help-text">
                      Add at least one character reference
                    </p>
                  </Col>
                  <Col {...sectionContentColProps}>
                    <Card>
                      <Table
                        scroll={{ x: "650px" }}
                        pagination={false}
                        columns={referenceColumns}
                        dataSource={profile.references_data}
                        rowKey={record => record.id}
                        locale={{
                          emptyText: "Add at least one Character Reference"
                        }}
                      />
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col {...quickLinkColProps} className="quick-links-container">
                <h5>SECTIONS</h5>
                <p>Old Member ID</p>
                <p>Personal Information</p>
                <p>Government Mandated Numbers</p>
                <p>Educational Attainment</p>
                <p>Employment History</p>
                <p>Family Background</p>
                <p>In Case of Emergency</p>
                <p>Character Reference</p>
              </Col>
            </Row>
          </PageHeaderLayout>
        </div>
      </div>
    );
  }
}

export default Form.create()(Page);
