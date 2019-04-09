import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../PageHeader";
import "./styles.css";

export default ({ children, wrapperClassName, top, ...restProps }) => (
  <div style={{ margin: "0 -24px" }} className={wrapperClassName}>
    {top}
    <PageHeader key="pageheader" {...restProps} linkElement={Link} />
    {children ? <div className="content">{children}</div> : null}
  </div>
);
