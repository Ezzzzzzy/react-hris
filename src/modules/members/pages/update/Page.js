import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Breadcrumb, Button, Card, Col, Form, Input, Row, Spin } from "antd";
import LoadingComponent from "../../../../commons/loader";

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
const FormItem = Form.Item;

class Page extends Component {
  constructor(props) {
    super(props);
    const id = props.match.params.id;
    props.getProfile(id);

    this.state = {
      required: false,
      error: []
    };
  }

  handleSubmit = (e, id) => {
    e.preventDefault();
    const { form, updateMember } = this.props;

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
        updateMember(id, body);
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

  upperFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  render() {
    const { actionType, form, isLoading, profile } = this.props;
    const loading = !Object.keys(profile ? profile : {}).length;

    if (loading) {
      return <LoadingComponent isLoading={loading} />;
    }

    let full_name =
      !loading &&
      `${this.upperFirstLetter(profile.first_name)} ${
        profile.middle_name ? profile.middle_name : ""
      } ${this.upperFirstLetter(profile.last_name)}`;

    if (actionType.type === "UPDATE_MEMBERS_SUCCESS") {
      return <Redirect to={`/members/${actionType.id}`} />;
    }

    const pageHeaderContent = (
      <h1 className="pageHeaderContent">Update {full_name}'s Profile</h1>
    );

    const breadcrumbList = [
      {
        title: "Members",
        url: "/members"
      },
      {
        title: full_name,
        url: `/members/${!loading && profile.id}`
      },
      {
        title: "Update Member"
      }
    ];

    return (
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
                <Col {...formColProps}>
                  <Form layout="vertical">
                    <Row gutter={16} style={{ margin: "16px 0" }}>
                      <Col {...sectionHeaderColProps}>
                        <h2 className="section-header">Old Member ID</h2>
                      </Col>
                      <Col {...sectionContentColProps}>
                        <FormItem>
                          {form.getFieldDecorator("existing_member_id", {
                            rules: [
                              {
                                required: true,
                                message: "Old Member ID is required"
                              }
                            ],
                            initialValue: profile.existing_member_id
                          })(
                            <Input
                              style={{ width: 250 }}
                              placeholder="Old Member ID"
                            />
                          )}
                        </FormItem>
                      </Col>
                    </Row>
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
                            form={this.props.form}
                            member={profile}
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
                            member={profile}
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
                          form={this.props.form}
                          error={this.state.error}
                          member={profile}
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
                          form={this.props.form}
                          error={this.state.error}
                          emp_history_data={profile.emp_history_data}
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
                          form={this.props.form}
                          error={this.state.error}
                          family_data={profile.family_data}
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
                          form={this.props.form}
                          error={this.state.error}
                          emergency_data={profile.emergency_data}
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
                          form={this.props.form}
                          error={this.state.error}
                          references_data={profile.references_data}
                        />
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24} className="actions-container">
                      <Button
                        type="primary"
                        onClick={e => this.handleSubmit(e, profile.id)}
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
