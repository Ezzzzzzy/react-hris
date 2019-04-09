import React, { Component } from "react";
import { Button, Col, Row, Icon, Input, Form, Table } from "antd";

import "../index.css";

const FormItem = Form.Item;

class EmploymentHistory extends Component {
  state = {
    canAdd: true,
    emp_history_data: [],
    id: 0,
    data: {
      company_name: "",
      position: "",
      started_at: "",
      ended_at: "",
      reason_for_leaving: ""
    }
  };

  okHandle = () => {
    let { emp_history_data, data, id } = this.state;
    data["id"] = id;

    this.setState(
      {
        canAdd: true,
        emp_history_data: [...emp_history_data, data],
        data: {},
        id: ++id
      },
      () => {
        const { emp_history_data } = this.state;
        this.props.form.setFieldsValue({ emp_history_data });
      }
    );
  };

  remove = id => {
    this.setState(
      {
        emp_history_data: this.state.emp_history_data.filter(_ => _.id !== id)
      },
      () => {
        const { emp_history_data } = this.state;
        this.props.form.setFieldsValue({ emp_history_data });
      }
    );
  };

  onChange = (val, propName) => {
    let data = Object.assign({}, this.state.data);
    data[propName] = val;

    const requiredFields = [
      "company_name",
      "position",
      "started_at",
      "ended_at",
      "reason_for_leaving"
    ];

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

  // checkMaximumCount() {
  //   if (this.state.emp_history_data.length === 3) {
  //     this.setState({ canAdd: true });
  //   } else this.setState({ canAdd: false });
  // }

  render() {
    const { canAdd, data } = this.state;
    const { error, form } = this.props;

    const columns = [
      {
        title: "Company",
        dataIndex: "company_name",
        key: "company_name"
      },
      {
        title: "Position",
        dataIndex: "position",
        key: "position"
      },
      {
        title: "Inclusive Date",
        dataIndex: "date",
        key: "date",
        render: (text, record) => `${record.started_at} - ${record.ended_at}`
      },
      {
        title: "Reason for Leaving",
        dataIndex: "reason_for_leaving",
        key: "reason_for_leaving"
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

    form.getFieldDecorator("emp_history_data", {
      rules: [
        {
          required: true,
          type: "array",
          validator: (rules, value, done) => {
            if (value.length === 0) {
              done("At least 1 Employment history is required");
            }
            done();
          }
        }
      ],
      initialValue: []
    });

    return (
      <div>
        {error.includes("emp_history_data") && (
          <p style={{ color: "red" }}>At least 1 is required.</p>
        )}

        <Row gutter={8}>
          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="Company">
              <Input
                placeholder="Company"
                value={data.company_name}
                onChange={e => this.onChange(e.target.value, "company_name")}
              />
            </FormItem>
          </Col>
          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="Position">
              <Input
                placeholder="Position"
                value={data.position}
                onChange={e => this.onChange(e.target.value, "position")}
              />
            </FormItem>
          </Col>

          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="Inclusive Date (From - To)">
              <Row gutter={8}>
                <Col span={12}>
                  <Input
                    placeholder="MM-YYYY"
                    value={data.started_at}
                    onChange={e => this.onChange(e.target.value, "started_at")}
                  />
                </Col>
                <Col span={12}>
                  <Input
                    placeholder="MM-YYYY"
                    value={data.ended_at}
                    onChange={e => this.onChange(e.target.value, "ended_at")}
                  />
                </Col>
              </Row>
            </FormItem>
          </Col>

          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="Reason for Leaving">
              <Input
                placeholder="Reason for Leaving"
                value={data.reason_for_leaving}
                onChange={e =>
                  this.onChange(e.target.value, "reason_for_leaving")
                }
              />
            </FormItem>
          </Col>

          <Col span={24} className="section-actions-container">
            <Button type="primary" onClick={this.okHandle} disabled={canAdd}>
              Add Employee History
            </Button>
          </Col>
        </Row>

        <Table
          scroll={{ x: "650px" }}
          pagination={false}
          columns={columns}
          dataSource={this.state.emp_history_data}
          rowKey={record => record.id}
        />
      </div>
    );
  }
}

export default Form.create()(EmploymentHistory);
