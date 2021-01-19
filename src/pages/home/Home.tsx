import React from 'react';
import styles from './home.module.css'
import { Header, Footer, Slide, Banner, Prod } from '../../components'
import { Row, Col, Typography } from 'antd'
import { productList1, productList2, productList3 } from '../../mock/comm'
import s1 from '../../assets/images/sider_2019_02-04-2.png'
import s2 from '../../assets/images/sider_2019_02-04-2.png'
import s3 from '../../assets/images/sider_2019_02-04.png'


export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 8
    }
  }
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <div className={styles['page-content']}>
          <Row>
            <Col span={6}>
              <Slide></Slide>
            </Col>
            <Col span={18}>
              <Banner></Banner>
            </Col>
          </Row>
          <Prod
            prods={productList1}
            image={s1}
            title={<Typography.Title level={3} type='warning'>爆款推荐</Typography.Title>}>

          </Prod>
          <Prod
            prods={productList2}
            image={s2}
            title={<Typography.Title level={3} type='success'>新品上市</Typography.Title>}>

          </Prod>
          <Prod
            prods={productList3}
            image={s3}
            title={<Typography.Title level={3} type='danger'>国内美景</Typography.Title>}>

          </Prod>
        </div>
        <Footer />
      </div>
    );
  }
}


// export default Home;