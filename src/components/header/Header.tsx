import React from 'react'
import styles from './header.module.css'
import logo from '../../logo.svg'
import { Layout, Typography, Input, Dropdown, Menu, Button } from 'antd'
import { useHistory } from 'react-router-dom'
export const Header: React.FC = (props) => {
  // const newPath = `/subpackages/coupon/pages/share/index`
  // wx.redirectTo({
  //   url: newPath,
  // })
  //0,1,1,2,3,5,8,13,21
  //1,1,2,3,5,8,13,21  0755-29822103
  // function fib(n) {
  //   if (n === 1) { return 1 }
  //   if (n === 2) { return 1 }
  //   let a = 1, b = 1, c = 2
  //   for (let i = 2; i < n; i++) {
  //     c = a + b
  //     a = b
  //     b = c
  //   }
  //   console.log(c, 'cc');
  // }
  // function fast(arr) {
  //   let len = arr.length
  //   if (len <= 1) {
  //     return arr
  //   }
  //   const mid = Math.floor(len / 2)
  //   const midValue = arr[mid]
  //   arr.splice(mid, 1)
  //   let left: number[] = [], right: number[] = []
  //   len = arr.length
  //   for (let i = 0; i < len; i++) {
  //     if (arr[i] > midValue) {
  //       right.push(arr[i])
  //     } else {
  //       left.push(arr[i])
  //     }
  //   }
  //   return fast(left).concat([midValue], fast(right))
  // }


  const history = useHistory()
  // const location = useLocation()
  const toLogin = () => {
    history.push({ pathname: '/login', state: { a: 2 } })
  }
  const toReg = () => {
    history.push({ pathname: '/reg' })
  }
  return <>
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles['inner']}>
          <Typography.Text>让旅游更简单</Typography.Text>
          <Dropdown.Button style={{ marginLeft: 15 }} overlay={
            <Menu>
              <Menu.Item>中文</Menu.Item>
              <Menu.Item>英语</Menu.Item>
            </Menu>
          }>
            语言
          </Dropdown.Button>
          <Button.Group className={styles['btn-group']}>
            <Button onClick={() => { toLogin() }}>登录</Button>
            <Button onClick={() => { toReg() }}>注册</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <img src={logo} alt="" className={styles['app-logo']} />
        <Typography.Title className={styles['title']} level={3}>鹰眼</Typography.Title>
        <Input.Search placeholder={'请输入...'} className={styles['sear']} />
      </Layout.Header>
      <Menu className={styles['main-menu']} mode={'horizontal'}>
        <Menu.Item key={1}>国际旅游</Menu.Item>
        <Menu.Item key={2}>同城旅游</Menu.Item>
        <Menu.Item key={3}>单人游</Menu.Item>
        <Menu.Item key={4}>组团游</Menu.Item>
        <Menu.Item key={5}>峡谷游</Menu.Item>
        <Menu.Item key={6}>郊游</Menu.Item>
      </Menu>
    </div>
  </>
}
