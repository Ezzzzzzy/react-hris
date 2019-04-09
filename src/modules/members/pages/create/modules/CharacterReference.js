import React, { Component } from "react";
import { Col, Row, Icon, Input, Form, Button, Table } from "antd";

import "../index.css";

const FormItem = Form.Item;

class CharacterReference extends Component {
  state = {
    canAdd: true,
    references_data: [],
    data: {
      name: "",
      company: "",
      position: "",
      address: "",
      contact: ""
    },
    id: 0
  };

  okHandle = () => {
    let { references_data, data, id } = this.state;
    data["id"] = id;

    this.setState(
      {
        canAdd: true,
        references_data: [...references_data, data],
        data: {},
        id: ++id
      },
      () => {
        const { references_data } = this.state;
        this.props.form.setFieldsValue({ references_data });
      }
    );
  };

  remove = id => {
    this.setState(
      {
        references_data: this.state.references_data.filter(_ => _.id !== id)
      },
      () => {
        const { references_data } = this.state;
        this.props.form.setFieldsValue({ references_data });
      }
    );
  };

  onChange = (val, propName) => {
    let data = Object.assign({}, this.state.data);
    data[propName] = val;
    const requiredFields = ["name", "company", "position", "contact"];

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
        key: "name",
        width: "25%",
        render: (text, record) => (
          <div className="reference-data">
            <p className="title">{record.name}</p>
            <p className="sub-title">
              {record.position}, {record.company}
            </p>
          </div>
        )
      },
      {
        title: "Address",
        dataIndex: "address",
        width: "55%",
        key: "address"
      },
      {
        title: "Contact Number",
        dataIndex: "contact",
        width: "15%",
        key: "contact"
      },
      {
        title: "",
        key: "action",
        width: "5%",
        render: (text, record) => (
          <Button onClick={() => this.remove(record.id)}>
            <Icon type="close" style={{ color: "#e74c3c" }} />
          </Button>
        )
      }
    ];

    form.getFieldDecorator("references_data", {
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
        {error.includes("references_data") && (
          <p style={{ color: "red" }}>At least 1 is required.</p>
        )}

        <Row gutter={8}>
          <Col xl={8} md={12} sm={24} xs={24}>
            <FormItem label="Name">
              <Input
                placeholder="Name"
                onChange={e => this.onChange(e.target.value, "name")}
                value={data.name}
              />
            </FormItem>
          </Col>
          <Col xl={8} md={12} sm={24} xs={24}>
            <FormItem label="Company">
              <Input
                placeholder="Company"
                onChange={e => this.onChange(e.target.value, "company")}
                value={data.company}
              />
            </FormItem>
          </Col>

          <Col xl={8} md={12} sm={24} xs={24}>
            <FormItem label="Position">
              <Input
                placeholder="Position"
                onChange={e => this.onChange(e.target.value, "position")}
                value={data.position}
              />
            </FormItem>
          </Col>

          <Col xl={16} md={12} sm={24} xs={24}>
            <FormItem label="Address">
              <Input
                placeholder="Address"
                onChange={e => this.onChange(e.target.value, "address")}
                value={data.address}
              />
            </FormItem>
          </Col>

          <Col xl={8} md={12} sm={24} xs={24}>
            <FormItem label="Contact Number">
              <Input
                placeholder="Contact Number"
                onChange={e => this.onChange(e.target.value, "contact")}
                value={data.contact}
              />
            </FormItem>
          </Col>

          <Col span={24} className="section-actions-container">
            <Button type="primary" onClick={this.okHandle} disabled={canAdd}>
              Add a Character Reference
            </Button>
          </Col>
        </Row>

        <Table
          scroll={{ x: "650px" }}
          pagination={false}
          columns={columns}
          dataSource={this.state.references_data}
          rowKey={record => record.id}
          locale={{
            emptyText: "Add at least one Character Reference"
          }}
        />
      </div>
    );
  }
}

export default Form.create()(CharacterReference);
