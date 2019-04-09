import React, { Component } from "react";
import {
  Col,
  Row,
  Icon,
  Input,
  Form,
  Select,
  Button,
  InputNumber,
  Table
} from "antd";

import "../index.css";

const FormItem = Form.Item;
const Option = Select.Option;

class EducationalAttainment extends Component {
  state = {
    canAdd: true,
    error_message: "",
    requiredDegree: false,
    id: 0,
    school_data: [],
    data: {
      school_type: "High School Graduate",
      school_name: "",
      degree: "",
      started_at: "",
      ended_at: ""
    },
    types: [
      "High School Graduate",
      "Senior High",
      "Vocational Level",
      "Vocational Graduate",
      "College Level",
      "College Graduate"
    ]
  };

  okHandle = () => {
    let { school_data, data, id } = this.state;
    data["id"] = id;

    if (data.degree === "") {
      data.degree = "N/A";
    }

    this.setState(
      { canAdd: true, school_data: [...school_data, data], data: {}, id: ++id },
      () => {
        const { school_data } = this.state;
        this.props.form.setFieldsValue({ school_data });
      }
    );
  };

  remove = id => {
    this.setState(
      {
        school_data: this.state.school_data.filter(_ => _.id !== id)
      },
      () => {
        const { school_data } = this.state;
        this.props.form.setFieldsValue({ school_data });
      }
    );
  };

  onChange = (val, propName) => {
    let data = Object.assign({}, this.state.data);
    data[propName] = val;

    const requiredFields = ["school_name", "started_at", "ended_at"];

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
    const { error, form } = this.props;
    const { school_data, types, data, canAdd } = this.state;

    const columns = [
      {
        title: "Type",
        dataIndex: "school_type",
        key: "school_type"
      },
      {
        title: "School",
        dataIndex: "school_name",
        key: "school_name"
      },
      {
        title: "Course / Degree",
        dataIndex: "degree",
        key: "degree"
      },
      {
        title: "Year Graduated",
        dataIndex: "year_graduated",
        key: "year_graduated",
        render: (text, record) => {
          return (
            <span>
              {record.started_at} - {record.ended_at}
            </span>
          );
        }
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

    form.getFieldDecorator("school_data", {
      rules: [
        {
          rules: "required",
          type: "array",
          validator: (rules, value, done) => {
            const check = value.filter(
              val => val.school_type === "High School Graduate"
            );
            if (value.length === 0) {
              done("At least 1 required");
              this.setState({ error_message: "At least 1 required" });
            } else if (check.length === 0) {
              done("High School is required");
              this.setState({
                error_message: "High School is required"
              });
            }
            done();
          }
        }
      ],
      initialValue: []
    });

    return (
      <div>
        {error.includes("school_data") && (
          <p style={{ color: "red" }}>{this.state.error_message}</p>
        )}

        <Row gutter={8}>
          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="Type">
              <Select
                placeholder="Please select an Education level"
                onChange={e => this.onChange(e, "school_type")}
                value={data.school_type}
                style={{ width: "100%" }}
              >
                {types.map((item, i) => (
                  <Option value={item} key={i}>
                    {item}
                  </Option>
                ))}
              </Select>
            </FormItem>
          </Col>
          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="School">
              <Input
                placeholder="Name of school"
                onChange={e => this.onChange(e.target.value, "school_name")}
                value={data.school_name}
              />
            </FormItem>
          </Col>

          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="Course / Degree">
              <Input
                placeholder="Course / Degree"
                onChange={e => this.onChange(e.target.value, "degree")}
                value={data.degree}
              />
            </FormItem>
          </Col>
          <Col xl={6} md={12} sm={24} xs={24}>
            <FormItem label="Year Graduated (From - To)">
              <Row gutter={8}>
                <Col span={12}>
                  <InputNumber
                    placeholder="From"
                    min={1}
                    onChange={e => this.onChange(e, "started_at")}
                    value={data.started_at}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    placeholder="To"
                    min={1}
                    onChange={e => this.onChange(e, "ended_at")}
                    value={data.ended_at}
                  />
                </Col>
              </Row>
            </FormItem>
          </Col>
          <Col span={24} className="section-actions-container">
            <Button type="primary" onClick={this.okHandle} disabled={canAdd}>
              Add Educational Attainment
            </Button>
          </Col>
        </Row>

        <Table
          scroll={{ x: "650px" }}
          pagination={false}
          columns={columns}
          dataSource={school_data}
          rowKey={record => record.id}
        />
      </div>
    );
  }
}

export default Form.create()(EducationalAttainment);
