import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Form, Input, Icon, Button } from "antd";

const FormItem = Form.Item;

let uuid = 0;
class DynamicFieldSet extends React.Component {
  remove = k => {
    const { form, value } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue(value + "_keys");
    // We need at least one passenger
    if (keys.length === 0) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      [value + "_keys"]: keys.filter(key => {
        uuid--;
        return key !== k;
      })
    });
  };

  add = () => {
    uuid++;
    const { form, value } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue(value + "_keys");
    const nextKeys = keys.concat(uuid);

    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      [value + "_keys"]: nextKeys
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { value, display } = this.props;

    getFieldDecorator(value + "_keys", { initialValue: [] });
    const keys = getFieldValue(value + "_keys");
    const formItems = keys.map(k => {
      return (
        <FormItem span={24} required={false} key={k}>
          {getFieldDecorator(`${value}[${k}].number`, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [
              {
                required: true,
                whitespace: true,
                message: `Please input ${display} or delete this field.`
              }
            ]
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

    return (
      <div>
        <FormItem span={24} label={display} key={0}>
          {getFieldDecorator(`${value}[0].number`, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [
              {
                required: value === "mobile_number" ? true : false,
                message: `Please input ${display} or delete this field.`
              }
            ]
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

DynamicFieldSet.propTypes = {
  display: PropTypes.string,
  value: PropTypes.string
};

export default DynamicFieldSet;
