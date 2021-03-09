import React from 'react';
import styles from './home.module.css'
import { Header, Footer, Slide, Banner, Prod } from '../../components'
import { Row, Col, Typography, Spin } from 'antd'
import s1 from '../../assets/images/sider_2019_02-04-2.png'
import s2 from '../../assets/images/sider_2019_02-04-2.png'
import s3 from '../../assets/images/sider_2019_02-04.png'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../redux/store'
import { startFn, failFn, successFn } from '../../redux/recommondProd/recommondActions'
import axios from 'axios'
interface State {
  productList: any,
  loading: boolean,

}

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommondProd.loading,
    error: state.recommondProd.error,
    productList: state.recommondProd.productList
  }
}
const mapDispachToProps = (dispatch: Dispatch) => {
  return {
    start: () => {
      dispatch(startFn())
    },
    fail: (data) => {
      dispatch(failFn(data))
    },
    success: (data) => {
      dispatch(successFn(data))
    },
  }
}
class Home extends React.Component<State> {
  constructor(props) {
    super(props)
    this.state = {
      a: 8,
      productList: [],
      loading: true
    }
  }
  componentDidMount() {
    this.setState({
      loading: true
    })
    axios.get('http://123.56.149.216:8080/api/productCollections', {
      headers: {
        'x-icode': '3D50B8E3B1DFC232'
      }
    }).then(res => {
      console.log(res, 'res ------');
      this.setState({
        productList: res.data,
        loading: false
      })
    })
  }
  nihao() {
    console.log('来自header的change');

  }
  render() {
    const productList = (this.state as any).productList
    if ((this.state as any).loading) {
      return <Spin></Spin>
    }
    return (
      <div className={styles.app}>
        <Header change={this.nihao} />
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
            prods={productList[0].touristRoutes}
            image={s1}
            title={<Typography.Title level={3} type='warning'>爆款推荐</Typography.Title>}>

          </Prod>
          <Prod
            prods={productList[1].touristRoutes}
            image={s2}
            title={<Typography.Title level={3} type='success'>新品上市</Typography.Title>}>

          </Prod>
          <Prod
            prods={productList[2].touristRoutes}
            image={s3}
            title={<Typography.Title level={3} type='danger'>国内美景</Typography.Title>}>

          </Prod>
        </div>
        <Footer />
      </div>
    );
  }
}


export const HomePage = connect()(Home);
