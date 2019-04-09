import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Icon,
  Spin,
  Row,
  Tag,
  Timeline,
  Tooltip,
  Divider,
  List
} from "antd";
import moment from "moment";
import "./index.css";

import PageHeaderLayout from "../../../../commons/PageHeaderLayout";
import PageHeaderContent from "./components/PageHeaderContent";
import EndModal from "../components/EndModal";
import Modal from "../../../../commons/Modal";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm";
import DisciplinaryForm from "./components/DisciplinaryForm";
import BreadCrumb from "./components/BreadCrumb";
import GeneralDetails from "./components/GeneralDetails";

class Page extends Component {
  state = {
    selectedId: [],
    clientId: null,
    deployment: null,
    endModalVisible: false,
    createModalVisible: false,
    editModalVisible: false,
    disciplinaryModalVisible: false,
    selected_bwh: null
  };

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     endModalVisible:
  //       props.actionType.type === "END_WORK_SUCCESS"
  //         ? false
  //         : state.endModalVisible
  //   };
  // }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProfile(id);
    this.props.getWorkHistory(id);
    this.props.getAllClientRequest();
    this.props.allBrand();
    this.props.allPosition();
    this.props.allEmployeeStatus();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.actionType.type !== this.props.actionType.type) {
      if (this.props.actionType.type === "CREATE_DISCIPLINARY_SUCCESS") {
        this.setState({ disciplinaryModalVisible: false }, () =>
          this.props.getWorkHistory(this.props.match.params.id)
        );
      }
    }
  }

  handleClose = () => {
    this.setState({
      endModalVisible: false,
      createModalVisible: false,
      editModalVisible: false,
      disciplinaryModalVisible: false
    });
  };

  showEndModal = (id, client_id) => {
    this.setState({
      selectedId: [id],
      clientId: client_id,
      endModalVisible: true
    });
  };

  showEditModal = deployment =>
    this.setState({ deployment, editModalVisible: true });
  showCreateModal = () => this.setState({ createModalVisible: true });
  showDisciplinaryModal = selected_bwh =>
    this.setState({ selected_bwh, disciplinaryModalVisible: true });

  handleEnd = () => this.setState({ endModalVisible: false });

  handleCreate = (id, body) => {
    this.props.deployMember(id, body);
    this.setState({ createModalVisible: false });
  };

  handleCreateDisciplinary = body => {
    body = {
      ...body,
      date_of_incident: moment(body.date_of_incident).format("YYYY-MM-DD"),
      date_of_decision: moment(body.date_of_decision).format("YYYY-MM-DD"),
      date_of_notice_to_explain: moment(body.date_of_notice_to_explain).format(
        "YYYY-MM-DD"
      ),
      date_of_explanation: moment(body.date_of_explanation).format("YYYY-MM-DD")
    };
    this.props.createDisciplinary(this.state.selected_bwh, body);
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
      member,
      memberLoading,
      workHistory,
      statuses,
      user,
      reasons
    } = this.props;

    const loading = !Object.keys(member ? member : {}).length;

    const full_name =
      member &&
      `${this.upperFirstLetter(member.first_name)} ${
      member.middle_name ? member.middle_name : ""
      } ${this.upperFirstLetter(member.last_name)}`;

    const formColProps = {
      xs: 24,
      sm: 24,
      md: 24,
      lg: { span: 15, offset: 1 },
      xl: { span: 15, offset: 1 }
    };
    const sample_da = [
      { date: '4/12/18', da: 1, da_title: 'Theft' },
      { date: '4/12/18', da: 0, da_title: 'Theft' }
    ]
    const employment_history = [
      { date_start: 'Apr 12, 2018', date_end: 'Apr 12, 2018', color: '#0474C8', status: 'PROBATIONARY' },
      { date_start: 'Apr 12, 2018', date_end: 'Apr 12, 2018', color: '#0474C8', status: 'PROBATIONARY' }
    ]
    return loading ? (
      <center>
        <Spin />
      </center>
    ) : (
        <div>
          <div style={{ margin: "0 16px" }}>
            <PageHeaderLayout
              content={
                <PageHeaderContent
                  member={member}
                  full_name={full_name}
                  verified={this.verified}
                />
              }
              breadcrumbList={[]}
            >
              <Row gutter={16} style={{ padding: "0 25px" }}>
                <Col span={24} style={{ margin: "8px 0 24px" }}>
                  <BreadCrumb full_name={full_name} />
                </Col>
                <Col span={24}>
                  <Row gutter={32}>
                    <Col {...formColProps}>
                      <div className="text-right" style={{ marginBottom: 16 }}>
                        <Tooltip
                          title={
                            !this.verified("modify_deployment") &&
                            "You don't have any permission."
                          }
                        >
                          <Button
                            type="primary"
                            onClick={this.showCreateModal}
                            disabled={!this.verified("modify_deployment")}
                          >
                            <Icon type="plus" theme="outlined" /> New Deployment
                        </Button>
                        </Tooltip>
                      </div>
                      {memberLoading ? (
                        <center>
                          <Spin />
                        </center>
                      ) : (
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
                                    <div className="cards-deployment-history" key={i}>
                                      <Card >
                                        <Row>
                                          <Col lg={12} md={24}>
                                            <h3>{position.position}</h3>
                                            <p>{position.branch}</p>
                                            <p>{position.brand}</p>
                                            {/* <Tag color={position.color}>
                                            {position.status_name}
                                          </Tag> */}
                                            {
                                              position.disciplinary_actions.data.length !== 0
                                                ?
                                                (<u>
                                                  {
                                                    position.disciplinary_actions.ongoing !== 0 &&
                                                    (<span className="text-danger">{`${position.disciplinary_actions.ongoing} Resolved DA`}</span>)
                                                  }
                                                  {
                                                    position.disciplinary_actions.resolved !== 0 &&
                                                    (<span>{`${position.disciplinary_actions.resolved} Resolved DA`}</span>)
                                                  }
                                                </u>)
                                                : (<u>No DA</u>)
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
                                                      position.id,
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
                                              &nbsp;
                                        {/* {this.verified("modify_deployment") && (
                                          <a
                                            onClick={e =>
                                              this.showEditModal(position)
                                            }
                                          >
                                            <Icon
                                              type="edit"
                                              theme="outlined"
                                            />{" "}
                                            Edit
                                          </a>
                                        )} */}
                                              {/* <a
                                                onClick={e =>
                                                  this.showDisciplinaryModal(
                                                    deployment.id
                                                  )
                                                }
                                              >
                                                Disciplinary Actions
                                        </a> */}
                                            </p>
                                          </Col>
                                        </Row>
                                      </Card>
                                      <Card style={{ background: '#FAFBFC' }}>
                                        <Row gutter={16}>
                                          <Col lg={12} md={24}>
                                            <List
                                              itemLayout="vertical"
                                              dataSource={employment_history}
                                              renderItem={item => (
                                                <div>
                                                  <Row>
                                                    <Col span={15}><span className="text-grey">{item.date_start} - {item.date_end}</span></Col>
                                                    <Col span={9}>
                                                      <Tag color={item.color}>{item.status}</Tag>
                                                    </Col>
                                                  </Row>
                                                  <Divider />
                                                </div>
                                              )}
                                            >
                                            </List>
                                            <p><b>Work Life Balance</b></p>
                                            <span className="text-grey">Reason for leaving remarks/description asdfa asdf sad asdf ad</span>
                                          </Col>
                                          <Col lg={12} md={24}>
                                            <div
                                              className="text-grey"
                                            >
                                              <span
                                                style={{
                                                  fontWeight: 500,
                                                  fontSize: '15px',
                                                }}
                                              >Disciplinary Actions</span>
                                              <span
                                                className="pull-right"
                                                onClick={e =>
                                                  this.showDisciplinaryModal(
                                                    deployment.id
                                                  )
                                                }>Add</span>
                                            </div>

                                            <List
                                              itemLayout="vertical"
                                              dataSource={sample_da}
                                              renderItem={item => (
                                                <div>
                                                  <Row>
                                                    <Col span={6}><span><b>{item.date}</b></span></Col>
                                                    <Col span={3}>
                                                      {
                                                        item.da === 1 ? (<Icon type="check" style={{ color: '#F9575C' }} />) :
                                                          (<Icon type="clock-circle" style={{ color: '#128CEE' }} />)
                                                      }

                                                    </Col>
                                                    <Col span={15}><span><b>{item.da_title}</b></span></Col>
                                                  </Row>
                                                  <Divider />
                                                </div>
                                              )}
                                            >
                                            </List>

                                            {/* <Divider /> */}
                                          </Col>
                                        </Row>
                                      </Card>
                                    </div>
                                  ))}
                                </Timeline.Item>
                              ))}
                            {this.verified("modify_deployment") &&
                              (workHistory && workHistory.length !== 0 && (
                                <Timeline.Item
                                  dot={
                                    <Icon
                                      type="plus-circle"
                                      style={{
                                        fontSize: "18px"
                                      }}
                                    />
                                  }
                                >
                                  <a onClick={this.showCreateModal}>
                                    New Deployment
                              </a>
                                </Timeline.Item>
                              ))}
                          </Timeline>
                        )}
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={6}
                      xl={6}
                      className="quick-links-container"
                    >
                      <h2>General Details</h2>
                      <GeneralDetails
                        member={member}
                        user={user}
                        onSave={this.props.updateMember}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </PageHeaderLayout>
          </div>

          <EndModal
            cwhId={this.state.selectedId}
            clientId={this.state.clientId}
            memberId={member.id}
            user={user}
            isLoading={memberLoading}
            visible={this.state.endModalVisible}
            onCancel={this.handleClose}
            onSave={this.props.endWork}
            reasonOptions={reasons}
            statusOptions={statuses}
          />

          <Modal
            visible={this.state.createModalVisible}
            onCancel={this.handleClose}
            title="Add New Deployment"
            content={
              <CreateForm
                onSave={this.handleCreate}
                data={this.state.selected}
                getBrands={this.props.getClientBrandsRequest}
                getBranches={this.props.getBranchesByBrands}
                {...this.props}
              />
            }
          />

          <Modal
            visible={this.state.editModalVisible}
            onCancel={this.handleClose}
            title="Update Deployment"
            content={
              <EditForm
                onCancel={this.handleClose}
                deployment={this.state.deployment}
                onSave={this.handleUpdate}
                data={this.state.selected}
                getBrands={this.props.getClientBrandsRequest}
                getBranches={this.props.getBranchesByBrands}
                {...this.props}
              />
            }
          />

          <Modal
            visible={this.state.disciplinaryModalVisible}
            onCancel={this.handleClose}
            title="Disciplinary Action"
            content={
              <DisciplinaryForm
                onCancel={this.handleClose}
                onSave={this.handleCreateDisciplinary}
                bwh_id={this.state.selected_bwh}
              // deployment={this.state.deployment}
              // data={this.state.selected}
              // getBrands={this.props.getClientBrandsRequest}
              // getBranches={this.props.getBranchesByBrands}
              // {...this.props}
              />
            }
          />
        </div>
      );
  }
}

export default Page;
