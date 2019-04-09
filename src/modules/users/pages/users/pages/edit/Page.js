import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import { Row, Col, Form, Input, Select, Button, Avatar, Card, message } from "antd";

import FormModal from "../../../../../../commons/Modal";
import PageHeaderLayout from "../../../../../../commons/PageHeaderLayout";

const FormItem = Form.Item;
const Option = Select.Option;

class Page extends Component {
  state = {
    selectedId: null,
    passwordModalVisible: false,
    adminModalVisible: false,
    redirect: false,
    formData: {
      user_name: '',
      user_email: '',
      user_password: '',
      user_mobile_number: '',
      user_position: '',
      user_role_id: '',
    }
  };

  componentDidMount() {
    this.props.getSingleUserRequest(this.props.match.params.id)
    this.handleUpdateState()
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.props.userData) !== JSON.stringify(prevProps.userData)) {
      this.handleUpdateState();
    }
    const { toast } = this.props;
    if (!!toast) {
      switch (toast.type) {
        case "success":
          message.success(toast.message, 2, () => {
            this.props.removeToast();
            this.handleClose();
            this.props.getSingleUserRequest(this.props.match.params.id)
            if (this.props.userId === parseInt(this.props.match.params.id, 10)) {
              message.warning("Please login again...", 2, () => {
                this.props.logout(this.props.userId)
              })
            } else this.setState({ redirect: true })
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

  handleRedirect = () => {
    return <Redirect to={`/users`} />
  }

  handleUpdateState = () => {
    if (this.props.userData) {
      const { name, email, mobile_number, roles, position } = this.props.userData

      roles && console.log('roles: ', roles)

      let formData = {
        user_name: name,
        user_email: email,
        user_password: '',
        user_mobile_number: mobile_number,
        user_position: position,
        user_role_id: roles[0].id
      }
      this.setState({ formData })
    }
  }

  showPasswordModal = () => this.setState({ passwordModalVisible: true })
  showAdminModal = () => this.setState({ adminModalVisible: true })
  handleClose = () => {
    this.setState({ adminModalVisible: false, passwordModalVisible: false });
  };

  handlePassword = (data) => {
    let formData = this.state.formData
    formData['user_password'] = data.new_password
    this.setState({ formData, passwordModalVisible: false })
  };

  handleFormData = (data) => this.setState({ formData: data }, () => this.showAdminModal())
  handleFormDataPassword = (data) => this.setState({ formData: data }, () => this.showPasswordModal())

  handleUpdate = (admin_password) => {
    let body = {
      admin_password,
      admin_email: this.props.admin_email,
      ...this.state.formData
    }
    this.props.updateUserRequest(this.props.userData.id, body)
  }

  render() {
    if (this.state.redirect) return <Redirect to="/users" />;

    const CreateForm = Form.create()(props => {
      const { formData, userGroups, form } = props
      const { getFieldDecorator, validateFields } = form

      const checkForm = () => {
        validateFields((err, fieldsValue) => {
          if (err) return;
          this.handleFormData(fieldsValue)
        });
      };

      const updatePassword = () => {
        validateFields((err, fieldsValue) => {
          this.handleFormDataPassword(fieldsValue)
        });
      }

      return (
        <Row>
          <Card>
            <Row>
              <h2>Update Profile</h2>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={6}>
                <Avatar
                  size={80}
                  style={{ color: "#fff", backgroundColor: "#F86B67" }}
                >
                  {formData.user_name && formData.user_name[0]}
                </Avatar>
              </Col>
              <Col xs={24} md={18}>
                <Form layout="vertical">
                  <Row gutter={8}>
                    <Col xs={24}>
                      <FormItem label="Name">
                        {
                          getFieldDecorator("user_name", {
                            rules: [
                              {
                                required: true,
                                message: "Name is required"
                              }
                            ],
                            initialValue: formData.user_name
                          })(
                            <Input placeholder="Name" />
                          )
                        }
                      </FormItem>
                    </Col>
                    <Col span={24}>
                      <FormItem label="Position">
                        {
                          getFieldDecorator("user_position", {
                            rules: [
                              {
                                required: true,
                                message: "Position is required"
                              }
                            ],
                            initialValue: formData.user_position
                          })(
                            <Input placeholder="Position" />
                          )
                        }
                      </FormItem>
                    </Col>
                    <Col span={24}>
                      <FormItem label="Mobile Number">
                        {
                          getFieldDecorator("user_mobile_number", {
                            rules: [
                              {
                                required: true,
                                message: "Mobile Number is required"
                              }
                            ],
                            initialValue: formData.user_mobile_number
                          })(
                            <Input placeholder="Mobile Number" />
                          )
                        }
                      </FormItem>
                    </Col>
                    <Col span={24}>
                      <FormItem label="User Group">
                        {
                          getFieldDecorator("user_role_id", {
                            rules: [
                              {
                                required: true,
                                message: "User Group is required"
                              }
                            ],
                            initialValue: formData.user_role_id
                          })(
                            <Select placeholder="User Group">
                              {
                                userGroups && userGroups.map(ug => <Option value={ug.id} key={ug.id}>{ug.name}</Option>)
                              }
                            </Select>
                          )
                        }
                      </FormItem>
                    </Col>
                    <Col span={24}>
                      <FormItem label="Email">
                        {
                          getFieldDecorator("user_email", {
                            rules: [
                              {
                                required: true,
                                message: "Email is required"
                              },
                              {
                                type: "email",
                                message: "Enter a valid email"
                              }
                            ],
                            initialValue: formData.user_email
                          })(<Input placeholder="Email" />)
                        }
                      </FormItem>
                    </Col>
                    <Col span={24}>
                      <Row gutter={16}>
                        <Col span={18}>
                          <FormItem label="Password">
                            {
                              getFieldDecorator("user_password", {
                                initialValue: formData.user_password
                              })(<Input placeholder="••••••••" disabled type="password" />)
                            }
                          </FormItem>
                        </Col>
                        <Col span={6}>
                          <Button
                            onClick={updatePassword}
                            type="primary"
                            style={{ marginTop: "28px", width: "100%" }}
                          >
                            Change
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card>
          <Row
            type="flex"
            align="end"
            gutter={8}
            style={{ margin: "10px 0" }}
          >
            <Col>
              <Button>
                <Link to="/users">
                  Cancel
                </Link>
              </Button>
            </Col>
            <Col>
              <Button type="primary" onClick={checkForm}>Save</Button>
            </Col>
          </Row>
        </Row>
      );
    });

    const PasswordForm = Form.create()(props => {
      const { getFieldDecorator, getFieldValue, validateFields } = props.form

      const okHandle = () => {
        validateFields((err, fieldsValue) => {
          if (err) return;
          // form.resetFields()
          props.onSave(fieldsValue);
        });
      };

      return (
        <Form layout="vertical">
          <Row>
            <Col>
              <FormItem label="Enter New Password">
                {
                  getFieldDecorator("new_password", {
                    rules: [
                      {
                        required: true,
                        message: "Password is required"
                      }
                    ]
                  })(<Input placeholder="Password" type="password" />)
                }
              </FormItem>
            </Col>
            <Col>
              <FormItem label="Enter New Password Again">
                {
                  getFieldDecorator("confirm_new_password", {
                    rules: [
                      {
                        required: true,
                        message: "Password is required"
                      }, {
                        validator: (rule, value, callback) => {
                          if (value && value !== getFieldValue('new_password')) {
                            callback('Password did not match');
                          } else callback();
                        }
                      }
                    ]
                  })(<Input placeholder="Password" type="password" />)
                }
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Button
              style={{ width: "100%" }}
              type="primary"
              onClick={okHandle}>
              Update Password
            </Button>
          </Row>
        </Form>
      );
    });

    const AdminForm = Form.create()(props => {
      const { getFieldDecorator, validateFields } = props.form

      const okHandle = () => {
        validateFields((err, fieldsValue) => {
          if (err) return;
          // form.resetFields()
          props.onSave(fieldsValue.admin_password);
        });
      };

      return (
        <Form layout="vertical">
          <Row>
            <Col>
              <FormItem label="Enter Admin Password">
                {
                  getFieldDecorator("admin_password", {
                    rules: [
                      {
                        required: true,
                        message: "Admin Password is required"
                      }
                    ]
                  })(<Input placeholder="Your Admin Password" type="password" />)
                }
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Button
              style={{ width: "100%" }}
              type="primary"
              onClick={okHandle}>
              Update User
            </Button>
          </Row>
        </Form>
      );
    });

    const pageHeaderContent = (
      <Row gutter={16}>
        <Col span={24}>
          <h1 className="pageHeaderContent">Users</h1>
        </Col>
      </Row>
    );

    return (
      <PageHeaderLayout content={pageHeaderContent} breadcrumbList={[]}>
        <Row type="flex" align="center">
          <Col xs={24} md={10}>
            <CreateForm
              formData={this.state.formData}
              userGroups={this.props.userGroups}
              onSave={this.handleUpdate}
            />
          </Col>
        </Row>

        <FormModal
          visible={this.state.passwordModalVisible}
          onCancel={this.handleClose}
          title="Update Password"
          content={<PasswordForm onSave={this.handlePassword} />}
        />
        <FormModal
          visible={this.state.adminModalVisible}
          onCancel={this.handleClose}
          title="Confirm Update"
          content={<AdminForm onSave={this.handleUpdate} />}
        />
      </PageHeaderLayout>
    );
  }
}

export default Page;
