import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import StatusCircle from "../../../../../../commons/StatusCircle";

import PageHeaderLayout from "../../../../../../commons/PageHeaderLayout";
import DeleteModal from "../../../../../../commons/DeleteModal";
import AddModal from "../../../../../../commons/Modal";
import {
  Table,
  Row,
  Col,
  Select,
  Input,
  Button,
  Switch,
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
const Option = Select.Option;

const CreateForm = Form.create()(props => {
  const { form, list, userGroup, onSave, isLoading, addEmail } = props;

  const okHandle = () => {
    form.validateFields(['email'], (err, fieldsValue) => {
      if (err) return;
      form.resetFields(['email']);
      addEmail(fieldsValue['email']);
    });
  };

  const invite = () => {
    form.validateFields(['user_group_id'], (err, fieldsValue) => {
      if (list.length === 0) {
        form.setFields({
          email: {
            value: null,
            errors: [new Error('Please invite an email')]
          }
        })
      }
      if (err) return;
      onSave(fieldsValue['user_group_id'], list)
    });
  }

  return (
    <Form layout="vertical">
      <Row gutter={8}>
        <Col span={24}>
          <p>
            Enter email addresses below and we'll send them invites over email
            with instructions on how to set up their own account.
          </p>
        </Col>

        <Col span={24} style={{ marginBottom: "10px" }}>
          <FormItem>
            {
              form.getFieldDecorator("user_group_id", {
                rules: [
                  { required: true, message: "Please select User Group" }
                ]
              })(
                <Select
                  showSearch
                  notFoundContent={
                    isLoading ? (
                      <center>
                        <Spin />
                      </center>
                    ) : null
                  }
                  style={{ width: "100%" }}
                  placeholder="User Group"
                >
                  {userGroup &&
                    userGroup.map((item, key) => (
                      <Option key={key} value={item.id}>
                        {item.name}
                      </Option>
                    ))}
                </Select>
              )
            }
          </FormItem>
        </Col>

        <Col xl={18} md={12} sm={24} xs={24}>
          <FormItem>
            {form.getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  required: true,
                  validator: (rules, value, done) => {
                    if (!value) {
                      done("Please invite an email")
                    }
                    else {
                      if (list.indexOf(value) !== -1) {
                        done("Email already added");
                      }
                    }
                    done();
                  }
                }
              ]
            })(<Input placeholder="Enter an email to invite" />)}
          </FormItem>
        </Col>

        <Col xl={6} md={12} sm={24} xs={24}>
          <Button onClick={okHandle} style={{ width: "100%" }}>
            Add
          </Button>
        </Col>

        <Col span={24}>
          <List
            className="invite-user-list-container"
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar>
                      {item.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  title={item}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Button
        type="primary"
        onClick={invite}
        style={{ width: "100%" }}
        loading={isLoading}
      >
        Send Invites
      </Button>
    </Form>
  );
});

class Page extends Component {
  state = {
    selectedId: null,
    filters: {
      group_id: "",
      limit: ""
    },
    deleteModalVisible: false,
    addModalVisible: false,
    inviteUserList: []
  };

  componentDidMount() {
    this.props.getUsersRequest({});
    this.props.getAllUserGroupsRequest();
  }

