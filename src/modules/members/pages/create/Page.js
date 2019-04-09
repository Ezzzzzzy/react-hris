import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Card, Form, Breadcrumb, Button, Spin } from "antd";

import {
  sectionHeaderColProps,
  sectionContentColProps,
  formColProps,
  quickLinkColProps
} from "./column-props";

import cities from "../city.js";
import EducationalAttainmentForm from "./modules/Education";
import EmploymentHistoryForm from "./modules/EmploymentHistory";
import FamilyBackgroundForm from "./modules/FamilyBackground";
import EmergencyContactForm from "./modules/EmergencyContact";
import CharacterReferenceForm from "./modules/CharacterReference";
import GovernmentNumbersForm from "./modules/GovernmentNumbers";
import PersonalInformationForm from "./modules/PersonalInformation";

import "./index.css";

import PageHeaderLayout from "../../../../commons/PageHeaderLayout";

class Page extends Component {
  state = {
    required: false,
    error: [],
    isLoading: false,
    permissions: []
  };

  static getDerivedStateFromProps(props, state) {
    const { isLoading } = props;
    return { isLoading };
  }

  handleSubmit = (e, type) => {
    e.preventDefault();
    const { form, createMember } = this.props;
    form.validateFields((errors, fields) => {
      if (!errors) {
        const body = {
          ...fields,
          telephone_number: fields["telephone_number"].filter(
            value => value.number !== undefined
          ),
          mobile_number: fields["mobile_number"].filter(
            value => value.number !== undefined
          ),
          birthdate: fields["birthdate"].format("YYYY-MM-DD")
        };

        if (type === "addAnother") {
          form.resetFields();
        }

        createMember(body);
      } else {
        let collection = [];
        for (let error in errors) {
          if (error.indexOf("_data") > 1) {
            collection.push(error);
          }
        }

        if (collection.length !== 0) {
          this.setState({ error: collection });
        }

        window.scroll(0, 0);
      }
    });
  };

  permissionExists() {
    let exists = this.props.permissions
      .map(val => val.name)
      .indexOf("add_member");

    return exists === -1 ? true : false;
  }

  render() {
    const { actionType, form, user } = this.props;

    if (this.permissionExists()) {
      return <Redirect to={`/members`} />;
    }

    if (actionType.type === "CREATE_MEMBERS_SUCCESS") {
      return <Redirect to={`/members/${actionType.id}`} />;
    }

    const pageHeaderContent = (
      <h1 className="pageHeaderContent">Add New Member</h1>
    );

    const breadcrumbList = [
      {
        title: "Members",
        url: "/members"
      },
      {
        title: "Add New Member"
      }
    ];

    form.getFieldDecorator("last_modified_by", { initialValue: user.name });

    return (
      <div>
        <Spin spinning={this.state.isLoading}>
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
                        <h2 className="section-header">Personal Information</h2>
                        <p className="help-text">
                          Add at least one contact detail - either tel number,
                          mobile number or any of the email addresses
                        </p>
                      </Col>
                      <Col {...sectionContentColProps}>
                        <Card>
                          <PersonalInformationForm
                            form={form}
                            cities={cities}
                          />
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
                          <GovernmentNumbersForm
                            getFieldDecorator={form.getFieldDecorator}
                          />
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
                        <EducationalAttainmentForm
                          form={form}
                          error={this.state.error}
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
                        <EmploymentHistoryForm
                          form={form}
                          error={this.state.error}
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
                        <FamilyBackgroundForm
                          form={form}
                          error={this.state.error}
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
                        <EmergencyContactForm
                          form={form}
                          error={this.state.error}
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
                        <CharacterReferenceForm
                          form={form}
                          error={this.state.error}
                        />
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24} className="actions-container">
                      {/* <Button
                        type="primary"
                        onClick={e => this.handleSubmit(e, "addAnother")}
                      >
                        Save and Add Another
                      </Button> */}
                      <Button
                        type="primary"
                        onClick={e => this.handleSubmit(e, "saveProfile")}
                      >
                        Save Profile
                      </Button>
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
        </Spin>
      </div>
    );
  }
}

export default Form.create()(Page);
