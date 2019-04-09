import React from "react";
import { Col, Row, Input, Form, Select, DatePicker, Radio } from "antd";
import DynamicTextField from "../../../../../commons/DynamicTextField";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const PersonalInformation = props => {
  const { getFieldDecorator } = props.form;
  const { cities } = props;

  return (
    <Row gutter={8}>
      <Col xl={10} md={12} sm={24} xs={24}>
        <FormItem label="Last Name">
          {getFieldDecorator("last_name", {
            rules: [
              {
                required: true,
                message: "Last name is required"
              }
            ]
          })(<Input placeholder="Last Name" />)}
        </FormItem>
      </Col>
      <Col xl={10} md={12} sm={24} xs={24}>
        <FormItem label="First Name">
          {getFieldDecorator("first_name", {
            rules: [
              {
                required: true,
                message: "First name is required"
              }
            ]
          })(<Input placeholder="First Name" />)}
        </FormItem>
      </Col>
      <Col xl={4} md={12} sm={24} xs={24}>
        <FormItem label="Name Ext.">
          {getFieldDecorator("name_ext")(<Input placeholder="Name Ext." />)}
        </FormItem>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="Middle Name">
          {getFieldDecorator("middle_name")(
            <Input placeholder="Middle Name" />
          )}
        </FormItem>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="Nickname">
          {getFieldDecorator("nickname")(<Input placeholder="Nickname" />)}
        </FormItem>
      </Col>
      <Col xl={16} md={24} xs={24}>
        <FormItem label="Present Address">
          {getFieldDecorator("present_address", {
            rules: [
              {
                required: true,
                message: "Present address is required"
              }
            ]
          })(<Input placeholder="Present Address" />)}
        </FormItem>
      </Col>
      <Col xl={8} md={24} xs={24}>
        <FormItem label="City">
          {getFieldDecorator("present_address_city", {
            rules: [
              {
                required: true,
                message: "Present city is required"
              }
            ]
          })(
            <Select
              showSearch
              optionFilterProp="children"
              placeholder="Select City"
            >
              {cities &&
                cities.map((item, i) => (
                  <Option value={item.desc} key={i}>
                    {item.desc}
                  </Option>
                ))}
            </Select>
          )}
        </FormItem>
      </Col>
      <Col xl={16} md={24} xs={24}>
        <FormItem label="Permanent / Provincial Address">
          {getFieldDecorator("permanent_address", {
            rules: [
              { required: true, message: "Permanent Address is required" }
            ]
          })(<Input placeholder="Permanent / Provincial Address" />)}
        </FormItem>
      </Col>
      <Col xl={8} md={24} xs={24}>
        <FormItem label="City">
          {getFieldDecorator("permanent_address_city", {
            rules: [{ required: true, message: "City is required" }]
          })(
            <Select
              showSearch
              optionFilterProp="children"
              placeholder="Select City"
            >
              {cities &&
                cities.map((item, i) => (
                  <Option value={item.desc} key={i}>
                    {item.desc}
                  </Option>
                ))}
            </Select>
          )}
        </FormItem>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="Date of Birth">
          {getFieldDecorator("birthdate", {
            rules: [
              {
                required: true,
                message: "Date of birth is required"
              }
            ]
          })(<DatePicker style={{ width: "100%" }} />)}
        </FormItem>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="Place of Birth">
          {getFieldDecorator("birthplace", {
            rules: [
              {
                required: true,
                message: "Place of birth is required"
              }
            ]
          })(<Input placeholder="Place of Birth" />)}
        </FormItem>
      </Col>
      <Col xl={6} md={12} sm={24} xs={24}>
        <FormItem label="Gender">
          {getFieldDecorator("gender", {
            rules: [
              {
                required: true,
                message: "Gender is required"
              }
            ]
          })(
            <RadioGroup>
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
            </RadioGroup>
          )}
        </FormItem>
      </Col>
      <Col xl={6} md={12} sm={24} xs={24}>
        <FormItem label="Height">
          {getFieldDecorator("height")(<Input placeholder="Height" />)}
        </FormItem>
      </Col>
      <Col xl={6} md={12} sm={24} xs={24}>
        <FormItem label="Weight">
          {getFieldDecorator("weight")(<Input placeholder="Weight" />)}
        </FormItem>
      </Col>
      <Col xl={6} md={12} sm={24} xs={24}>
        <FormItem label="Civil Status">
          {getFieldDecorator("civil_status", {
            rules: [{ required: true, message: "Civil Status is required" }]
          })(
            <Select
              showSearch
              optionFilterProp="children"
              placeholder="Select Civil Status"
            >
              {["Single", "Married", "Separated", "Widowed"].map((item, i) => (
                <Option value={item} key={i}>
                  {item}
                </Option>
              ))}
            </Select>
          )}
        </FormItem>
      </Col>

      <Col xl={12} md={12} sm={24} xs={24}>
        <DynamicTextField
          form={props.form}
          value="telephone_number"
          display="Telephone Number"
        />
      </Col>
      <Col sxl={12} md={12} sm={24} xs={24}>
        <DynamicTextField
          form={props.form}
          value="mobile_number"
          display="Mobile Number"
        />
      </Col>

      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="Facebook Email Address">
          {getFieldDecorator("fb_address")(
            <Input placeholder="Facebook Email Address" />
          )}
        </FormItem>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="Personal Email Address">
          {getFieldDecorator("email_address", {
            rules: [{ required: true, message: "Email is required" }]
          })(<Input placeholder="Personal Email Address" />)}
        </FormItem>
      </Col>
    </Row>
  );
};

export default PersonalInformation;
