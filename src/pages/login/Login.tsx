import React from 'react'
import { useParams } from 'react-router-dom'
export const Login: React.FC = (props) => {
  const params = useParams()
  console.log(params, 'params', props);

  return <div>
    login页面
  </div>
}