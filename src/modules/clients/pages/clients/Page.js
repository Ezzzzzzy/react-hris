import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PageHeaderLayout from "../../../../commons/PageHeaderLayout";
import UpdateForm from "./components/update";
import CreateForm from "./components/create";

import {
  Button,
  Table,
  Divider,
  Row,
  Col,
  Icon,
  Input,
  Layout,
  message,
  Tooltip
} from "antd";

class Page extends Component {
  state = {
    filters: {},
    addModalVisible: false,
    updateModalVisible: false,
    selectedData: null
  };

  componentDidMount() {
    const id = this.props.allowedClients.map(val => val.id).join(",");
    this.setState({ filters: { id } }, () => {
      const filters = this.state.filters;
      this.props.getClientRequest(filters);
    });
  }

  componentDidUpdate() {
    const { toast } = this.props;
    const id = this.props.allowedClients.map(val => val.id).join(",");

    if (!!toast) {
      switch (toast.type) {
        case "success":
          message.success(toast.message, 1.5, () => {
            this.props.removeToast();
            this.handleClose();
            this.props.getClientRequest({ id });
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

  onChangeFilter = (val, propName) => {
    let filters = Object.assign({}, this.state.filters);

    filters[propName] = val;

    this.setState({ filters }, () => {
      this.props.getClientRequest(this.state.filters);
    });
  };

  showAddModal = () => {
    this.setState({ addModalVisible: true });
  };

  showUpdatemodal = selectedData => {
    this.setState({ selectedData, updateModalVisible: true });
  };

  handleClose = () => {
    this.setState({ addModalVisible: false, updateModalVisible: false });
  };

  handleSave = data => {
    this.props.createClientRequest(data);
  };

  handleUpdate = data => {
    this.props.updateClientRequest(this.state.selectedData.id, data);
  };

  verified = permission => {
    let verified = [];

    permission = !Array.isArray(permission) ? [permission] : permission;

    permission.forEach(val => {
      if (this.props.permissions.map(val => val.name).indexOf(val) !== -1) {
        verified.push(1);
      } else verified.push(0);
    });

    return verified.indexOf(1) !== -1 ? true : false;
  };

  render() {
    const { clients, meta, isLoading, user } = this.props;

    if (
      !this.verified([
        "view_clients",
        "view_add_and_modify_clients_branches_brands_bus"
      ])
    ) {
      return <Redirect to="/members" />;
    }

    const columns = [
      {
        title: "Client Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Shortcode",
        dataIndex: "code",
        key: "code"
      },
      {
        title: "Members",
        dataIndex: "members_count",
        key: "members_count",
        render: (text, record) => {
          return text || 0;
        }
      },
      {
        title: "Brands",
        dataIndex: "brands_count",
        key: "brands_count",
        render: (text, record) => {
          return text || 0;
        }
      },
      {
        title: "Last Modified",
        dataIndex: "last_modified",
        key: "last_modified"
      },
      {
        title: "Last Modified By",
        dataIndex: "last_modified_by",
        key: "last_modified_by"
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => {
          return (
            <div>
              <Link to={`client/${record.id}/members`}>
                <Icon type="export" /> View
              </Link>
              <Divider type="vertical" />
              {this.verified([
                "view_add_and_modify_clients_branches_brands_bus"
              ]) && (
                <a onClick={() => this.showUpdatemodal(record)}>
                  <Icon type="edit" /> Edit
                </a>
              )}
            </div>
          );
        }
      }
    ];

    const pageHeaderContent = (
      <h2 className="pageHeaderContent">Clients List</h2>
    );

    return (
      <Layout style={{ minHeight: "100vh", margin: "0 16px" }}>
        <PageHeaderLayout content={pageHeaderContent} breadcrumbList={[]}>
          <Row type="flex" justify="center">
            <Col span={18}>
              <Row gutter={16} style={{ marginBottom: "10px" }}>
                <Col span={13} />
                <Col span={7}>
                  <Input.Search
                    placeholder="Search by Client Name or Shortcode"
                    onSearch={q => this.onChangeFilter(q, "q")}
                  />
                </Col>
                <Tooltip
                  placement="topRight"
                  title={
                    !this.verified(
                      "view_add_and_modify_clients_branches_brands_bus"
                    ) && "You don't have any permission"
                  }
                >
                  <Col span={4}>
                    <Button
                      type="primary"
                      style={{ width: "100%" }}
                      disabled={
                        !this.verified(
                          "view_add_and_modify_clients_branches_brands_bus"
                        )
                      }
                      onClick={this.showAddModal}
                    >
                      <Icon type="plus" />
                      New Client
                    </Button>
                  </Col>
                </Tooltip>
              </Row>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span={18}>
              <Table
                pagination={{
                  ...meta,
                  onShowSizeChange: (current, limit) =>
                    this.onChangeFilter(limit, "limit"),
                  showSizeChanger: true,
                  onChange: page => this.onChangeFilter(page, "page"),
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                }}
                rowKey={record => record.id}
                loading={isLoading}
                columns={columns}
                dataSource={clients}
                style={{ background: "#fff" }}
              />
            </Col>
          </Row>
        </PageHeaderLayout>

        <CreateForm
          visible={this.state.addModalVisible}
          onCancel={this.handleClose}
          verified={this.verified}
          handleSave={this.handleSave}
          isLoading={isLoading}
          user={user}
        />

        <UpdateForm
          visible={this.state.updateModalVisible}
          onCancel={this.handleClose}
          handleSave={this.handleUpdate}
          isLoading={isLoading}
          user={user}
          data={this.state.selectedData}
        />
      </Layout>
    );
  }
}

export default Page;
