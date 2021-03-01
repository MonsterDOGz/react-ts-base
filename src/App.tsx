import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import Positions from './components/Positions';
import 'vikingship/dist/index.css';
import { Button, Menu } from 'vikingship';
import 'antd/dist/antd.css';
import { Alert, Tabs } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

function App() {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
  };
  const { TabPane } = Tabs;
  function callback(key: string) {
    console.log(key);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <LikeButton />
        <Positions />
        <Button btnType="primary" disabled={false} size="sm">
          按钮
        </Button>
        <Alert message="Error Text" description="" type="error" closable onClose={onClose} />
        <Menu>
          <Menu.Item>active</Menu.Item>
          <Menu.Item disabled>disabled</Menu.Item>
          <Menu.Item>xyz</Menu.Item>
          <Menu.SubMenu title="dropdown">
            <Menu.Item>drop1</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title="opened">
            <Menu.Item>opened1</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <Tabs onChange={callback} type="card">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Tab 4" key="4">
            Content of Tab Pane 4
          </TabPane>
          <TabPane tab="Tab 5" key="5">
            Content of Tab Pane 5
          </TabPane>
          <TabPane tab="Tab 6" key="6">
            Content of Tab Pane 6
          </TabPane>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
