import React from "react";
import "./index.css";

const StatusCircle = ({ color }) => (
  <div className="status-circle" style={{ border: `3px solid ${color}` }} />
);

export default StatusCircle;
