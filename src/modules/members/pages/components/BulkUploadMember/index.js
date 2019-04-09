import React, { Component } from "react";
import {
  Button,
  Col,
  Collapse,
  Form,
  Icon,
  List,
  Row,
  Spin,
  Upload
} from "antd";

const FormItem = Form.Item;
const Panel = Collapse.Panel;

class BulkUploadMember extends Component {
  state = {
    fileList: []
  };

  handleSubmit = () => {
    const { form, onUpload } = this.props;
    form.validateFields((err, fields) => {
      if (!err) {
        let body = new FormData();
        body.append("import_file", fields["fileList"][0].originFileObj);

        onUpload(body);
        form.resetFields();
      }
    });
  };

  render() {
    const { error, form, isLoading, success } = this.props;
    return (
      <Form layout="vertical">
        <Spin
          spinning={isLoading}
          indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
        >
          <Row gutter={8}>
            <Col span={24}>
              <FormItem label="Upload File">
                {form.getFieldDecorator("fileList", {
                  rules: [{ required: true, message: "Select a file first!" }],
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

          <Row>
            <Col>
              <Collapse>
                <Panel header="Success Messages" key="1">
                  <p>{success}</p>
                </Panel>
                <Panel header="Error Messages" key="2">
                  <List
                    size="small"
                    bordered
                    dataSource={error ? error : []}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
                </Panel>
              </Collapse>
            </Col>
          </Row>

          <br />

          <Button
            disabled={this.state.fileList.length === 0}
            onClick={this.handleSubmit}
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
          >
            Save
          </Button>
        </Spin>
      </Form>
    );
  }
}

export default Form.create()(BulkUploadMember);
