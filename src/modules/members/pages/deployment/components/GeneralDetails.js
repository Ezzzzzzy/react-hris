import React, { Component } from "react";
import { Button, Card, Col, DatePicker, Form, Input, List, Row } from "antd";
import Modal from "../../../../../commons/Modal";
import moment from "moment";

const FormItem = Form.Item;

const GeneralDetailsForm = Form.create()(
  class GeneralDetailsForm extends Component {
    state = {
      startValue: null,
      endValue: null,
      endOpen: false
    };

    disabledStartDate = startValue => {
      const endValue = this.state.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = endValue => {
      const startValue = this.state.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
      this.setState({
        [field]: value
      });
    };

    onStartChange = value => {
      this.onChange("startValue", value);
    };

    onEndChange = value => {
      this.onChange("endValue", value);
    };

    handleStartOpenChange = open => {
      if (!open) {
        this.setState({ endOpen: true });
      }
    };

    handleEndOpenChange = open => {
      this.setState({ endOpen: open });
    };

    handleSubmit = () => {
      const { form, user, member, onSave } = this.props;
      let new_member = {};

      for (let key in member) {
        if (Array.isArray(member[key])) {
          if (member[key].length !== 0) new_member[key] = member[key];
        } else {
          new_member[key] = member[key];
        }
      }

      form.validateFields((err, fields) => {
        if (!err) {
          let body = {
            ...new_member,
            maternity_leave:
              fields.from &&
              fields.to &&
              fields.from.format("MMM DD, YYYY") +
                " - " +
                fields.to.format("MMM DD, YYYY"),
            atm: fields.atm,
            rate: fields.rate,
            last_modified_by: user
          };

          onSave(member.id, body);
        }
      });
    };

    render() {
      const { form, member } = this.props;

      let fromInitialValue = member.maternity_leave
        ? moment(new Date(member.maternity_leave.split(" - ")[0]).toISOString())
        : null;
      let toInitialValue = member.maternity_leave
        ? moment(new Date(member.maternity_leave.split(" - ")[1]).toISOString())
        : null;

      return (
        <Form layout="vertical">
          <Row>
            <Col span={12}>
              <FormItem label="Maternity Leave">
                {form.getFieldDecorator("from", {
                  initialValue: fromInitialValue
                })(
                  <DatePicker
                    disabledDate={this.disabledStartDate}
                    showTime
                    format="YYYY-MM-DD"
                    placeholder="From"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                  />
                )}
              </FormItem>
            </Col>

            <Col span={12}>
              <FormItem label="(From - To)">
                {form.getFieldDecorator("to", { initialValue: toInitialValue })(
                  <DatePicker
                    disabledDate={this.disabledEndDate}
                    showTime
                    format="YYYY-MM-DD"
                    placeholder="To"
                    onChange={this.onEndChange}
                    open={this.state.endOpen}
                    onOpenChange={this.handleEndOpenChange}
                  />
                )}
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <FormItem label="ATM">
                {form.getFieldDecorator("atm", { initialValue: member.atm })(
                  <Input />
                )}
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <FormItem label="Rate">
                {form.getFieldDecorator("rate", { initialValue: member.rate })(
                  <Input />
                )}
              </FormItem>
            </Col>
          </Row>

          <Button
            type="primary"
            onClick={this.handleSubmit}
            style={{ width: "100%" }}
          >
            Update
          </Button>
        </Form>
      );
    }
  }
);

class GeneralDetails extends Component {
  state = {
    modalVisible: false
  };

  handleClose = () => this.setState({ modalVisible: false });

  showModal = () => this.setState({ modalVisible: true });

  render() {
    const { member } = this.props;
    const list = [
      {
        id: 1,
        title: "Maternity Leave",
        description: member.maternity_leave
          ? `From ${member.maternity_leave}`
          : "N/A"
      },
      {
        id: 2,
        title: "ATM",
        description: member.atm || "N/A"
      },
      {
        id: 3,
        title: "Rate",
        description: member.rate || "N/A"
      }
    ];

    return (
      <div>
        <Card>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => (
              <List.Item actions={[<a onClick={this.showModal}>Edit</a>]}>
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Card>

        <Modal
          visible={this.state.modalVisible}
          onCancel={this.handleClose}
          title="Update General Details"
          content={
            <GeneralDetailsForm
              member={this.props.member}
              user={this.props.user.name}
              onSave={this.props.onSave}
            />
          }
        />
      </div>
    );
  }
}

export default GeneralDetails;
