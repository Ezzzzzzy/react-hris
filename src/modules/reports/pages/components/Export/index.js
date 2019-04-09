import React, { Component } from "react";
import {
  Modal,
  Form,
  Select,
  Button,
  Row,
  Col,
  Input,
  Card,
  Steps,
  Radio,
  Icon,
  DatePicker,
  Divider,
  Table,
  Switch,
  message
} from "antd";
import moment from "moment";

import "./index.css";
import Level1 from "../../../../../images/filter_level1.png";
import Level2 from "../../../../../images/filter_level2.png";
import Level3 from "../../../../../images/filter_level3.png";

import { memberList_source, filterOption, filters } from "./data.js";

const FormItem = Form.Item;
const Option = Select.Option;
const Step = Steps.Step;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;

const FilterForm = Form.create()(props => {
  const {
    selectFilter,
    selectedFilter,
    addFilter,
    filterData: { filter: dataFilters },
    clients,
    business_units,
    regions,
    cities,
    locations,
    positions,
    documentTypes,
    statuses,
    filters
  } = props;

  const { form } = props;
  const { getFieldDecorator, validateFields } = form;

  const okHandle = () => {
    validateFields((err, fieldsValue) => {
      const { filter, option, complete } = fieldsValue;

      const data = { filter, option, complete };
      console.log('okhandle check: ', data)
      if (err) return;
      form.resetFields();
      addFilter(data);
    });
  };
  const removeFilters = dataFilters.map(val => val.filter)
  return (
    <div className="exportForm">
      <Form>
        <Row gutter={16}>
          <Col>
            <Col xs={24} md={19}>
              <Row gutter={8}>
                <Col span={12}>
                  <FormItem label="Select a Filter">
                    {getFieldDecorator("filter", {
                      rules: [
                        {
                          required: true,
                          message: "Please select a filter"
                        }
                      ]
                    })(
                      <Select
                        placeholder="Select Filter"
                        showSearch
                        onChange={value => {
                          form.resetFields(["option"]);
                          form.resetFields(["complete"]);
                          selectFilter(value);
                        }}
                      >
                        {filters.map((filter, i) => (
                          <Option
                            key={i}
                            value={filter.value}
                            disabled={removeFilters.indexOf(filter.value) !== -1 ? true : false}
                          >
                            {filter.filter}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </FormItem>
                </Col>
                {!selectedFilter && (
                  <Col span={12}>
                    <FormItem label="Options">
                      <Select
                        disabled={true}
                        placeholder="Select a Filter First"
                      />
                    </FormItem>
                  </Col>
                )}

                {selectedFilter === "hiring_date_dr" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select date"
                          }
                        ]
                      })(<RangePicker />)}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "client_id_ms" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select Client"
                          }
                        ]
                      })(
                        <Select
                          mode="multiple"
                          placeholder="Select Client"
                          showSearch
                        >
                          {clients &&
                            clients.map((client, i) => (
                              <Option key={i} value={client.id}>
                                {client.client_name}
                              </Option>
                            ))}
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "business_unit_id_ms" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select Business Unit"
                          }
                        ]
                      })(
                        <Select
                          mode="multiple"
                          placeholder="Please Select Business Unit"
                          showSearch
                        >
                          {business_units.map(bu => (
                            <Option key={bu.id} value={bu.id}>
                              {bu.business_unit_name}
                            </Option>
                          ))}
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "region_id_ms" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select Region"
                          }
                        ]
                      })(
                        <Select
                          mode="multiple"
                          placeholder="Select Region"
                          showSearch
                        >
                          {regions &&
                            regions.map((region, i) => (
                              <Option key={i} value={region.id}>
                                {region.region_name}
                              </Option>
                            ))}
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "city_id_ms" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select City"
                          }
                        ]
                      })(
                        <Select
                          mode="multiple"
                          placeholder="Select City"
                          showSearch
                        >
                          {cities &&
                            cities.map((city, i) => (
                              <Option key={i} value={city.id}>
                                {city.city_name}
                              </Option>
                            ))}
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "location_id_ms" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select Location"
                          }
                        ]
                      })(
                        <Select
                          mode="multiple"
                          placeholder="Select Location"
                          showSearch
                        >
                          {locations &&
                            locations.map((location, i) => (
                              <Option key={i} value={location.id}>
                                {location.location_name}
                              </Option>
                            ))}
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "position_id_ms" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select Position"
                          }
                        ]
                      })(
                        <Select
                          mode="multiple"
                          placeholder="Select Position"
                          showSearch
                        >
                          {positions &&
                            positions.map((position, i) => (
                              <Option key={i} value={position.id}>
                                {position.position_name}
                              </Option>
                            ))}
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "gender_ss" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please select a Gender"
                          }
                        ]
                      })(
                        <Select placeholder="Select Gender" showSearch>
                          <Option value="male">Male</Option>
                          <Option value="female">Female</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "requirement_type" ? (
                  <Col span={12}>
                    <Row gutter={8}>
                      <Col span={14}>
                        <FormItem label="Options">
                          {getFieldDecorator("option", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select an Option"
                              }
                            ]
                          })(
                            <Select placeholder="Select Requirement" showSearch>
                              {documentTypes &&
                                documentTypes.map((documentType, i) => (
                                  <Option key={i} value={documentType.id}>
                                    {documentType.type_name}
                                  </Option>
                                ))}
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                      <Col span={10}>
                        <FormItem label="Complete">
                          {getFieldDecorator("complete", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select an Option"
                              }
                            ]
                          })(
                            <Select placeholder="Select" showSearch>
                              <Option value={1}>Yes</Option>
                              <Option value={0}>No</Option>
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Col>
                ) : null}

                {selectedFilter === "government_numbers" ? (
                  <Col span={12}>
                    <Row gutter={8}>
                      <Col span={14}>
                        <FormItem label="Options">
                          {getFieldDecorator("option", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select an Option"
                              }
                            ]
                          })(
                            <Select placeholder="Select Requirement" showSearch>
                              <Option value="pin">
                                PIN
                              </Option>
                              <Option value="tin">
                                TIN
                              </Option>
                              <Option value="sss">
                                SSS
                              </Option>
                              <Option value="phl">
                                PHL
                              </Option>
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                      <Col span={10}>
                        <FormItem label="Complete">
                          {getFieldDecorator("complete", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select an Option"
                              }
                            ]
                          })(
                            <Select placeholder="Select" showSearch>
                              <Option value={1}>Yes</Option>
                              <Option value={0}>No</Option>
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Col>
                ) : null}

                {selectedFilter === "employment_status_id_ms" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select an Option"
                          }
                        ]
                      })(
                        <Select
                          mode="multiple"
                          placeholder="Select Status"
                          showSearch
                        >
                          {statuses &&
                            statuses.map((status, i) => (
                              <Option key={i} value={status.id}>
                                {status.status_name}
                              </Option>
                            ))}
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "atm_details_ss" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select an Option"
                          }
                        ]
                      })(
                        <Select placeholder="Select an Item" showSearch>
                          <Option value={1}>Complete</Option>
                          <Option value={0}>Incomplete</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}

                {selectedFilter === "data_completion_ss" ? (
                  <Col span={12}>
                    <FormItem label="Options">
                      {getFieldDecorator("option", {
                        rules: [
                          {
                            required: true,
                            message: "Please Select an Option"
                          }
                        ]
                      })(
                        <Select placeholder="Select an Item" showSearch>
                          <Option value={1}>Complete</Option>
                          <Option value={0}>Incomplete</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                ) : null}
              </Row>
            </Col>
          </Col>
          <Col span={5}>
            <Button
              onClick={okHandle}
              style={{ width: "100%", marginTop: "42px" }}
              type="primary"
            >
              <Icon type="plus" />
              Add
            </Button>
          </Col>
        </Row>
      </Form>
      <Divider />
      {dataFilters &&
        dataFilters.map((dataFilter, i) => {
          return (
            <Row gutter={16} key={i}>
              <Col>
                <Col xs={24} md={19}>
                  <Row gutter={8}>
                    <Col span={12}>
                      <FormItem label="Select a Filter">
                        <Select
                          placeholder="Select Filter"
                          showSearch
                          style={{ width: "100%" }}
                          defaultValue={dataFilter.filter}
                          disabled
                        >
                          {filters
                            .filter(
                              filterOption =>
                                filterOption.value === dataFilter.filter
                            )
                            .map((filterOption, i) => (
                              <Option key={i} value={filterOption.value}>
                                {filterOption.filter}
                              </Option>
                            ))}
                        </Select>
                      </FormItem>
                    </Col>

                    {dataFilter.filter === "hiring_date_dr" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("hiring_date", {
                            rules: [
                              {
                                required: true,
                                message: "Select date"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(<RangePicker disabled />)}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "client_id_ms" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("client", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select Client"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select
                              mode="multiple"
                              placeholder="Select Client"
                              showSearch
                              disabled
                            >
                              {clients &&
                                clients.map((client, i) => (
                                  <Option key={i} value={client.id}>
                                    {client.client_name}
                                  </Option>
                                ))}
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "business_unit_id_ms" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("business_unit", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select Business Unit"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select
                              mode="multiple"
                              placeholder="Select Business Unit"
                              showSearch
                              disabled
                            >
                              {business_units.map(bu => (
                                <Option key={bu.id} value={bu.id}>
                                  {bu.business_unit_name}
                                </Option>
                              ))}
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "region_id_ms" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("region", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select Region"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select
                              mode="multiple"
                              placeholder="Select Region"
                              showSearch
                              disabled
                            >
                              {regions &&
                                regions.map((region, i) => (
                                  <Option key={i} value={region.id}>
                                    {region.region_name}
                                  </Option>
                                ))}
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "city_id_ms" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("city", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select City"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select
                              mode="multiple"
                              placeholder="Select City"
                              showSearch
                              disabled
                            >
                              {cities &&
                                cities.map((city, i) => (
                                  <Option key={i} value={city.id}>
                                    {city.city_name}
                                  </Option>
                                ))}
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "location_id_ms" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("location", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select Location"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select
                              mode="multiple"
                              placeholder="Select Location"
                              showSearch
                              disabled
                            >
                              {locations &&
                                locations.map((location, i) => (
                                  <Option key={i} value={location.id}>
                                    {location.location_name}
                                  </Option>
                                ))}
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "position_id_ms" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("position", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select Position"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select
                              mode="multiple"
                              placeholder="Select Position"
                              showSearch
                              disabled
                            >
                              {positions &&
                                positions.map((position, i) => (
                                  <Option key={position.id} value={position.id}>
                                    {position.position_name}
                                  </Option>
                                ))}
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "gender_ss" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("gender", {
                            rules: [
                              {
                                required: true,
                                message: "Please select a Gender"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select placeholder="Select Gender" showSearch disabled>
                              <Option value="male">Male</Option>
                              <Option value="female">Female</Option>
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "requirement_type" ? (
                      <Col span={12}>
                        <Row gutter={8}>
                          <Col span={14}>
                            <FormItem label="Options">
                              {getFieldDecorator("requirement_type", {
                                rules: [
                                  {
                                    required: true,
                                    message: "Please Select an Option"
                                  }
                                ],
                                initialValue: dataFilter.option
                              })(
                                <Select
                                  placeholder="Select Requirement"
                                  showSearch
                                  disabled
                                >
                                  {documentTypes &&
                                    documentTypes.map((documentType, i) => (
                                      <Option key={i} value={documentType.id}>
                                        {documentType.type_name}
                                      </Option>
                                    ))}
                                </Select>
                              )}
                            </FormItem>
                          </Col>
                          <Col span={10}>
                            <FormItem label="Complete">
                              <Select
                                placeholder="Select"
                                showSearch
                                defaultValue={dataFilter.complete}
                                disabled
                              >
                                <Option value={1}>Yes</Option>
                                <Option value={0}>No</Option>
                              </Select>
                            </FormItem>
                          </Col>
                        </Row>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "government_numbers" ? (
                      <Col span={12}>
                        <Row gutter={8}>
                          <Col span={14}>
                            <FormItem label="Options">
                              {getFieldDecorator("option", {
                                rules: [
                                  {
                                    required: true,
                                    message: "Please Select an Option"
                                  }
                                ],
                                initialValue: dataFilter.option
                              })(
                                <Select
                                  placeholder="Select Requirement"
                                  showSearch
                                  disabled
                                >
                                  <Option value="pin">
                                    PIN
                                  </Option>
                                  <Option value="tin">
                                    TIN
                                  </Option>
                                  <Option value="sss">
                                    SSS
                                  </Option>
                                  <Option value="phl">
                                    PHL
                                  </Option>
                                </Select>
                              )}
                            </FormItem>
                          </Col>
                          <Col span={10}>
                            <FormItem label="Complete">
                              <Select
                                placeholder="Select"
                                showSearch
                                defaultValue={dataFilter.complete}
                                disabled
                              >
                                <Option value={1}>Yes</Option>
                                <Option value={0}>No</Option>
                              </Select>
                            </FormItem>
                          </Col>
                        </Row>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "employment_status_id_ms" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("option", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select an Option"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select
                              mode="multiple"
                              placeholder="Select Status"
                              showSearch
                              disabled
                            >
                              {statuses &&
                                statuses.map((status, i) => (
                                  <Option key={i} value={status.id}>
                                    {status.status_name}
                                  </Option>
                                ))}
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "atm_details_ss" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("option", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select an Option"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select placeholder="Select an Item" showSearch disabled>
                              <Option value={1}>Complete</Option>
                              <Option value={0}>Incomplete</Option>
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}

                    {dataFilter.filter === "data_completion_ss" ? (
                      <Col span={12}>
                        <FormItem label="Options">
                          {getFieldDecorator("option", {
                            rules: [
                              {
                                required: true,
                                message: "Please Select an Option"
                              }
                            ],
                            initialValue: dataFilter.option
                          })(
                            <Select
                              placeholder="Select an Item"
                              showSearch
                              disabled
                            >
                              <Option value={1}>Complete</Option>
                              <Option value={0}>Incomplete</Option>
                            </Select>
                          )}
                        </FormItem>
                      </Col>
                    ) : null}
                  </Row>
                </Col>
              </Col>
              <Col span={5}>
                <Icon type="close" style={{ marginTop: '50px' }} />
              </Col>
            </Row>
          );
        })}
    </div>
  );
});

const TemplateStep = Form.create()((props) => {
  const {
    templates,
    selectedTemplate,
    handleTemplate,
    handleTemplateSelect
  } = props
  return (
    <Row>
      <Form type="vertical">
        <RadioGroup
          defaultValue="new"
          onChange={e => handleTemplate(e.target.value)}
        >
          <Radio value="existing">Use Existing Template</Radio>
          <Col
            style={{
              width: "100%",
              marginLeft: "25px",
              marginTop: "10px"
            }}
          >
            <Select
              placeholder="Select a Template"
              selected={selectedTemplate}
              onSelect={value => handleTemplateSelect(value)}
            >
              {templates.map(template => (
                <Option key={template.id} value={template.id}>{template.template_name}</Option>
              ))}
              {/* <Option value="https://google.com">HC - Template 1</Option> */}
            </Select>
          </Col>
          <br />
          <Radio value="new">Create New Template</Radio>
        </RadioGroup>
      </Form>
    </Row>
  );
});

const ConfigureMemberStep = props => {
  const { memberList_columns } = props;
  return (
    <Row>
      <Table
        pagination={false}
        columns={memberList_columns}
        dataSource={memberList_source}
        rowKey={record => record.id}
        size="small"
      />
    </Row>
  );
};

const ConfigureHeadStep = Form.create()(props => {
  const { onChangeConfigure } = props;
  const { first, second, third } = props.configureData.levels;

  return (
    <Row gutter={16}>
      <Col xs={24} md={10}>
        <FormItem
          label="Level 1"
        // {...formColProps}
        >
          <Select
            value={first}
            onChange={value => onChangeConfigure(value, "first")}
          >
            {filterOption.map((filter, i) => {
              return (
                <Option key={i} value={filter.value}>
                  {filter.filter}
                </Option>
              );
            })}
          </Select>
        </FormItem>
        <FormItem label="Level 2">
          <Select
            value={second}
            disabled={!first}
            onChange={value => onChangeConfigure(value, "second")}
          >
            {filterOption
              .filter(filter => filter.value !== first)
              .map((filter, i) => (
                <Option key={i} value={filter.value}>
                  {filter.filter}
                </Option>
              ))}
          </Select>
        </FormItem>
        <FormItem label="Level 3">
          <Select
            value={third}
            disabled={!second}
            onChange={value => onChangeConfigure(value, "third")}
          >
            {filterOption
              .filter(
                filter => filter.value !== second && filter.value !== first
              )
              .map((filter, i) => (
                <Option key={i} value={filter.value}>
                  {filter.filter}
                </Option>
              ))}
          </Select>
        </FormItem>
      </Col>
      <Col xs={24} md={14}>
        <Card style={{ background: "#F0F3F8", minHeight: "230px" }}>
          {first && !second && !third ? (
            <img src={Level1} style={{ width: "100%" }} alt="Filter Level 1" />
          ) : first && second && !third ? (
            <img src={Level2} style={{ width: "100%" }} alt="Filter Level 2" />
          ) : first && second && third ? (
            <img src={Level3} style={{ width: "100%" }} alt="Filter Level 3" />
          ) : null}
        </Card>
      </Col>
    </Row>
  );
});

const ConfigureStep = props => {
  const {
    onChangeConfigure,
    configureData,
    memberList_source,
    memberList_columns,
    handleMemberList
  } = props;
  const { type } = configureData;
  return (
    <Form>
      <Row>
        <Col span={10}>
          <FormItem label="Select Report Type">
            <Select
              value={type}
              placeholder="Report Type"
              onChange={value => onChangeConfigure(value, "type")}
            >
              <Option value="HC">Head Count</Option>
              <Option value="ML">Member List</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Divider />
      {type && type === "HC" ? (
        <ConfigureHeadStep
          onChangeConfigure={onChangeConfigure}
          configureData={configureData}
        />
      ) : type === "ML" ? (
        <ConfigureMemberStep
          handleMemberList={handleMemberList}
          onChangeConfigure={onChangeConfigure}
          configureData={configureData}
          memberList_source={memberList_source}
          memberList_columns={memberList_columns}
        />
      ) : null}
    </Form>
  );
};

const ExportStep = Form.create()(props => {
  const { onChangeExport, exportData } = props;
  const { title, saved, template_name } = exportData;
  return (
    <Row>
      <FormItem label="Report Title">
        <Input
          placeholder="Report Title"
          value={title}
          onChange={e => onChangeExport(e.target.value, "title")}
        />
      </FormItem>

      <Divider />
      <RadioGroup
        defaultValue={saved}
        onChange={e => onChangeExport(e.target.value, "saved")}
      >
        <Radio value={1}>Save new template as</Radio>
        <Col
          style={{
            width: "100%",
            marginLeft: "25px",
            marginTop: "10px"
          }}
        >
          <Input
            disabled={!saved}
            placeholder="Template Name"
            value={template_name}
            onChange={e => onChangeExport(e.target.value, "template_name")}
          />
        </Col>
        <br />
        <Radio value={0}>Don't save</Radio>
      </RadioGroup>
    </Row>
  );
});
class ExportModal extends Component {
  state = {
    current: 0,
    use_template: false,
    selectedTemplate: null,
    formData: {
      type: "",
      title: "",
      template_name: "",
      saved: 0,
      last_modified_by: "",
      filter: [],
      filters: {},
      levels: {
        first: null,
        second: null,
        third: null
      },
      config: null,
      memberFilter: [
        "employee_id",
        "full_name",
        "last",
        "first",
        "middle",
        "client",
        "business_unit",
        "position",
        "location",
        "city",
        "region",
        "date_start",
        "birthday",
        "age",
        "gender",
        "status",
        "present_address",
        "present_city",
        "personal_email",
        "facebook_email",
        "contact_numbers",
        "sss",
        "tin",
        "pagibig",
        "atm",
        "rate",
        "maternity",
        "reason"
      ]
    },
    selectedFilter: null
  };

  handleFormChange = (value, field) => {
    let formData = this.state.formData;
    if (field === "first" || field === "second" || field === "third") {
      if (field === "first") {
        formData.levels.second = null;
        formData.levels.third = null;
      }
      if (field === "second") {
        formData.levels.third = null;
      }
      formData.levels[field] = value;
    } else {
      formData[field] = value;
    }
    this.setState({ formData });
  };

  handleFilter = filter => {
    let formData = Object.assign({}, this.state.formData);
    formData.filter.push(filter);
    this.setState({ formData, selectedFilter: null });
  };

  handleTemplate = template => {
    template === 'existing' ?
      this.setState({ use_template: true }, () => console.log(this.state.use_template)) :
      this.setState({ use_template: false }, () => console.log(this.state.use_template))
  }

  handleTemplateSelect = (selectedTemplate) => {
    this.setState({ selectedTemplate })
  }

  selectFilter = selectedFilter => this.setState({ selectedFilter });

  handleMemberList = filter => {
    let formData = this.state.formData;
    if (!formData.memberFilter.find(mfilter => mfilter === filter)) {
      formData.memberFilter.push(filter);
    } else {
      formData.memberFilter.splice(formData.memberFilter.indexOf(filter), 1);
    }
    this.setState({ formData }, console.log(formData.memberFilter));
  };

  handleGenerateRequest = () => {
    let request = Object.assign({}, this.state.formData);

    if (request.type === "HC") {
      request.config = { levels: request.levels };
    } else if (request.type === "ML") {
      request.config = [...request.memberFilter];
    }

    request.filter.forEach(value => {
      if (value.filter === "hiring_date_dr") {
        request.filters[value.filter] = {
          from: moment(value.option[0]).format("YYYY-MM-DD"),
          to: moment(value.option[1]).format("YYYY-MM-DD")
        };
      } else {
        request.filters[value.filter] = value.option;
      }
    });

    const removeFields = ["filter", "memberFilter", "levels"];
    removeFields.forEach(obj => delete request[obj]);

    request['last_modified_by'] = this.props.user.id

    if (!request.title) {
      message.warning("Please enter report title");
    }
    else if (request.saved && !request.template_name) {
      message.warning("Please enter template name")
    }
    else {
      this.props.onGenerate(request);
    }
  };

  render() {
    const { current } = this.state;
    const {
      visible,
      onCancel,
      templates,
      clients,
      business_units,
      brands,
      regions,
      cities,
      locations,
      positions,
      documentTypes,
      statuses
    } = this.props;

    const memberList_columns = [
      {
        dataIndex: "id",
        key: "id",
        render: (text, record) => {
          return <Icon type="bars" />;
        }
      },
      {
        title: "Column Name",
        dataIndex: "column_name",
        key: "column_name"
      },
      {
        title: "Show",
        dataIndex: "value",
        render: (text, record) => (
          <Switch
            checked={
              this.state.formData.memberFilter.indexOf(record.column) === -1
                ? false
                : true
            }
            onChange={() => this.handleMemberList(record.column)}
          />
        )
      }
    ];

    const steps = [
      {
        title: "Template",
        content: <TemplateStep
          selectedTemplate={this.state.selectedTemplate}
          templates={templates}
          handleTemplate={this.handleTemplate}
          handleTemplateSelect={this.handleTemplateSelect}
        />
      },
      {
        title: "Filter",
        content: (
          <FilterForm
            filterData={this.state.formData}
            selectFilter={this.selectFilter}
            addFilter={this.handleFilter}
            selectedFilter={this.state.selectedFilter}
            clients={clients}
            business_units={business_units}
            brands={brands}
            regions={regions}
            cities={cities}
            locations={locations}
            positions={positions}
            documentTypes={documentTypes}
            statuses={statuses}
            filters={filters}
          />
        )
      },
      {
        title: "Configure",
        content: (
          <ConfigureStep
            onChangeConfigure={this.handleFormChange}
            configureData={this.state.formData}
            memberList_columns={memberList_columns}
            memberList_source={memberList_source}
            handleMemberList={this.handleMemberList}
          />
        )
      },
      {
        title: "Export",
        content: (
          <ExportStep
            onChangeExport={this.handleFormChange}
            exportData={this.state.formData}
          />
        )
      }
    ];

    const StepFooter = () => {
      return (
        <div className="steps-action">
          {current > 0 && (
            <Button
              style={{ marginLeft: 8, float: "left" }}
              onClick={() => this.setState({ current: this.state.current - 1 })}
            >
              Back
            </Button>
          )}
          {
            (this.state.use_template && current === 0) && (
              <Button
                type="primary"
                onClick={() =>
                  this.props.onGenerateTemplate(this.state.selectedTemplate)
                }
                disabled={this.state.selectedTemplate ? false : true}
              >
                Generate
              </Button>
            )
          }
          {(!this.state.use_template && current < steps.length - 1) && (
            <Button
              type="primary"
              disabled={
                ((
                  current === 2 && this.state.formData.type === 'HC' && !this.state.formData.levels.first) ||
                  (current === 2 && !this.state.formData.type)
                )
                  ? true : false}
              onClick={() => this.setState({ current: this.state.current + 1 })}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button onClick={() => this.handleGenerateRequest()} type="primary">
              Export
            </Button>
          )}
        </div>
      );
    };

    return (
      <Modal
        className="add-modal"
        title="Generate a Report"
        visible={visible}
        onCancel={onCancel}
        footer={<StepFooter />}
      >
        <Row gutter={16}>
          <Steps current={current}>
            {steps.map((item, i) => (
              <Step key={i} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
        </Row>
      </Modal>
    );
  }
}

export default ExportModal;
