import React from "react";
import { Modal, Button, Icon } from "antd";

const DeleteModal = ({ visible, onCancel, onOk, title, content }) => (
  <Modal
    visible={visible}
    onCancel={onCancel}
    footer={[
      <Button htmlType="button" onClick={onCancel} key="1">
        Cancel
      </Button>,
      <Button key="2" type="danger" onClick={onOk}>
        OK
      </Button>
    ]}
  >
    <div className="text-center">
      <Icon
        type="exclamation-circle-o"
        style={{ color: "#F75D59", fontSize: "10em" }}
      />
      <h1 className="delete-header">{title}</h1>
      <p>{content}</p>
    </div>
  </Modal>
);

export default DeleteModal;
