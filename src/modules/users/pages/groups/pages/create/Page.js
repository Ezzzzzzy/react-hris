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

const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxGroup = Checkbox.Group;

class Page extends Component {
  state = {
    no_client_access: true,
    client_list: [],
    permissions: {
      members: [],
      client_permission: [],
      reports: [],
      users: [],
      settings: [],
      client_access: []
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (props.client) {
      return {
        client_list: props.client.map(val => ({
          label: val.client_name,
          value: val.id
        }))
      };
    }

    return {};
  }

  componentDidMount() {
    this.props.getAllClientRequest();

    const client_list = this.state.client_list.map(val => ({
      label: val.client_name,
      value: val.id
    }));

    this.setState({ client_list });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, createUserGroup } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        let permissions = values.permissions;
        let client_list = this.state.client_list.map(val => val.value);
        let enableClients =
          permissions.client_permission.indexOf("no_access") === -1
            ? true
            : false;

        permissions = this.removeNoAccess(permissions);

        if (permissions.client_access.length === 0) {
          permissions = {
            ...permissions,
            client_access: enableClients ? client_list : []
          };
        }

        const body = {
          ...values,
          permissions
        };

        createUserGroup(body);
      }
    });
  };

  removeNoAccess(permissions) {
    for (let key in permissions) {
      let arr = permissions[key];
      if (arr.indexOf("no_access") !== -1) {
        let index = arr.indexOf("no_access");
        permissions[key] = [...arr.slice(0, index), ...arr.slice(++index)];
      }
    }

    return permissions;
  }

  handlePermission = (val, propName) => {
    let permissions = Object.assign({}, this.state.permissions);
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

    let no_client_access =
      permissions.client_permission.indexOf("no_access") === -1 ? false : true;

    form.setFieldsValue({ permissions });
    this.setState({ permissions, no_client_access });
  };

  verified(permission) {
    let verified = [];

    permission = !Array.isArray(permission) ? [permission] : permission;

    permission.forEach(val => {
      if (this.props.permissions.map(val => val.name).indexOf(val) !== -1) {
        verified.push(1);
      } else verified.push(0);
    });

    return verified.indexOf(1) !== -1 ? true : false;
  }

  render() {
    const { permissions } = this.state;
    const { form, actionType, isLoading } = this.props;

    if (!this.verified("system_users_full_access")) {
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
            for (let key in value) {
              if (key !== "client_access") {
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
      initialValue: this.state.permissions
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
                  <h2>Create New User Group</h2>
                  <Row gutter={16}>
                    <FormItem label="Name">
                      {form.getFieldDecorator("user_group.name", {
                        rules: [
                          {
                            required: true,
                            message: "User Group name is required"
                          }
                        ]
                      })(<Input placeholder="Name" />)}
                    </FormItem>
                    <FormItem label="Description">
                      {form.getFieldDecorator("user_group.description", {
                        rules: [
                          {
                            required: true,
                            message: "Description is required"
                          }
                        ]
                      })(<TextArea placeholder="Description" />)}
                    </FormItem>
                    <Row type="flex" gutter={16}>
                      <Col span={12}>
                        <FormItem label="Status Color">
                          {form.getFieldDecorator("user_group.status_color", {
                            rules: [
                              {
                                required: true,
                                message: "Please select a color"
                              }
                            ]
                          })(
                            <RadioGroup>
                              {color.map((val, i) => {
                                return (
                                  <RadioButton
                                    key={i}
                                    value={val}
                                    style={{
                                      backgroundColor: val,
                                      marginRight: "6px"
                                    }}
                                  />
                                );
                              })}
                            </RadioGroup>
                          )}
                        </FormItem>
                      </Col>
                      <Col>
                        <FormItem label="Status">
                          {form.getFieldDecorator("user_group.status", {
                            rules: [
                              {
                                required: true,
                                message: "Please select a color"
                              }
                            ],
                            valuePropName: "checked",
                            initialValue: true
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
                            onChange={e =>
                              this.handlePermission(e.target.value, "reports")
                            }
                          >
                            {permission_report.map((val, i) => (
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
                      <h4>System Users</h4>
                    </Col>
                    <Col span={15}>
                      <Card style={{ backgroundColor: "#F8FAFC" }}>
                        {
                          <RadioGroup
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
