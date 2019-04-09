import React, { Component } from "react";
import ReportsLayout from "../../../components/Reports";

import { Table, Row, Col, Input, Select, Icon, message } from "antd";

import "./index.css";

const Option = Select.Option

class Page extends Component {

  state = {
    filters: {
      page: '',
      limit: '',
      type: ''
    }
  }

  componentDidMount() {
    this.props.getReportRequest({ saved: 1 })
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('componentDidUpdate')
    const { toast } = this.props;
    if (!!toast) {
      switch (toast.type) {
        case "success":
          message.success(toast.message, 2, () => {
            this.props.removeToast();
            window.open(this.props.downloadLink, "_blank");
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

  onChangeFilter = (value, name) => {
    let filters = this.state.filters;
    filters[name] = value;
    this.setState({ filters }, () =>
      this.props.getReportRequest({ saved: 1, ...this.state.filters })
    );
  };

  render() {
    const { reports, meta, isLoading } = this.props

    const columns = [
      {
        title: "Date Saved",
        dataIndex: "created_at",
        key: "created_at"
      },
      {
        title: "Template Name",
        dataIndex: "template_name",
        key: "template_name"
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type"
      },
      {
        title: "Created By",
        dataIndex: "last_modified_by",
        render: (text, record) => (
          <span>{record.user.name}</span>
        )
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => {
          return (
            <div>
              <span
                style={{ color: "#2086e9", cursor: "pointer" }}
                onClick={() => this.props.generateTemplateRequest(record.id)}>
                <Icon type="snippets" /> Generate
              </span>
            </div>
          );
        }
      }
    ];

    return (
      <div>
        <Row>
          <Col span={24}>
            <h1>Saved Template</h1>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginBottom: "10px" }}>
          <Col span={5}>
            <Select
              placeholder="Report Type"
              style={{ width: "100%" }}
              onChange={value => this.onChangeFilter(value, "type")}
            >
              <Option value="">All Types</Option>
              <Option value="HC">Head Count</Option>
              <Option value="ML">Member List</Option>
            </Select>
          </Col>
          <Col span={10} />
          <Col span={9}>
            <Input.Search
              placeholder="Search by Template Name"
              onSearch={q => this.props.getReportRequest({ saved: 1, q })}
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Table
              pagination={{
                ...meta,
                onShowSizeChange: (current, limit) =>
                  this.onChangeFilter(limit, "limit"),
                showSizeChanger: true,
                onChange: page => this.onChangeFilter(page, "page"),
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} o  f ${total} items`
              }}
              loading={isLoading}
              rowKey={record => record.id}
              columns={columns}
              dataSource={reports}
              style={{ background: "#fff" }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const ReportsPage = ReportsLayout(Page, 1);

export default ReportsPage;
