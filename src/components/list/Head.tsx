import React from 'react'
import styles from './he.module.css'
import { RootState } from '../../redux/store'
import { changeType, changeFn } from '../../redux/list/listActions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface Props {

}

const mapStateToProps = (state: RootState) => {
  return {
    lan: state.ListReducer.lan,
    lanList: state.ListReducer.lanList
  }
}
const mapDispachToProps = (dispatch: Dispatch) => {
  return {
    changeFn: () => {
      const action: changeType = changeFn('666', 'CH')
      dispatch(action)
    }
  }
}

type PropsType = Props & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispachToProps>

class Head extends React.Component<PropsType> {
  // change() {
  //   console.log(this.props, '66666666666666');

  //   console.log(store.getState().ListReducer, '111');
  //   const action: changeType = changeFn('666', 'CH')
  //   store.dispatch(action)
  //   console.log(store.getState().ListReducer, '222');

  // }
  render() {
    return <div className={styles['he']} onClick={() => { this.props.changeFn() }}>
      {this.props.lan}
    </ div>
  }
}



export default connect(mapStateToProps, mapDispachToProps)(Head)