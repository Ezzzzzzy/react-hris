import React, { Component } from "react";
import { Button, Col, Row, Icon, Input, Form, Select, Table } from "antd";

import "../index.css";

const FormItem = Form.Item;
const Option = Select.Option;

class FamilyBackground extends Component {
  state = {
    canAdd: true,
    error_message: "",
    family_data: [],
    data: {
      family_type: "Mother",
      name: "",
      age: "",
      occupation: ""
    },
    id: 0
  };

  componentDidMount() {
    const { family_data, form } = this.props;
    this.setState({ family_data });
    form.setFieldsValue({ family_data });
  }

  okHandle = () => {
    let { family_data, data, id } = this.state;
    data["id"] = id;

    if (data.age === "" || data.occupation) {
      data.age = "N/A";
      data.occupation = "N/A";
    }

    this.setState(
      {
        family_data: [...family_data, data],
        data: {},
        id: ++id
      },
      () => {
        const { family_data } = this.state;
        this.props.form.setFieldsValue({ family_data });
      }
    );
  };

  remove = id => {
    this.setState(
      {
        family_data: this.state.family_data.filter(_ => _.id !== id)
      },
      () => {
        const { family_data } = this.state;
        this.props.form.setFieldsValue({ family_data });
      }
    );
  };

  onChange = (val, propName) => {
    let data = Object.assign({}, this.state.data);
    if (propName === "age" || propName === "occupation") {
      console.log("name: " + propName);
      console.log("value: " + val);
      if (val === "") data["age"] = "N/A";
    }
    data[propName] = val;
    const requiredFields = ["family_type", "name"];

    requiredFields.forEach(field => {
      if (
        this.state.data[field] !== "" &&
        this.state.data[field] !== undefined
      ) {
        this.setState({ canAdd: false });
      } else this.setState({ canAdd: true });
    });
    this.setState({ data });
  };

  render() {
    const { canAdd, data } = this.state;
    const { error, form } = this.props;
    const columns = [
      {
        title: "Type",
        dataIndex: "family_type",
        key: "family_type"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Company / Occupation",
        dataIndex: "occupation",
        key: "occupation"
      },
      {
        title: "",
        key: "action",
        render: (text, record) => (
          <Button onClick={e => this.remove(record.id)}>
            <Icon type="close" style={{ color: "#e74c3c" }} />
          </Button>
        )
      }
    ];

    form.getFieldDecorator("family_data", {
      rules: [
        {
          required: true,
          type: "array",
          validator: (rules, value, done) => {
            const check = value.filter(val => val.family_type === "Mother");
            if (value.length === 0) {
              done("At least 1 is required (Please include complete family).");
              this.setState({
                error_message:
                  "At least 1 is required (Please include complete family)."
              });
            }
            if (check.length === 0) {
              done("Mother is required");
              this.setState({ error_message: "Mother is required." });
            }
            done();
          }
        }
      ],
      initialValue: []
    });

    return (
      <div>
        {error.includes("family_data") && (
          <p style={{ color: "red" }}>{this.state.error_message}</p>
        )}

        <Row gutter={8}>
          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="Type">
              <Select
                placeholder="Select Relationship"
                onChange={e => this.onChange(e, "family_type")}
                value={data.family_type}
                style={{ width: "100%" }}
              >
                <Option value="Father">Father</Option>
                <Option value="Mother">Mother</Option>
                <Option value="Spouse">Spouse</Option>
                <Option value="Sibling">Sibling</Option>
                <Option value="Son">Son</Option>
                <Option value="Daugther">Daugther</Option>
              </Select>
            </FormItem>
          </Col>
          <Col xl={8} md={12} sm={24} xs={24}>
            <FormItem label="Name">
              <Input
                placeholder="Name"
                value={data.name}
                onChange={e => this.onChange(e.target.value, "name")}
              />
            </FormItem>
          </Col>

          <Col xl={4} md={12} sm={24} xs={24}>
            <FormItem label="Age">
              <Input
                placeholder="Age"
                value={data.age}
                onChange={e => this.onChange(e.target.value, "age")}
              />
            </FormItem>
          </Col>

          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="Company / Occupation">
              <Input
                placeholder="Company / Occupation"
                value={data.occupation}
                onChange={e => this.onChange(e.target.value, "occupation")}
              />
            </FormItem>
          </Col>

          <Col span={24} className="section-actions-container">
            <Button type="primary" onClick={this.okHandle} disabled={canAdd}>
              Add Family Member
            </Button>
          </Col>
        </Row>

        <Table
          scroll={{ x: "650px" }}
          pagination={false}
          columns={columns}
          dataSource={this.state.family_data}
          rowKey={record => record.id}
        />
      </div>
    );
  }
}

export default Form.create()(FamilyBackground);
