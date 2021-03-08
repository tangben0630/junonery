import React, { useState } from 'react'
import Zu from './Zu'
import Zu2 from './Zu2'
export const List1 = () => {
  return (<><Zu value={1}></Zu>
    <Zu value={2} ></Zu>
    <Zu2 value={3} ></Zu2>
    <Zu2 value={4} ></Zu2></>)
}