import React from 'react'
interface robotProps {
  id: number,
  name: string,
  email: string
}
const Robort: React.FC<robotProps> = ({ id, name, email }) => {
  function click(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    console.log(e.target);

  }
  return (
    <li onClick={click}>
      <h3>{name}</h3>
      <p>{email}</p>
    </li>
  )
}

export default Robort