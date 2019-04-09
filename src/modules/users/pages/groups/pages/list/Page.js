import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PageHeaderLayout from "../../../../../../commons/PageHeaderLayout";
import AddModal from "../../../../../../commons/Modal";
import {
  Table,
  Row,
  Col,
  Input,
  Button,
  // Switch,
  Icon,
  Form,
  Divider,
  List,
  Spin,
  Avatar,
  message
} from "antd";

import "./index.css";

const FormItem = Form.Item;

const CreateForm = Form.create()(
  class CreateForm extends Component {
    state = {
      color: ["#1A91EB", "#84B800", "#DA932C", "#F86B67", "#636363", "#7F8FA4"],
      inviteList: []
    };

    okHandle = e => {
      const { form } = this.props;
      const { color, inviteList } = this.state;
      e.preventDefault();

      form.validateFields((err, values) => {
        if (!err) {
          const body = {
            ...values,
            avatar: values.email.charAt(0).toUpperCase(),
            color: color[Math.floor(Math.random() * color.length)]
          };

          this.setState({
            inviteList: [...inviteList, body]
          });

          form.resetFields();
        }
      });
    };

    sendInvite = () => {
      let inviteList = this.state.inviteList.map(val => val.email);
      let body = {
        emails: inviteList,
        inviter: this.props.user
      };
      this.setState({ inviteList: [] });
      this.props.onSave(this.props.roleId, body);
    };

    render() {
      const { inviteList } = this.state;
      const { form, isLoading } = this.props;

      return (
        <Form layout="vertical">
          <Spin spinning={isLoading}>
            <Row gutter={8}>
              <Col span={24}>
                <p>
                  Enter email addresses below and we'll send them invites over
                  email with instructions on how to set up their own account.
                </p>
              </Col>
              <Col xl={18} md={12} sm={24} xs={24}>
                <FormItem>
                  {form.getFieldDecorator("email", {
                    rules: [
                      {
                        required: true,
                        validator: (rules, value, done) => {
                          const emails = this.state.inviteList.map(
                            val => val.email
                          );
                          if (emails.indexOf(value) !== -1) {
                            done("Email already added.");
                          }
                          done();
                        }
                      },
                      {
                        type: "email",
                        message: "Enter a valid email"
                      }
                    ]
                  })(<Input placeholder="Enter an email to invite" />)}
                </FormItem>
              </Col>

              <Col xl={6} md={12} sm={24} xs={24}>
                <Button
                  onClick={this.okHandle}
                  style={{ width: "100%" }}
                  disabled={!form.getFieldValue("email")}
                >
                  Add
                </Button>
              </Col>
              <Divider />
              <Col span={24}>
                <List
                  className="invite-user-list-container"
                  itemLayout="horizontal"
                  dataSource={inviteList}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar style={{ backgroundColor: item.color }}>
                            {item.avatar}
                          </Avatar>
                        }
                        title={item.email}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>

            <Button
              type="primary"
              style={{ width: "100%" }}
              onClick={this.sendInvite}
              disabled={inviteList.length === 0 ? true : false}
            >
              Send Invite
            </Button>
          </Spin>
        </Form>
      );
    }
  }
);

class Page extends Component {
  state = {
    title: "",
    roleId: "",
    selectedId: null,
    deleteModalVisible: false,
    addModalVisible: false,
    loading: false
  };

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     loading: props.isUserLoading,
  //     addModalVisible:
  //       props.actionType.type === "INVITE_USERS_SUCCESS"
  //         ? false
  //         : state.addModalVisible
  //   };
  // }

  componentDidMount() {
    this.props.getUserGroupsRequest();
  }

  componentDidUpdate() {
    const { toast } = this.props;
    if (!!toast) {
      this.props.removeToast();
      switch (toast.type) {
        case "success":
          message.success(toast.message, 2, () => {
            this.handleClose();
          });
          break;
        case "error":
          message.error(toast.message, 3, () => {
            this.props.removeToast();
          });
          break;
        default:
          break;
      }
    }
  }

  handleClose = () => {
    this.setState({ deleteModalVisible: false, addModalVisible: false });
  };

  showDeleteModal = id => {
    this.setState({
      selectedId: id,
      deleteModalVisible: true
    });
  };

  showAddModal = (title, roleId) => {
    this.setState({
      title,
      roleId,
      addModalVisible: true
    });
  };

