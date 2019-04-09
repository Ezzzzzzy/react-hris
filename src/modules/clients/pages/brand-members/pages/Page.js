import React, { Component } from "react";
import {
  Card,
  Col,
  Row,
  Input,
  Dropdown,
  Form,
  Menu,
  Icon,
  Select,
  DatePicker,
  Table,
  Tag,
  Button,
  message
} from "antd";
import moment from "moment";
import ClientLayout from "../../../components/Client";
import BrandHeader from "../../../components/Header/brand";
import ViewModal from "../components/ViewModal";
import EndModal from "../../../components/EndModal";
import BulkEndModal from "../../../components/BulkEndModal";
import UpdateModal from "../../../components/UpdateModal";
import BulkUpdateModal from "../../../components/BulkUpdateModal";
import ReassignModal from "../../../components/ReassignModal";
import BulkReassignModal from "../../../components/BulkReassignModal";

import "./index.css";

const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

class Page extends Component {
  state = {
    id: "",
    brand_id: "",
    cwh_id: [],
    cwh_ids: [],
    bwh_id: [],
    bwh_ids: [],
    selectedMember: [],
    selectedMembers: [],
    selectedRowKeys: [],
    selectedId: null,
    filters: {
      location: "",
      brand: "",
      gender: "",
      start: "",
      end: "",
      status: "",
      position: "",
      limit: ""
    },
    endModalVisible: false,
    updateModalVisible: false,
    reassignModalVisible: false,
    bulkEndModalVisible: false,
    bulkUpdateModalVisible: false,
    bulkReassignModalVisible: false,
    viewModalVisible: false,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const brand_id = this.props.match.params.brand_id;
    this.setState({ id, brand_id }, () => {
      this.props.getClientSingleBrand(this.state.id, this.state.brand_id);
      this.props.getClientSingleBrandMembers(this.state.id, this.state.brand_id, {});
    });
  }

