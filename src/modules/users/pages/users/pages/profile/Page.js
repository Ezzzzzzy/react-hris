import React, { Component } from "react";

import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Avatar,
  Card,
  message
}
  from "antd";

import FormModal from "../../../../../../commons/Modal";
import PageHeaderLayout from "../../../../../../commons/PageHeaderLayout";

const FormItem = Form.Item;
const Option = Select.Option;

class Page extends Component {
  state = {
    selectedId: null,
    passwordModalVisible: false,
    adminModalVisible: false,

    formData: {
      name: '',
      email: '',
      password: '',
      mobile_number: '',
      role_id: '',
      position: ''
    }
  };

  componentDidMount() {
    this.props.getSingleUserRequest(this.props.userId)
    this.handleUpdateState()
    if (parseInt(this.props.match.params.id, 10) !== this.props.userId) {
      message.warning("You are trying to access someone's profile")
      this.props.history.push(`/profile/${this.props.userId}`)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.props.userData) !== JSON.stringify(prevProps.userData)) {
      this.handleUpdateState();
    }
    console.log(this)
    const { toast } = this.props;
    if (!!toast) {
      switch (toast.type) {
        case "success":
          message.success(toast.message, 2, () => {
            this.props.removeToast();
            this.props.getSingleUserRequest(this.props.userId)
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

  handleUpdateState = () => {
    const { name, email, mobile_number, roles, position } = this.props.userData

    let formData = Object.assign({}, this.state.formData)

    formData = {
      ...formData,
      name,
      email,
      mobile_number,
      position,
      role_id: roles[0].id
    }
    this.setState({ formData })
  }

  showPasswordModal = () => this.setState({ passwordModalVisible: true })
  showAdminModal = () => this.setState({ adminModalVisible: true })

  handleClose = () => {
    this.setState({ adminModalVisible: false, passwordModalVisible: false });
  };

  handlePassword = (data) => {
    let formData = this.state.formData
    formData['password'] = data.new_password
    this.setState({ formData, passwordModalVisible: false })
  };

  handleUpdate = (formData) => {
    formData["password"] = this.state.formData.password
    this.setState({ formData }, () => {
      let data = Object.assign({}, this.state.formData)
      let body = {}
      let include = ["name", "email", "mobile_number", "password"]
      for (let key in data) {
        if (include.includes(key)) {
          if (key === "password") {
            if (data[key]) {
              body[key] = data[key]
            }
          } else {
            body[key] = data[key]
          }
        }
      }
      this.props.updateUserProfileRequest(this.props.match.params.id, body)
    })
  }

  render() {

    // if (parseInt(this.props.match.params.id, 10) === this.props.userId) {
    //   return <Redirect to={`/users/edit/${this.props.match.params.id}`} />
    // }

    const CreateForm = Form.create()(props => {
      const { formData, userGroups, form } = props
      const { getFieldDecorator, validateFields } = form

      const okHandle = () => {
        validateFields((err, fieldsValue) => {
          if (err) return;
          // form.resetFields()
          props.onSave(fieldsValue);
        });
      };

      return (
        <Row>
          <Card>
            <Row>
              <h2>Update Profile</h2>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={6}>
                <Avatar
                  size={90}
                  style={{ color: "#fff", backgroundColor: "#F86B67" }}
                >
                  {formData.name && formData.name[0]}
                </Avatar>
              </Col>
              <Col xs={24} md={18}>
                <Form layout="vertical">
                  <Row gutter={8}>
                    <Col xs={24}>
                      <FormItem label="Name">
                        {
                          getFieldDecorator("name", {
                            rules: [
                              {
                                required: true,
                                message: "Name is required"
                              }
                            ],
                            initialValue: formData.name
                          })(
                            <Input placeholder="Name" />
                          )
                        }
                      </FormItem>
                    </Col>
                    <Col span={24}>
                      <FormItem label="Position">
                        {
                          getFieldDecorator("position", {
                            initialValue: formData.position
                          })(
                            <Input placeholder="Position" disabled />
                          )
                        }
                      </FormItem>
                    </Col>
                    <Col span={24}>
                      <FormItem label="Mobile Number">
                        {
                          getFieldDecorator("mobile_number", {
                            rules: [
                              {
                                required: true,
                                message: "Mobile Number is required"
                              }
                            ],
                            initialValue: formData.mobile_number
                          })(
                            <Input placeholder="Mobile Number" />
                          )
                        }
                      </FormItem>
                    </Col>
                    <Col span={24}>
                      <FormItem label="User Group">
                        {
                          getFieldDecorator("role_id", {
                            initialValue: formData.role_id
                          })(
                            <Select placeholder="User Group" disabled>
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
                          getFieldDecorator("email", {
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
                            initialValue: formData.email
                          })(<Input placeholder="Email" />)
                        }
                      </FormItem>
                    </Col>
                    <Col span={24}>
                      <Row gutter={16}>
                        <Col span={18}>
                          <FormItem label="Password">
                            {
                              getFieldDecorator("password", {
                              })(<Input placeholder="Password" disabled type="password" />)
                            }
                          </FormItem>
                        </Col>
                        <Col span={6}>
                          <Button
                            onClick={this.showPasswordModal}
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
              <Button>Cancel</Button>
            </Col>
            <Col>
              <Button type="primary" onClick={okHandle}>Save</Button>
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
          props.onSave(fieldsValue);
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
                  })(<Input placeholder="Your Admin Password" />)
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
          <h1 className="pageHeaderContent">Profile</h1>
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
