import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Form, Input, Icon, Button } from "antd";

const FormItem = Form.Item;

class UpdateDynamicFieldSet extends React.Component {
  state = { uuid: 0 };
  remove = k => {
    const { form, value } = this.props;
    let { uuid } = this.state;
    // can use data-binding to get
    const keys = form.getFieldValue(value + "_keys");
    // We need at least one passenger
    if (keys.length === 0) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      [value + "_keys"]: keys.filter(key => {
        this.setState({ uuid: uuid-- });
        return key !== k;
      })
    });
  };

  add = () => {
    let { uuid } = this.state;
    this.setState({ uuid: uuid++ });
    const { form, value } = this.props;

    // can use data-binding to get
    const keys = form.getFieldValue(value + "_keys");
    const nextKeys = keys.concat(this.state.uuid);

    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      [value + "_keys"]: nextKeys
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { value, display, initialValue } = this.props;

    getFieldDecorator(value + "_keys", {
      initialValue: initialValue.length === 0 ? [] : initialValue
    });

    const keys = getFieldValue(value + "_keys");

    let new_keys = keys.slice(1);

    const formItems = new_keys.map((k, index) => {
      getFieldDecorator(`${value}[${++index}].id`, {
        initialValue: k.id ? k.id : ""
      });

      return (
        <FormItem span={24} required={false} key={index}>
          {getFieldDecorator(`${value}[${index}].number`, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [
              {
                required: true,
                whitespace: true,
                message: `Please input ${display} or delete this field.`
              }
            ],
            initialValue: k.number
          })(
            <Input
              placeholder={display}
              style={{ width: "80%" }}
              maxLength={value === "mobile_number" ? 11 : 9}
            />
          )}
          {keys.length > 0 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              style={{ paddingLeft: 5 }}
              disabled={keys.length === 0}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });

    getFieldDecorator(`${value}[0].id`, {
      initialValue: initialValue.length === 0 ? "" : initialValue[0].id
    });

    return (
      <div key={value[0].id}>
        <FormItem span={24} label={display}>
          {getFieldDecorator(`${value}[0].number`, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [
              {
                required: value === "mobile_number" ? true : false,
                message: `Please input ${display} or delete this field.`
              }
            ],
            initialValue:
              initialValue.length === 0 ? "" : initialValue[0].number
          })(
            <Input
              placeholder={display}
              maxLength={value === "mobile_number" ? 11 : 9}
            />
          )}
        </FormItem>
        {formItems}
        <FormItem span={24}>
          <Button type="dashed" onClick={this.add} style={{ width: "100%" }}>
            <Icon type="plus" /> Add {display}
          </Button>
        </FormItem>
      </div>
    );
  }
}

UpdateDynamicFieldSet.propTypes = {
  display: PropTypes.string,
  value: PropTypes.string
};

export default UpdateDynamicFieldSet;
