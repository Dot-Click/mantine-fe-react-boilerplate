import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      <h2>Default Layout</h2>
      <Outlet />
    </div>
  )
}

export default DefaultLayout