  componentDidUpdate() {
    const { toast } = this.props;
    if (!!toast) {
      this.props.removeToast();
      switch (toast.type) {
        case "success":
          message.success(toast.message, 2, () => {
            this.handleClose();
            this.props.getUsersRequest({});
            this.setState({ inviteUserList: [] })
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

  showAddModal = () => {
    this.setState({
      addModalVisible: true
    });
  };

  // handleDelete = () => {
  //   let id = this.state.selectedId;
  //   this.props.deleteReason(id, { status: "published" });
  //   this.setState({
  //     deleteModalVisible: false
  //   });
  // };

  handleAddEmail = email => {
    this.setState({
      inviteUserList: [...this.state.inviteUserList, email]
    });
  };

  handleInvite = (userGroup, emails) => {
    let body = {
      emails,
      inviter: this.props.user
    };
    this.props.sendInviteRequest(userGroup, body);
  };

  onChangeFilter = (name, value) => {
    let filters = this.state.filters;
    filters[name] = value;
    this.setState({ filters }, () =>
      this.props.getUsersRequest(this.state.filters)
    );
  };

  render() {
    const { users, users_meta, userGroups, isLoading } = this.props;

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        width: "5%"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "25%",
        render: (text, record) => (
          <div className="reference-data">
            <div className="title">{record.name}</div>
            <div className="sub-title">{record.email}</div>
          </div>
        )
      },
      {
        title: "User Group",
        dataIndex: "group_name",
        key: "group_name",
        width: "20%",
        render: (text, record) => (
          <Fragment>
            <StatusCircle color={record.color} />
            {text}
          </Fragment>
        )
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: "5%",
        render: () => <Switch defaultChecked />
      },
      {
        title: "Last Modified",
        dataIndex: "last_modified_at",
        key: "last_modified_at",
        width: "20%",
        render: (text, record) => (
          <div className="reference-data">
            <p className="title">{text}</p>
            <p className="sub-title">{record.updated_by}</p>
          </div>
        )
      },
      {
        title: "",
        dataIndex: "action",
        key: "action",
        width: "15%",
        render: (text, record) => {
          return (
            <div className="table-action-container">
              <NavLink to={`/users/edit/${record.id}`}>
                <Icon type="edit" />
              </NavLink>
              {/* <Divider type="vertical" />
              <a onClick={() => this.showDeleteModal(record.id)}>
                <Icon type="delete" />
              </a> */}
            </div>
          );
        }
      }
    ];

    const pageHeaderContent = (
      <Row gutter={16}>
        <Col span={24}>
          <h2 className="pageHeaderContent">Profile</h2>
        </Col>
      </Row>
    );

    return (
      <PageHeaderLayout content={pageHeaderContent} breadcrumbList={[]}>
        <div style={{ margin: "10px 150px" }}>
          <Row gutter={16} style={{ marginBottom: "10px" }}>
            <Col span={12}>
              <span className="user-title">
                Users
                <Divider type="vertical" />
                <span className="user-subtitle">
                  {userGroups && userGroups.length} User Group
                </span>
              </span>
              <Select
                placeholder="User Groups"
                style={{ width: 150 }}
                onChange={group_id => this.onChangeFilter("group_id", group_id)}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="">All User Group</Option>
                {userGroups &&
                  userGroups.map(userGroup => (
                    <Option key={userGroup.id} value={userGroup.id}>
                      {userGroup.name}
                    </Option>
                  ))}
              </Select>
            </Col>

            <Col span={8}>
              <Input.Search
                placeholder="Search by Name, Email or User ID"
                onSearch={q => this.props.getUsersRequest({ q })}
              />
            </Col>
            <Col span={4}>
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={this.showAddModal}
              >
                <Icon type="mail" />
                Invite New
              </Button>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Table
                pagination={{
                  ...users_meta,
                  onShowSizeChange: (current, limit) =>
                    this.onChangeFilter("limit", limit),
                  showSizeChanger: true,
                  onChange: page => this.props.getUsersRequest({ page }),
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                }}
                columns={columns}
                dataSource={users}
                rowKey={record => record.id}
                loading={isLoading}
                style={{ background: "#fff" }}
              />
            </Col>
          </Row>

          <DeleteModal
            visible={this.state.deleteModalVisible}
            onOk={this.handleDelete}
            onCancel={this.handleClose}
            title="Are you sure?"
            content="Once deleted, you will not be able to recover this user"
          />

          <AddModal
            visible={this.state.addModalVisible}
            onCancel={this.handleClose}
            title="Invite New Members"
            content={
              <CreateForm
                addEmail={this.handleAddEmail}
                onSave={this.handleInvite}
                list={this.state.inviteUserList}
                isLoading={isLoading}
                userGroup={userGroups}
              />
            }
          />
        </div>
      </PageHeaderLayout>
    );
  }
}

export default Page;
