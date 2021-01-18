import React from 'react'
import styles from './prod.module.css'
import { Typography, Image } from 'antd'
interface Props {
  title: string,
  img: string,
  price: string | number,
  size: string,
  id: number | number
}
export const ProdItem: React.FC<Props> = ({ title, id, size, img, price }) => {
  return <div>
    {
      size === 'large' ?
        <Image src={img} height={285} width={490} /> :
        <Image src={img} height={120} width={240} />
    }
    <div>
      <Typography.Text type='secondary'>
        {title.slice(0, 15)}
      </Typography.Text>
      <Typography.Text type='danger'>
        ${price}起
      </Typography.Text>
    </div>
  </div>

}
