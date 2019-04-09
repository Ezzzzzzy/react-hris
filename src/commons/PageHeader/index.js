import React, { PureComponent } from "react";
// import { Breadcrumb } from "antd";
// import { Link } from "react-router-dom";
import "./styles.css";

export default class PageHeader extends PureComponent {
  render() {
    const {
      title,
      action,
      content,
      // breadcrumbList,
      extraContent,
      tabActiveKey,
      tabDefaultActiveKey
    } = this.props;

    const activeKeyProps = {};
    if (tabDefaultActiveKey !== undefined) {
      activeKeyProps.defaultActiveKey = tabDefaultActiveKey;
    }
    if (tabActiveKey !== undefined) {
      activeKeyProps.activeKey = tabActiveKey;
    }

    // const breadcrumb = (
    //   <Breadcrumb className="breadcrumb" separator=">">
    //     {breadcrumbList.map(item => (
    //       <Breadcrumb.Item key={item.title}>
    //         {item.url ? <Link to={item.url}>{item.title}</Link> : item.title}
    //       </Breadcrumb.Item>
    //     ))}
    //   </Breadcrumb>
    // );

    return (
      <div className="pageHeader">
        {/* {breadcrumb} */}
        <div className="detail">
          <div className="main">
            <div className="row">
              {title && <h1 className="title">{title}</h1>}
              {action && <div className="action">{action}</div>}
            </div>
            <div className="row">
              {content && <div className="content">{content}</div>}
              {extraContent && (
                <div className="extraContent">{extraContent}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