  handleDelete = () => {
    // let id = this.state.selectedId;
    // this.props.deleteReason(id, { status: "published" });
    this.setState({
      deleteModalVisible: false
    });
  };

  handleSave = (id, body) => {
    this.props.sendInviteRequest(id, body);
  };

  permissionExists() {
    let exists = this.props.permissions
      .map(val => val.name)
      .indexOf("system_users_full_access");

    return exists === -1 ? true : false;
  }

  render() {
    const { title, roleId, addModalVisible } = this.state;
    const { userGroups, meta, total, user, isLoading } = this.props;

    if (this.permissionExists()) {
      return <Redirect to="members" />;
    }

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        width: "7%"
      },
      {
        title: "User Group",
        dataIndex: "name",
        key: "name",
        width: "25%",
        render: (text, record) => (
          <div className="reference-data">
            <p className="sub-title">{record.created_by}</p>
            <p className="title">{text}</p>
          </div>
        )
      },
      {
        title: "Clients",
        dataIndex: "clients",
        key: "clients",
        width: "10%"
      },
      {
        title: "Members",
        dataIndex: "members",
        key: "members",
        width: "10%"
      },
      // {
      //   title: "Status",
      //   dataIndex: "status",
      //   key: "status"
      //   // render: () => <Switch defaultChecked />
      // },
      {
        title: "Last Modified",
        dataIndex: "updated_by",
        key: "updated_by",
        render: (text, record) => (
          <div className="reference-data">
            <p className="title">{record.updated_at}</p>
            <p className="sub-title">{record.updated_by}</p>
          </div>
        )
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => {
          return (
            <div className="table-action-container">
              <Button
                style={{
                  background: "#128CEE",
                  borderColor: "#0b81e2",
                  color: "white"
                }}
                onClick={e => this.showAddModal(record.name, record.id)}
              >
                <Icon type="mail" /> Invite
              </Button>
              <Divider type="vertical" />
              <Link to={`/user-groups/${record.id}/edit`}>
                <Icon type="edit" className="link-icon" />
              </Link>
              {/* <Divider type="vertical" /> */}
              {/* <a onClick={() => this.showDeleteModal(record.id)}>
                <Icon type="delete" className="link-icon" />
              </a> */}
            </div>
          );
        }
      }
    ];

    const pageHeaderContent = (
      <Row gutter={16}>
        <Col span={24}>
          <h2 className="pageHeaderContent">User Groups</h2>
        </Col>
      </Row>
    );

    return (
      <PageHeaderLayout content={pageHeaderContent} breadcrumbList={[]}>
        <div style={{ margin: "10px 150px" }}>
          <Row gutter={16} style={{ marginBottom: "10px" }}>
            <Col span={12}>
              <span className="user-title">
                User Groups
                <Divider type="vertical" />
                <span className="user-subtitle">
                  {total && total.length} User Groups
                </span>
              </span>
            </Col>

            <Col span={8}>
              <Input.Search
                placeholder="Search by Group Name or ID"
                onSearch={q => this.props.getUserGroupsRequest({ q })}
              />
            </Col>
            <Col span={4}>
              <Link to="/user-groups/create">
                <Button type="primary" style={{ width: "100%" }}>
                  <Icon type="plus" />
                  New User Group
                </Button>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Table
                pagination={{
                  ...meta,
                  onShowSizeChange: (current, limit) =>
                    this.props.getUserGroupsRequest({ limit }),
                  showSizeChanger: true,
                  onChange: page => this.props.getUserGroupsRequest({ page }),
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                }}
                sorter={true}
                columns={columns}
                rowKey="id"
                dataSource={userGroups}
                style={{ background: "#fff" }}
                loading={isLoading}
              />
            </Col>
          </Row>

          {/* <DeleteModal
            visible={deleteModalVisible}
            onOk={this.handleDelete}
            onCancel={this.handleClose}
            title="Are you sure?"
            content="Once deleted, you will not be able to recover this user group"
          /> */}

          <AddModal
            visible={addModalVisible}
            onCancel={this.handleClose}
            title={`Invite to ${title}`}
            content={
              <CreateForm
                onSave={this.handleSave}
                isLoading={this.state.loading}
                roleId={roleId}
                user={user}
              />
            }
          />
        </div>
      </PageHeaderLayout>
    );
  }
}

export default Page;
