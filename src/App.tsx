import React from 'react';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import styles from './App.module.css'
import { GlobalOutlined } from '@ant-design/icons'
import logo from './logo.svg'
function App() {

  return (
    <div className={styles.app}>
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <div className={styles['wrap']}>

            <Typography.Text>让旅游更简单</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu>
                  <Menu.Item>
                    中文
                </Menu.Item>
                  <Menu.Item>
                    英文
                </Menu.Item>
                </Menu>
              }
            // icon={GlobalOutlined}
            >语言
            </Dropdown.Button>
            <Button.Group className={styles['b-group']}>
              <Button>注册</Button>
              <Button>登陆</Button>
            </Button.Group>
          </div>
        </div>


        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['app-logo']} />
          <Typography.Title className={styles['title']} level={3}>香克斯</Typography.Title>
          <Input.Search placeholder={'请输入...'} className={styles['sear']} />
        </Layout.Header>
        <Menu mode={'horizontal'} className={styles['main-mean']}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key={4}>单人游</Menu.Item>
          <Menu.Item key={5}>自由行</Menu.Item>
        </Menu>
      </div>
      <Layout.Footer>
        <Typography.Title level={4} style={{ textAlign: 'center' }}>
          版权所有@。。。
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
}


export default App;
