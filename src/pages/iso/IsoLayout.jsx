import React from 'react'
import { Outlet } from 'react-router-dom'

function IsoLayout() {
  return (
    <div>
        Hello
        <Outlet/>
    </div>
  )
}

export default IsoLayout
