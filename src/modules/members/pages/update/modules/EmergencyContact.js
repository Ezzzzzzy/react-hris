import React, { Component } from "react";
import { Col, Row, Icon, Input, Form, Button, Table } from "antd";

import "../index.css";

const FormItem = Form.Item;

class EmergencyContact extends Component {
  state = {
    canAdd: true,
    emergency_data: [],
    data: {
      name: "",
      relationship: "",
      contact: "",
      address: ""
    },
    id: 0
  };

  componentDidMount() {
    const { emergency_data, form } = this.props;
    this.setState({ emergency_data });
    form.setFieldsValue({ emergency_data });
  }

  okHandle = () => {
    let { emergency_data, data, id } = this.state;
    data["id"] = id;

    this.setState(
      {
        canAdd: true,
        emergency_data: [...emergency_data, data],
        data: {},
        id: ++id
      },
      () => {
        const { emergency_data } = this.state;
        this.props.form.setFieldsValue({ emergency_data });
      }
    );
  };

  remove = id => {
    this.setState(
      {
        emergency_data: this.state.emergency_data.filter(_ => _.id !== id)
      },
      () => {
        const { emergency_data } = this.state;
        this.props.form.setFieldsValue({ emergency_data });
      }
    );
  };

  onChange = (val, propName) => {
    let data = Object.assign({}, this.state.data);
    data[propName] = val;

    const requiredFields = ["name", "relationship", "contact", "address"];
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
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Relationship",
        dataIndex: "relationship",
        key: "relationship"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "Contact Number",
        dataIndex: "contact",
        key: "contact"
      },
      {
        title: "",
        key: "action",
        render: (text, record) => (
          <Button onClick={() => this.remove(record.id)}>
            <Icon type="close" style={{ color: "#e74c3c" }} />
          </Button>
        )
      }
    ];

    form.getFieldDecorator("emergency_data", {
      rules: [
        {
          required: true,
          type: "array",
          validator: (rules, value, done) => {
            if (value.length === 0) {
              done("At least 1 required");
            }
            done();
          }
        }
      ],
      initialValue: []
    });

    return (
      <div>
        {error.includes("emergency_data") && (
          <p style={{ color: "red" }}>At least 1 is required.</p>
        )}

        <Row gutter={8}>
          <Col xl={8} md={12} sm={24} xs={24}>
            <FormItem label="Name">
              <Input
                placeholder="Name"
                value={data.name}
                onChange={e => this.onChange(e.target.value, "name")}
              />
            </FormItem>
          </Col>
          <Col xl={8} md={12} sm={24} xs={24}>
            <FormItem label="Relationship">
              <Input
                placeholder="Relationship"
                value={data.relationship}
                onChange={e => this.onChange(e.target.value, "relationship")}
              />
            </FormItem>
          </Col>

          <Col xl={8} md={12} sm={24} xs={24}>
            <FormItem label="Contact Number">
              <Input
                placeholder="Contact Number"
                value={data.contact}
                onChange={e => this.onChange(e.target.value, "contact")}
              />
            </FormItem>
          </Col>

          <Col span={24}>
            <FormItem label="Address">
              <Input
                placeholder="Present address of emergency contact"
                value={data.address}
                onChange={e => this.onChange(e.target.value, "address")}
              />
            </FormItem>
          </Col>

          <Col span={24} className="section-actions-container">
            <Button type="primary" onClick={this.okHandle} disabled={canAdd}>
              Add an Emergency Contact
            </Button>
          </Col>
        </Row>

        <Table
          scroll={{ x: "650px" }}
          pagination={false}
          columns={columns}
          dataSource={this.state.emergency_data}
          rowKey={record => record.id}
          locale={{
            emptyText: "Add at least one Emergency Contact"
          }}
        />
      </div>
    );
  }
}

export default Form.create()(EmergencyContact);
