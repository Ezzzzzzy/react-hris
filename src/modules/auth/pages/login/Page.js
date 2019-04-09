import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, Row, Col, Spin, Card } from "antd";

import "./index.css";

const FormItem = Form.Item;

class Page extends Component {
  static displayName = "LoginPage";

  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired
  };

  state = {
    forgotPasswordModal: false,
    alertVerifyEmail: false
  };

  handleClose = () => {
    this.setState({
      alertVerifyEmail: false
    });
  };

  showModal = () => {
    this.setState({
      forgotPasswordModal: true
    });
  };

  handleCancel = e => {
    this.setState({
      forgotPasswordModal: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const credentials = {
          grant_type: "password",
          username: values.username,
          password: values.password
        };

        this.props.login(credentials);
      }
    });
  };

  render() {
    const {
      isAuthenticated,
      isLoading,
      form: { getFieldDecorator }
    } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/members" />;
    }

    const antIcon = (
      <Icon type="loading" style={{ fontSize: "5em", color: "#D20F84" }} spin />
    );

    return (
      <div className="login-container">
        <Spin spinning={isLoading} indicator={antIcon}>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 10, offset: 7 }}
              lg={{ span: 8, offset: 8 }}
              className="login-form"
            >
              <Card
                className="auth-container"
                actions={[<span>Forgot Password?</span>]}
              >
                <Form
                  className="auth-form"
                  layout="vertical"
                  onSubmit={this.handleSubmit}
                >
                  <h1 className="text-center">People Serve</h1>
                  <FormItem label="Email">
                    {getFieldDecorator("username", {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    })(<Input placeholder="Email" disabled={isLoading} />)}
                  </FormItem>
                  <FormItem label="Password">
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    })(
                      <Input
                        type="password"
                        placeholder="Password"
                        disabled={isLoading}
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    <Row gutter={8}>
                      <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 24 }}
                      >
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                        >
                          Sign In
                        </Button>
                      </Col>
                    </Row>
                  </FormItem>
                </Form>
              </Card>
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Page);

export default WrappedNormalLoginForm;