  componentDidUpdate(nextProps, nextState) {
    const { toast } = this.props;
    if (!!toast) {
      switch (toast.type) {
        case "success":
          message.success(toast.message, 1.5, () => {
            this.props.removeToast();
            this.handleClose();
            this.setState({ selectedRowKeys: [] });
            this.props.getClientSingleBrand(this.state.id, this.state.brand_id);
            this.props.getClientSingleBrandMembers(this.state.id, this.state.brand_id, {});
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

  onChangeFilter(value, name) {
    let filters = this.state.filters;
    if (name !== "range") {
      filters[name] = value;
    } else {
      if (value.length === 0) {
        filters["start"] = filters["end"] = "";
      } else {
        filters["start"] = moment(value[0]).format("YYYY-MM-DD");
        filters["end"] = moment(value[1]).format("YYYY-MM-DD");
      }
    }
    this.setState({ filters }, () =>
      this.props.getClientSingleBrandMembers(
        this.state.id,
        this.state.brand_id,
        this.state.filters
      )
    );
  }

  showViewModal = selectedId => {
    this.setState({ selectedId, viewModalVisible: true });
  };
  showEndModal = () => this.setState({ endModalVisible: true });
  showUpdateModal = () => this.setState({ updateModalVisible: true });
  showReassignModal = () => this.setState({ reassignModalVisible: true })
  showBulkEndModal = () =>
    this.state.selectedRowKeys.length > 0
      ? this.setState({ bulkEndModalVisible: true })
      : message.warning("No selected members");
  showBulkReassignModal = () =>
    this.state.selectedRowKeys.length > 0
      ? this.setState({ bulkReassignModalVisible: true })
      : message.warning("No selected members");

  showBulkUpdateModal = () => {
    if (this.state.selectedRowKeys.length > 0) {
      this.setState({ bulkUpdateModalVisible: true });
      let selectedMembers = this.state.selectedMembers;
      let bwh_ids = selectedMembers.map(member => member.bwh_id);
      this.setState({ bwh_ids });
    } else {
      message.warning("No selected members");
    }
  };

  handleClose = () => {
    this.setState({
      endModalVisible: false,
      updateModalVisible: false,
      reassignModalVisible: false,
      bulkEndModalVisible: false,
      bulkUpdateModalVisible: false,
      bulkReassignModalVisible: false,
      viewModalVisible: false
    });
  };

  handleEnd = data => {
    data = {
      ...data,
      cwh_ids: this.state.cwh_id,
      date_end: moment(data.date_end).format("YYYY-MM-DD")
    };
    this.props.updateClientMemberEnd(this.state.id, data);
  };

  handleBulkEnd = data => {
    data = {
      ...data,
      cwh_ids: this.state.cwh_ids,
      date_end: moment(data.date_end).format("YYYY-MM-DD")
    };
    this.props.updateClientMemberEnd(this.state.id, data);
  };

  handleUpdate = data => {
    const date_end = data.date_end
      ? moment(data.date_end).format("YYYY-MM-DD")
      : "";
    data = {
      ...data,
      bwh_ids: this.state.bwh_id,
      date_start: moment(data.date_start).format("YYYY-MM-DD"),
      date_end: date_end
    };
    this.props.updateClientMemberStatus(this.state.id, data);
  };

  handleBulkUpdate = data => {
    const date_end = data.date_end
      ? moment(data.date_end).format("YYYY-MM-DD")
      : "";
    data = {
      ...data,
      bwh_ids: this.state.bwh_ids,
      date_start: moment(data.date_start).format("YYYY-MM-DD"),
      date_end: date_end
    };
    this.props.updateClientMemberStatus(this.state.id, data);
  };

  handleReassign = data => {
    const date_end = data.date_end
      ? moment(data.date_end).format("YYYY-MM-DD")
      : ""
    const new_date_start = moment(data.dates[0]).format("YYYY-MM-DD")
    const new_date_end = moment(data.dates[1]).format("YYYY-MM-DD")

    data = {
      ...data,
      cwh_ids: [this.state.cwh_id[0].id],
      date_end,
      new_date_start,
      new_date_end
    }

    this.props.updateClientMemberReassign(this.state.id, data)
  }

  handleBulkReassign = data => {
    const date_end = data.date_end
      ? moment(data.date_end).format("YYYY-MM-DD")
      : ""
    const new_date_start = moment(data.dates[0]).format("YYYY-MM-DD")
    const new_date_end = moment(data.dates[1]).format("YYYY-MM-DD")

    const cwh_ids = this.state.cwh_ids.map(cwh_id => cwh_id.id)

    data = {
      ...data,
      cwh_ids,
      date_end,
      new_date_start,
      new_date_end
    }
    this.props.updateClientMemberReassign(this.state.id, data)
  }

  render() {
    const { data, meta } = this.props.brand_members;
    const {
      clients_all,
      branchOptions,
      leavingReasons,
      employeeStatus,
      positions,
      locations,
      brands_all,
      isLoading
    } = this.props;
    const { selectedRowKeys } = this.state;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text, record) => {
          return (
            <span style={{ lineHeight: "15px" }}>
              <u onClick={this.showViewModal} style={{ fontWeight: 500, cursor: 'pointer' }}>{text}</u>
              <p style={{ color: "#808FA3", fontSize: "0.9em" }}>
                {record.status_name} , {record.business_unit}
              </p>
            </span>
          );
        }
      },
      {
        title: "Position",
        dataIndex: "position",
        key: "position",
        render: (text, record) => {
          return (
            <span style={{ lineHeight: "15px" }}>
              <p style={{ fontWeight: 500 }}>{text}</p>
              <p> </p>
            </span>
          );
        }
      },
      {
        title: "Latest Branch",
        dataIndex: "branch",
        key: "branch",
        render: (text, record) => {
          return (
            <span style={{ lineHeight: "15px" }}>
              <p style={{ fontWeight: 500 }}>{text}</p>
              <p style={{ color: "#808FA3", fontSize: "0.9em" }}>
                {record.location}
              </p>
            </span>
          );
        }
      },
      {
        title: "Hiring Date",
        dataIndex: "date_start",
        key: "date_start",
        width: "120px",
        render: (text, record) => {
          let recordDate = moment(text).format("YYYY-MM-DD");
          return (
            <span style={{ lineHeight: "15px" }}>
              <p style={{ fontWeight: 500 }}>{text}</p>
              <p style={{ color: "808FA3", fontSize: "0.9em" }}>
                {moment(recordDate).fromNow()}
              </p>
            </span>
          );
        }
      },
      {
        title: "Status as Hired",
        dataIndex: "status_name",
        key: "status_name",
        render: (text, record) =>
          text ? <Tag color={record.color}>{text}</Tag> : null
      },
      {
        title: "",
        dataIndex: "action",
        key: "action",
        render: (text, record) => {
          return (
            <div className="table-action-container">
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button
                  block
                  onClick={() => {
                    const { cwh_id, bwh_id, full_name: selectedMember } = record;
                    this.setState({
                      selectedMember,
                      cwh_id: [{ id: cwh_id }],
                      bwh_id: [bwh_id]
                    });
                  }}
                >
                  Actions <Icon type="down" />
                </Button>
              </Dropdown>
            </div>
          );
        }
      }
    ];

    const menu = (
      <Menu>
        <Menu.Item key="1">
          <a onClick={this.showEndModal}>End Tenure</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a onClick={this.showReassignModal}>Reassign Member</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a onClick={this.showUpdateModal}>Update Status</a>
        </Menu.Item>
      </Menu>
    );

    const bulkMenu = (
      <Menu>
        <Menu.Item key="1">
          <a onClick={this.showBulkEndModal}>End Tenure</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a onClick={this.showBulkReassignModal}>Reassign Member</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a onClick={this.showBulkUpdateModal}>Update Status</a>
        </Menu.Item>
      </Menu>
    );

    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        let cwh_ids = selectedRowKeys.map(id => ({ id }));
        let selectedMembers = this.state.selectedMembers;

        selectedRowKeys.forEach(key => {
          if (!selectedMembers.find(member => member.cwh_id === key))
            selectedMembers.push(selectedRows.find(row => row.cwh_id === key));
        });

        selectedMembers.forEach((member, index) => {
          if (
            !selectedRowKeys.find(
              selectedRowKey => selectedRowKey === member.cwh_id
            )
          )
            selectedMembers.splice(index, 1);
        });
        this.setState({ cwh_ids, selectedMembers, selectedRowKeys });
      }
    };


    return (
      <div>
        <Row>
          <Col span={24}>
            <BrandHeader {...this.props.brand_details} />
          </Col>
        </Row>
        <Row style={{ margin: "40px 30px" }}>
          <Col span={24}>
            <Card style={{ padding: "0px" }}>
              <Row gutter={16}>
                <Col span={6}>
                  <FormItem label="Location" style={{ marginBottom: 0 }} />
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Show all locations"
                    optionFilterProp="children"
                    onChange={value => this.onChangeFilter(value, "location")}
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="">All Locations</Option>
                    {locations &&
                      locations.map((location, i) => {
                        return (
                          <Option key={i} value={location.id}>
                            {location.location_name}
                          </Option>
                        );
                      })}
                  </Select>
                </Col>
                <Col span={6}>
                </Col>
                <Col span={4}>
                  <FormItem label="Gender" style={{ marginBottom: 0 }} />
                  <Select
                    onChange={value => this.onChangeFilter(value, "gender")}
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Show both"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="">Show Both</Option>
                    <Option value="m">Male</Option>
                    <Option value="f">Female</Option>
                  </Select>
                </Col>
                <Col span={8}>
                  <FormItem
                    label="Inclusive Date (From - To)"
                    style={{ marginBottom: 0 }}
                  />
                  <RangePicker
                    onChange={value => this.onChangeFilter(value, "range")}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24} style={{ margin: "20px 0" }}>
            <Row gutter={16}>
              <Col span={4}>
                <Select
                  onChange={value => this.onChangeFilter(value, "status")}
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="All Statuses"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="">All Statuses</Option>
                  {employeeStatus &&
                    employeeStatus.map((status, i) => {
                      return (
                        <Option key={i} value={status.id}>
                          {status.status_name}
                        </Option>
                      );
                    })}
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  onChange={value => this.onChangeFilter(value, "position")}
                  showSearch
                  style={{ width: '100%' }}
                  placeholder="All Positions"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="">All Positions</Option>
                  {positions &&
                    positions.map((position, i) => {
                      return (
                        <Option key={i} value={position.id}>
                          {position.position_name}
                        </Option>
                      );
                    })}
                </Select>
              </Col>
              <Col span={2}></Col>
              <Col span={8}>
                <Search
                  placeholder="Search by Member Name"
                  onSearch={q =>
                    this.props.getClientMembersRequest(this.state.id, { q })
                  }
                  style={{ width: "100%" }}
                />
              </Col>
              <Col span={4}>
                <Dropdown
                  overlay={bulkMenu}
                // disabled={true ? this.state.selectedRowKeys.length === 0 : false}
                >
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#1b91ec",
                      color: "#ffffff"
                    }}
                  >
                    Bulk Actions <Icon type="down" />
                  </Button>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Table
              pagination={{
                ...meta,
                onShowSizeChange: (current, limit) =>
                  this.onChangeFilter(limit, "limit"),
                showSizeChanger: true,
                onChange: page =>
                  this.props.getClientSingleBrandMembers(
                    this.state.id,
                    this.state.brand_id,
                    { page }
                  ),
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} o f ${total} items`
              }}
              columns={columns}
              dataSource={data}
              className="table-client-member"
              style={{ background: "#fff" }}
              rowKey="cwh_id"
              loading={isLoading}
              rowSelection={rowSelection}
            />
          </Col>
        </Row>
        <ViewModal
          visible={this.state.viewModalVisible}
          onCancel={this.handleClose}
        />
        <EndModal
          visible={this.state.endModalVisible}
          onCancel={this.handleClose}
          onSave={this.handleEnd}
          reasonOptions={leavingReasons}
          statusOptions={employeeStatus}
          selectedMember={this.state.selectedMember}
          isLoading={isLoading}
        />
        <BulkEndModal
          visible={this.state.bulkEndModalVisible}
          onCancel={this.handleClose}
          onSave={this.handleBulkEnd}
          reasonOptions={leavingReasons}
          statusOptions={employeeStatus}
          selectedMembers={this.state.selectedMembers}
          isLoading={isLoading}
        />
        <UpdateModal
          visible={this.state.updateModalVisible}
          onCancel={this.handleClose}
          onSave={this.handleUpdate}
          statusOptions={employeeStatus}
          selectedMember={this.state.selectedMember}
          isLoading={isLoading}
        />
        <BulkUpdateModal
          visible={this.state.bulkUpdateModalVisible}
          onCancel={this.handleClose}
          onSave={this.handleBulkUpdate}
          statusOptions={employeeStatus}
          selectedMembers={this.state.selectedMembers}
          isLoading={isLoading}
        />
        <ReassignModal
          visible={this.state.reassignModalVisible}
          onCancel={this.handleClose}
          onSave={this.handleReassign}
          selectedClient={this.state.id}
          clientsOptions={clients_all}
          brandOptions={brands_all}
          branchOptions={branchOptions}
          positionOptions={positions}
          reasonOptions={leavingReasons}
          statusOptions={employeeStatus}
          onSelectClient={this.props.getClientBrandsAllRequest}
          onSelectBrand={this.props.getBranchesByBrands}
          selectedMember={this.state.selectedMember}
          isLoading={isLoading}
        />

        <BulkReassignModal
          visible={this.state.bulkReassignModalVisible}
          onCancel={this.handleClose}
          onSave={this.handleBulkReassign}
          selectedClient={this.state.id}
          clientsOptions={clients_all}
          brandOptions={brands_all}
          branchOptions={branchOptions}
          positionOptions={positions}
          reasonOptions={leavingReasons}
          statusOptions={employeeStatus}
          onSelectClient={this.props.getClientBrandsAllRequest}
          onSelectBrand={this.props.getBranchesByBrands}
          selectedMembers={this.state.selectedMembers}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

const ClientPage = ClientLayout(Page, 1);

export default ClientPage;
