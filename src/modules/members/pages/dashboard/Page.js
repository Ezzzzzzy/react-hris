import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Col,
  Row,
  Breadcrumb,
  Button,
  Icon,
  Input,
  Divider,
  Card,
  Menu,
  Avatar,
  Spin,
  Table,
  Tabs,
  // Tag,
  Timeline
} from "antd";

import "./index.css";
import PageHeaderLayout from "../../../../commons/PageHeaderLayout";
import EndModal from "../components/EndModal";
import UploadFileModal from "../components/UploadFile";
const TabPane = Tabs.TabPane;

const columns = [
  {
    title: "",
    dataIndex: "document_name",
    key: "document_name",
    render: (text, record) => (
      <div>
        <a href={`${record.file_url}`} target="_blank">
          {text}
        </a>
      </div>
    )
  },
  {
    title: "",
    dataIndex: "",
    render: (text, record) => (
      <div>
        {record.type} | {record.created_at}
      </div>
    )
  }
];

class Page extends Component {
  state = {
    selectedId: [],
    clientId: null,
    endModalVisible: false,
    uploadFileModalVisible: false
  };

  constructor(props) {
    super(props);
    const id = props.match.params.id;
    props.getProfile(id);
    props.getWorkHistory(id);
    props.getAllLeavingReasonsRequest();
    props.allEmployeeStatus();
    props.getDocumentTypes();
    props.getDocuments(id);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      endModalVisible:
        props.actionType.type === "END_WORK_SUCCESS"
          ? false
          : state.endModalVisible,
      uploadFileModalVisible:
        props.actionType.type === "UPLOAD_MEMBER_DOCUMENT_SUCCESS"
          ? false
          : state.uploadFileModalVisible
    };
  }

  handleClose = () => {
    this.setState({ endModalVisible: false, uploadFileModalVisible: false });
  };

  showEndModal = (id, client_id) => {
    this.setState({
      selectedId: [id],
      clientId: client_id,
      endModalVisible: true
    });
  };

  showUploadFileModal = id => {
    this.setState({
      selectedId: [id],
      uploadFileModalVisible: true
    });
  };

  handleEnd = () => {
    this.setState({
      endModalVisible: false
    });
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

  upperFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  render() {
    const {
      documents,
      documentTypes,
      isLoading,
      member,
      reasons,
      statuses,
      workHistory,
      user
    } = this.props;

    const loading = !Object.keys(member ? member : {}).length;

    let full_name =
      member &&
      `${this.upperFirstLetter(member.first_name)} ${
      member.middle_name ? member.middle_name : ""
      } ${this.upperFirstLetter(member.last_name)}`;

    const pageHeaderContent = loading ? (
      <center>
        <Spin />
      </center>
    ) : (
        <Row gutter={16}>
          <Col xl={16} sm={24}>
            <h1 className="pageHeaderContent">Member - {full_name}</h1>
          </Col>
          <Col xl={8} sm={24} className="actions-container">
            {this.verified("download_profile") && (
              <Button type="primary">
                <Icon type="cloud-download" /> Download Profile
            </Button>
            )}
            {this.verified("modify_profile_of_members") && (
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
              onClick={this.handleClick}
              mode="horizontal"
            >
              <Menu.Item key={`/members/${member.id}`}>
                <NavLink to={`/members/${member.id}`}>Dashboard</NavLink>
              </Menu.Item>
              <Menu.Item key={`/members/${member.id}/deployment-details`}>
                <Link
                  to={{
                    pathname: `/members/${member.id}/deployment-details`,
                    state: { member_id: member.id }
                  }}
                >
                  Deployment Details
              </Link>
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

    const breadcrumbList = [
      {
        title: "Members",
        url: "/members"
      },
      {
        title: full_name
      },
      {
        title: "Dashboard"
      }
    ];

    const formColProps = {
      xs: 24,
      sm: 24,
      md: 14,
      lg: 14,
      xl: 14
    };

    const quickLinkColProps = {
      xs: 24,
      sm: 24,
      md: 10,
      lg: 10,
      xl: 10
    };

    return loading ? (
      <center>
        <Spin />
      </center>
    ) : (
        <div>
          <Spin spinning={isLoading}>
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
                  <Col span={24} style={{ marginBottom: 16 }}>
                    <Card>
                      <Row gutter={8}>
                        <Col span={24} className="text-right">
                          {/* 
                        TO DOs:
                          [] current status of member
                        <Tag color="#169C28">TRAINING</Tag> 
                      */}
                        </Col>
                        <Col
                          xl={3}
                          md={6}
                          sm={12}
                          xs={24}
                          className="profile-avatar-container"
                        >
                          <Avatar
                            className="profile-avatar"
                            size={64}
                            style={{
                              color: "#ffffff",
                              backgroundColor: "#D17C0D"
                            }}
                          >
                            {member.first_name.charAt(0).toUpperCase() +
                              member.last_name.charAt(0).toUpperCase()}
                          </Avatar>
                          <h4>{member.existing_member_id}</h4>
                          <p>MEMBER ID</p>
                        </Col>
                        <Col xl={18} md={12} sm={12} xs={24}>
                          <h1>
                            {full_name}
                            {member.extension_name
                              ? ", " + member.extension_name
                              : ""}
                          </h1>
                          <p>
                            <span className="text-danger">
                              {member.gender === "F" ? "FEMALE" : "MALE"}
                            </span>{" "}
                            - {member.present_city} {member.present_address}
                          </p>
                          <div className="detailed-profile-container">
                            <p>
                              <Icon type="gift" /> {member.birthdate}{" "}
                              {/*TO DO: [] calculate age. member.age*/}
                            </p>
                            <p>
                              <Icon type="home" /> {member.present_address}
                            </p>
                            <p>
                              <Icon type="mobile" /> +63917-123-1234
                          </p>
                            <p>
                              <Icon type="mail" /> {member.email_address}
                            </p>
                            {/* <p>
                          <Icon type="calendar" /> From Mar. 20, 2018 - Jun. 20,
                          2018 - <span className="text-success">On Leave</span>
                        </p> */}

                            <p>
                              TIN{" "}
                              {member.tin
                                ? member.tin.substr(0, 3) +
                                "-" +
                                member.tin.substr(3, 6) +
                                "-" +
                                member.tin.substr(6, 9)
                                : "N/A"}
                            </p>
                            <p>
                              PGI{" "}
                              {member.pag_ibig_num
                                ? member.pag_ibig_num.substr(0, 4) +
                                "-" +
                                member.pag_ibig_num.substr(4, 4) +
                                "-" +
                                member.pag_ibig_num.substr(8, 4)
                                : "N/A"}
                            </p>
                            <p>
                              PHL{" "}
                              {member.philhealth_num
                                ? member.philhealth_num.substr(0, 2) +
                                "-" +
                                member.philhealth_num.substr(2, 7) +
                                "-" +
                                member.philhealth_num.substr(9, 1)
                                : "N/A"}
                            </p>
                            <p>
                              SSS{" "}
                              {member.sss_num
                                ? member.sss_num.substr(0, 3) +
                                "-" +
                                member.sss_num.substr(3, 6) +
                                "-" +
                                member.sss_num.substr(6, 9)
                                : "N/A"}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Row style={{ marginTop: 32 }} gutter={32}>
                    <Col {...formColProps}>
                      <h2>Deployment Details</h2>
                      <Timeline className="dashboard-timeline" reverse={true}>
                        {workHistory &&
                          workHistory.map((deployment, i) => (
                            <Timeline.Item color={deployment.color} key={i}>
                              <span className="left-timeline">
                                <h2>{deployment.client_code}</h2>
                                <p>{deployment.client_name}</p>
                                <p>{deployment.duration}</p>
                              </span>
                              {deployment.positions.map((position, i) => (
                                <Card key={i}>
                                  <Row>
                                    <Col lg={12} md={24}>
                                      <h3>{position.position}</h3>
                                      <p>{position.branch}</p>
                                      <p>{position.brand}</p>
                                      {
                                        position.disciplinary_actions.data &&
                                        (
                                          <p className="text-danger">
                                            Pending DA
                                          </p>
                                        )
                                      }

                                    </Col>
                                    <Col lg={12} md={24} className="text-right">
                                      <p>
                                        {position.date_start} -{" "}
                                        {position.date_end}
                                      </p>
                                      <p>{position.duration}</p>
                                      <p>
                                        {!position.hasEnded ? (
                                          <a
                                            onClick={e =>
                                              this.showEndModal(
                                                deployment.id,
                                                deployment.client_id
                                              )
                                            }
                                          >
                                            <Icon
                                              type="poweroff"
                                              theme="outlined"
                                            />{" "}
                                            End
                                        </a>
                                        ) : null}
                                      </p>
                                    </Col>
                                  </Row>
                                </Card>
                              ))}
                            </Timeline.Item>
                          ))}
                        {this.verified("modify_deployment") && (
                          <Timeline.Item
                            dot={
                              <Icon
                                type="plus-circle"
                                style={{ fontSize: "18px" }}
                              />
                            }
                          >
                            <Link to={`/members/${member.id}/deployment-details`}>
                              New Deployment
                          </Link>
                          </Timeline.Item>
                        )}
                      </Timeline>
                    </Col>
                    <Col {...quickLinkColProps} className="card-container">
                      <Tabs type="card">
                        <TabPane tab="Requirements" key="1">
                          <Row gutter={8}>
                            <Col span={12}>
                              <Button
                                onClick={() =>
                                  this.showUploadFileModal(member.id)
                                }
                              >
                                Upload File
                            </Button>
                            </Col>
                            <Col span={12}>
                              <Input placeholder="Search here" />
                            </Col>
                          </Row>

                          <br />

                          <Row gutter={8}>
                            <Col span={24}>
                              <Table
                                dataSource={documents}
                                columns={columns}
                                rowKey={record => record.id}
                                scroll={{ y: 300 }}
                              />
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tab="Contracts" key="2">
                          <Table dataSource={[]} columns={columns} />
                        </TabPane>
                      </Tabs>
                    </Col>
                  </Row>
                </Row>
              </PageHeaderLayout>
            </div>
          </Spin>

          <EndModal
            cwhId={this.state.selectedId}
            clientId={this.state.clientId}
            user={user}
            isLoading={isLoading}
            memberId={member.id}
            visible={this.state.endModalVisible}
            onCancel={this.handleClose}
            onSave={this.props.endWork}
            reasonOptions={reasons}
            statusOptions={statuses}
          />

          <UploadFileModal
            isLoading={isLoading}
            memberId={member.id}
            user={user}
            documentTypes={documentTypes}
            visible={this.state.uploadFileModalVisible}
            onCancel={this.handleClose}
            onSave={this.props.uploadDocument}
          />
        </div>
      );
  }
}

export default Page;
