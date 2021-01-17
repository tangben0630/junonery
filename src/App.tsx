import React from 'react';
import { Layout, Typography, Input } from 'antd'
import styles from './App.module.css'
import logo from './logo.svg'
function App() {

  return (
    <div className={styles.app}>
      <div className={styles['app-header']}>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['app-logo']} />
          <Typography.Title className={styles['title']} level={3}>香克斯</Typography.Title>
          <Input.Search placeholder={'请输入...'} className={styles['sear']} />
        </Layout.Header>
      </div>
    </div>
  );
}


export default App;
