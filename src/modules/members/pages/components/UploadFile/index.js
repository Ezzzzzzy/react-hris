import React, { Component } from "react";
import {
  Modal,
  Form,
  Select,
  Button,
  Row,
  Col,
  Upload,
  Icon,
  Spin
} from "antd";

import "./index.css";

const FormItem = Form.Item;
const Option = Select.Option;

class UploadModal extends Component {
  state = { fileList: [] };

  okHandle = () => {
    const { onSave, form, memberId } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      let body = new FormData();
      for (let key in fieldsValue) {
        if (!Array.isArray(fieldsValue[key])) {
          body.append(key, fieldsValue[key]);
        } else {
          body.append(key, fieldsValue[key][0].originFileObj);
        }
      }

      onSave(memberId, body);
    });
  };

  render() {
    const {
      form,
      visible,
      onCancel,
      documentTypes,
      user,
      isLoading
    } = this.props;

    form.getFieldDecorator("last_modified_by", { initialValue: user.name });

    return (
      <Modal
        className="add-modal"
        title="Upload Document"
        visible={visible}
        onCancel={onCancel}
        footer={null}
      >
        <Spin spinning={isLoading}>
          <Form layout="vertical">
            <Row gutter={8}>
              <Col span={24}>
                <FormItem label="Document Type">
                  {form.getFieldDecorator("document_type_id", {
                    rules: [{ required: true }]
                  })(
                    <Select>
                      {documentTypes &&
                        documentTypes.map((val, i) => (
                          <Option key={i} value={val.id}>
                            {val.type_name}
                          </Option>
                        ))}
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={24}>
                <FormItem label="Upload File">
                  {form.getFieldDecorator("fileList", {
                    valuePropName: "fileList",
                    getValueFromEvent: e =>
                      Array.isArray(e) ? e : e && e.fileList
                  })(
                    <Upload
                      beforeUpload={file => {
                        this.setState(({ fileList }) => ({
                          fileList: [...fileList, file]
                        }));
                        return false;
                      }}
                    >
                      <Button>
                        <Icon type="upload" /> Click to upload
                      </Button>
                    </Upload>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Button
              onClick={this.okHandle}
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              Save
            </Button>
          </Form>
        </Spin>
      </Modal>
    );
  }
}

export default Form.create()(UploadModal);
