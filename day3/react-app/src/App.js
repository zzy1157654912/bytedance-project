import logo from './logo.svg';
import './App.css';
import { DatePicker,Row,Menu,Col,Input } from 'antd';
import 'antd/dist/antd.css';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import  Icon  from "./Icon";

const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
        <h1><img alt="logo" id="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>Ant Design</h1>
        </Col>
        <Col flex="1">
          <div id="search-box">
            <Input placeholder="搜索" />
          </div>
        </Col>
        <Col>
        <Menu mode="horizontal">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            设计
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            文档
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            组件
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="资源">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
        </Col>
      </Row>

      <div class="home-banner">
        <div class="home-banner-background">
          <img alt="background" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*kJM2Q6uPXCAAAAAAAAAAAABkARQnAQ"></img>
        </div>
        <div id="body-font">
          <img src="https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg"></img>
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default App;
