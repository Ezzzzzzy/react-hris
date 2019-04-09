import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Input,
  Checkbox,
  Form,
  Radio,
  Switch,
  Icon,
  Divider,
  Spin,
  Button
  // List,
  // Avatar
} from "antd";

import "./index.css";

import PageHeaderLayout from "../../../../../../commons/PageHeaderLayout";
import {
  color,
  permission_client,
  permission_member,
  permission_system_users,
  permission_report,
  permission_system_settings
  // inviteUserList
} from "../data";
import userGroups from "../../../../reducers/user-groups";

const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxGroup = Checkbox.Group;

class Page extends Component {
  state = {
    counter: "",
    no_client_access: true,
    client_list: [],
    permissions: {
      members: [],
      client_permission: [],
      reports: [],
      users: [],
      settings: [],
      client_access: null
    },
    isLoading: false,
    statePermissions: [
      "members",
      "client_permission",
      "reports",
      "users",
      "settings"
    ]
  };

  static getDerivedStateFromProps(props, state) {
    console.log('state: ', state)
    const { client, isLoading, userGroup, userGroupClients } = props;
    let body = {};
    if (Object.keys(userGroup).length !== 0) {
      let clients = userGroupClients.map(val => val.id);

      let stateValues = [];
      let propsValues = userGroup.permissions
        .filter(value => value.type)
        .map(val => val.name)
        .concat(clients);

      Object.values(state.permissions).forEach(
        val => (stateValues = stateValues.concat(val))
      );

      body = {
        isLoading,
        client_list: client.map(val => ({
          label: val.client_name,
          value: val.id
        }))
      };

      if (clients.length !== 0) {
        body = {
          ...body,
          no_client_access: false
        };
      }

      if (stateValues.sort().join() !== propsValues.sort().join()) {

        let permissions = {};
        let checkPermission = 0;

        state.statePermissions.forEach(value => {
          if (state.permissions[value].length > 0) checkPermission++
          permissions[value] = state.permissions[value]
        });

        if (state.permissions.client_access !== null) {
          clients = state.permissions.client_access
        }

        if (checkPermission === 0) {
          state.statePermissions.forEach(value => {
            permissions[value] = userGroup.permissions
              .filter(val => val.type === value)
              .map(val => val.name);
          });
        }

        let no_client_access =
          permissions.client_permission.indexOf("no_access") === -1 ? true : false;

        body = {
          ...body,
          no_client_access,
          permissions: {
            ...permissions,
            client_access: clients
          }
        };
      }
      console.log('body: ', body)
    }
    return body;
  }

