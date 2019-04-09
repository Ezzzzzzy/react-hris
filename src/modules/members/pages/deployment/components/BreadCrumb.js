import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const BreadCrumb = ({ full_name }) => {
  const breadcrumbList = [
    {
      title: "Members",
      url: "/members"
    },
    {
      title: full_name
    },
    {
      title: "Deployment Details"
    }
  ];

  return (
    <Breadcrumb className="breadcrumb" separator=">">
      {breadcrumbList.map(item => (
        <Breadcrumb.Item key={item.title}>
          {item.url ? <Link to={item.url}>{item.title}</Link> : item.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
