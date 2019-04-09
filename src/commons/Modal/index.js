import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

import "./index.css";

const ModalComponent = ({
  visible,
  onCancel,
  title,
  content,
  footer,
  onCreate
}) => (
  <Modal
    className="add-modal"
    title={title}
    visible={visible}
    onCancel={onCancel}
    footer={footer}
  >
    <div>{content}</div>
  </Modal>
);

ModalComponent.propTypes = {
  footer: PropTypes.array
};

ModalComponent.defaultProps = {
  footer: null
};

export default ModalComponent;
