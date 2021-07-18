import { Component } from "react";
import Content from "../content/content.jsx";
import "./style.css";
import {
  SettingTwoTone,
  MenuFoldOutlined,
  CloseOutlined,
  DeploymentUnitOutlined,
  FolderOpenTwoTone,
  UserOutlined,
  SlidersOutlined,
  BoxPlotOutlined,
} from "@ant-design/icons";

class Sider extends Component {
  state = {
    toggler() {
      document.getElementById('sidebar').classList.toggle('active')
    }
  };
  render() {
    return (
      <div className="sider-wrapper" id="sidebar">
        <Content />
        <div
          className="toggle-btn"
          id="toggle-btn"
          onClick={this.state.toggler}
        >
          <MenuFoldOutlined />
        </div>
        <div className="siderItems">
          <div className="item">
            <DeploymentUnitOutlined style={{ color: "#2596fe" }} />
            <a href="https://google.com">Start</a>
          </div>
          <div className="item">
            <UserOutlined style={{ color: "red" }} />
            <a href="https://google.com">Profile</a>
          </div>
          <div className="item">
            <BoxPlotOutlined style={{ color: "green" }} />
            <a href="https://google.com">Assesments</a>
          </div>
          <div className="item">
            <FolderOpenTwoTone />
            <a href="https://google.com">Condition Library</a>
          </div>
          <div className="item">
            <SlidersOutlined style={{ color: "coral" }} />
            <a href="https://google.com">Symptoms Tracking</a>
          </div>
          <div className="item">
            <SettingTwoTone />
            <a href="https://google.com">Settings</a>
          </div>

          <div className="toggle-close" onClick={this.state.toggler}>
            <CloseOutlined />
          </div>
        </div>
      </div>
    );
  }
}

export default Sider;