  componentDidMount() {
    const { match } = this.props;
    this.props.getAllClientRequest();
    this.props.getSingleUserGroup(match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    let clients = []
    if (this.props.userGroupClients) {
      clients = this.props.userGroupClients.map(val => val.id)
    }
    const preClients = prevProps.userGroupClients.map(val => val.id)

    if (JSON.stringify(this.props.userGroup.permissions.concat(clients))
      !== JSON.stringify(prevProps.userGroup.permissions.concat(preClients))) {

      let permissions = {}
      this.state.statePermissions.forEach(value => {
        permissions[value] = this.props.userGroup.permissions
          .filter(val => val.type === value)
          .map(val => val.name);
      });
      permissions['client_access'] = clients

      let no_client_access =
        permissions.client_permission.indexOf("no_access") === -1 ? true : false;
      this.setState({ permissions, no_client_access })
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, updateUserGroup } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        let permissions = values.permissions;
        permissions = this.removeNoAccess(permissions);

        const body = {
          ...values,
          permissions
        };

        updateUserGroup(this.props.userGroup.id, body);
      }
    });
  };

  removeNoAccess = permissions => {
    for (let key in permissions) {
      let arr = permissions[key];
      if (arr.indexOf("no_access") !== -1) {
        let index = arr.indexOf("no_access");
        permissions[key] = [...arr.slice(0, index), ...arr.slice(++index)];
      }
    }
    return permissions;
  };

  handlePermission = (val, propName) => {
    let permissions = Object.assign({}, this.state.permissions);
    console.log('fresh permissions: ', permissions)
    const { form } = this.props;

    val = !Array.isArray(val) ? [val] : val;

    if (propName === "client_permission") {
      if (val[0] === "no_access") {
        permissions.client_access = [];
      }
    }

    permissions = {
      ...permissions,
      [propName]: val
    };
    console.log('before false true', permissions)
    let no_client_access =
      permissions.client_permission.indexOf("no_access") === -1 ? false : true;

    console.log('handlePermissions: ', no_client_access)

    form.setFieldsValue({ permissions });

    this.setState({ permissions, no_client_access });
  };

  permissionExists() {
    let exists = this.props.permissions
      .map(val => val.name)
      .indexOf("system_users_full_access");

    return exists === -1 ? true : false;
  }

  render() {
    const { permissions } = this.state;
    const { form, actionType, isLoading, userGroup } = this.props;

    if (this.permissionExists()) {
      return <Redirect to="/members" />;
    }

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    if (actionType.type === "CREATE_USER_GROUPS_SUCCESS") {
      return <Redirect to={`/user-groups`} />;
    }

    const pageHeaderContent = (
      <Row gutter={16}>
        <Col span={24}>
          <h2 className="pageHeaderContent">User Groups</h2>
        </Col>
      </Row>
    );

    form.getFieldDecorator("permissions", {
      rules: [
        {
          required: true,
          type: "object",
          validator: (rules, value, done) => {
            let countPerKey = [];
            let keysWithNoAccess = [
              "client_permission",
              "reports",
              "users",
              "client_access",
              "settings"
            ];

            for (let key in value) {
              if (!keysWithNoAccess.includes(key)) {
                countPerKey.push({ [key]: value[key].length });
              }
            }

            countPerKey.forEach(val => {
              if (Object.values(val)[0] === 0) {
                done(Object.keys(val) + " is required!");
              }
            });

            done();
          }
        }
      ],
      initialValue: permissions
    });

    return (
      <PageHeaderLayout content={pageHeaderContent} breadcrumbList={[]}>
        <Spin spinning={isLoading}>
          <Row type="flex" align="center">
            {/* <Col span={24}>
              <Row> */}
            <Col span={14}>
              <Row gutter={16} style={{ marginTop: "15px" }}>
                <Card>
                  <h2>Update User Group</h2>
                  <Row gutter={16}>
                    <FormItem label="Name">
                      {form.getFieldDecorator("user-group.name", {
                        rules: [
                          {
                            required: true,
                            message: "User Group name is required"
                          }
                        ],
                        initialValue: userGroup && userGroup.name
                      })(<Input placeholder="Name" />)}
                    </FormItem>
                    <FormItem label="Description">
                      {form.getFieldDecorator("user-group.description", {
                        rules: [
                          {
                            required: true,
                            message: "Description is required"
                          }
                        ],
                        initialValue: userGroup && userGroup.description
                      })(<TextArea placeholder="Description" />)}
                    </FormItem>
                    <Row type="flex" gutter={16}>
                      <Col span={12}>
                        <FormItem label="Status Color">
                          {form.getFieldDecorator("user-group.status_color", {
                            rules: [
                              {
                                required: true,
                                message: "Please select a color"
                              }
                            ],
                            initialValue: "#1A91EB"
                          })(
                            <RadioGroup>
                              {color.map((val, i) => (
                                <RadioButton
                                  key={i}
                                  value={val}
                                  style={{
                                    backgroundColor: val,
                                    marginRight: "6px"
                                  }}
                                />
                              ))}
                            </RadioGroup>
                          )}
                        </FormItem>
                      </Col>
                      <Col>
                        <FormItem label="Status">
                          {form.getFieldDecorator("user-group.status", {
                            rules: [
                              {
                                required: true,
                                message: "Please select a color"
                              }
                            ],
                            valuePropName: "checked",
                            initialValue: !!userGroup.status
                          })(
                            <Switch
                              onChange={status =>
                                form.setFieldsValue({
                                  "user-group": { status }
                                })
                              }
                              checkedChildren={<Icon type="check" />}
                              unCheckedChildren={<Icon type="close" />}
                            />
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Row>
                </Card>
              </Row>
              <Row gutter={16} style={{ marginTop: "15px" }}>
                <Card>
                  <h2>Permissions</h2>
                  <Row gutter={16}>
                    <Col span={9}>
                      <h4>Members</h4>
                      <h5>View all by default</h5>
                    </Col>
                    <Col span={15}>
                      <Card style={{ backgroundColor: "#F8FAFC" }}>
                        {
                          <CheckboxGroup
                            options={permission_member}
                            value={permissions.members}
                            onChange={e => this.handlePermission(e, "members")}
                          />
                        }
                      </Card>
                    </Col>
                  </Row>
                  <Divider type="horizontal" />
                  <Row gutter={16}>
                    <Col span={9}>
                      <h4>Clients</h4>
                    </Col>
                    <Col span={15}>
                      <Card style={{ backgroundColor: "#F8FAFC" }}>
                        {
                          <RadioGroup
                            value={
                              permissions.client_permission &&
                                permissions.client_permission[0]
                                ? permissions.client_permission[0]
                                : "no_access"
                            }
                            onChange={e =>
                              this.handlePermission(
                                e.target.value,
                                "client_permission"
                              )
                            }
                          >
                            {permission_client.map((val, i) => (
                              <Radio
                                style={radioStyle}
                                value={val.value}
                                key={i}
                              >
                                {val.label}
                              </Radio>
                            ))}
                          </RadioGroup>
                        }
                      </Card>
                    </Col>
                  </Row>
                  <Divider type="horizontal" />
                  <Row gutter={16}>
                    <Col span={9}>
                      <h4>Generate Reports</h4>
                    </Col>
                    <Col span={15}>
                      <Card style={{ backgroundColor: "#F8FAFC" }}>
                        {
                          <RadioGroup
                            value={
                              permissions.reports && permissions.reports[0]
                                ? permissions.reports[0]
                                : "no_access"
                            }
                            onChange={e =>
                              this.handlePermission(e.target.value, "reports")
                            }
                          >
                            {permission_report.map((val, i) => {
                              return (
                                <Radio
                                  style={radioStyle}
                                  value={val.value}
                                  key={i}
                                >
                                  {val.label}
                                </Radio>
                              );
                            })}
                          </RadioGroup>
                        }
                      </Card>
                    </Col>
                  </Row>
                  <Divider type="horizontal" />
                  <Row gutter={16}>
                    <Col span={9}>
                      <h4>System Users</h4>
                    </Col>
                    <Col span={15}>
                      <Card style={{ backgroundColor: "#F8FAFC" }}>
                        {
                          <RadioGroup
                            value={
                              permissions.users && permissions.users[0]
                                ? permissions.users[0]
                                : "no_access"
                            }
                            onChange={e =>
                              this.handlePermission(e.target.value, "users")
                            }
                          >
                            {permission_system_users.map((val, i) => (
                              <Radio
                                style={radioStyle}
                                value={val.value}
                                key={i}
                              >
                                {val.label}
                              </Radio>
                            ))}
                          </RadioGroup>
                        }
                      </Card>
                    </Col>
                  </Row>
                  <Divider type="horizontal" />
                  <Row gutter={16}>
                    <Col span={9}>
                      <h4>System Settings</h4>
                    </Col>
                    <Col span={15}>
                      <Card style={{ backgroundColor: "#F8FAFC" }}>
                        {
                          <CheckboxGroup
                            options={permission_system_settings}
                            value={permissions.settings}
                            onChange={e => this.handlePermission(e, "settings")}
                          />
                        }
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </Row>
              <Row gutter={16} style={{ marginTop: "15px" }}>
                <Card>
                  <h2>Specific Client Access</h2>
                  <Col span={9}>
                    <h4>Select Clients</h4>
                    <Col span={14}>
                      <h5>
                        No selection gives the user access to all clients by
                        default
                      </h5>
                    </Col>
                  </Col>
                  <Col span={15}>
                    <Input.Search
                      placeholder="Client Name"
                      disabled={this.state.no_client_access}
                    />
                    <Card
                      style={{
                        backgroundColor: "#F8FAFC",
                        marginTop: "10px"
                      }}
                    >
                      {
                        <CheckboxGroup
                          options={this.state.client_list}
                          value={permissions.client_access}
                          disabled={this.state.no_client_access}
                          onChange={e =>
                            this.handlePermission(e, "client_access")
                          }
                        />
                      }
                    </Card>
                  </Col>
                </Card>
              </Row>
              <Row>
                <Col span={24} className="actions-container">
                  <Button type="primary" onClick={this.handleSubmit}>
                    Save Profile
                  </Button>
                </Col>
              </Row>
            </Col>

            {/* <Col span={9} style={{ marginTop: "15px" }}>
                  <h2>Invite New Members</h2>
                  <h5>
                    Enter email addresses below and we'll send them invites over
                    email with instructions on how to setup their own account
                  </h5>
                  <Row gutter={8}>
                    <Col span={16}>
                      <Input placeholder="Enter an email to invite" />
                    </Col>
                    <Col span={8}>
                      <Button style={{ width: "100%" }}>Add Email</Button>
                    </Col>
                  </Row>
                  <Row gutter={8} style={{ marginTop: "15px" }}>
                    <Col span={24}>
                      <Card>
                        {!inviteUserList ? (
                          <h3>No one to invite yet</h3>
                        ) : (
                          <Row>
                            <List
                              itemLayout="horizontal"
                              dataSource={inviteUserList}
                              renderItem={item => (
                                <List.Item>
                                  <List.Item.Meta
                                    avatar={
                                      <Avatar
                                        size="large"
                                        style={{ backgroundColor: item.color }}
                                      >
                                        {item.avatar}
                                      </Avatar>
                                    }
                                    title={item.email}
                                  />
                                </List.Item>
                              )}
                            />
                            <Button type="primary">
                              Send {inviteUserList.length} Invites
                            </Button>
                          </Row>
                        )}
                      </Card>
                    </Col>
                  </Row>
                </Col> */}
            {/* </Row> */}
            {/* </Col> */}
          </Row>
        </Spin>
      </PageHeaderLayout>
    );
  }
}

export default Form.create()(Page);
