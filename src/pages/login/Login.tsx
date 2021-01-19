import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
interface Props {
  id: string
}
export const Login: React.FC<RouteComponentProps<Props>> = (props) => {
  console.log(props, '--- ');

  return <div>
    login页面,{props.match.params.id}
  </div>
}