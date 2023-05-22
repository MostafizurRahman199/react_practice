import React from 'react'
import { ReactDOM } from 'react'

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <h1>
        Portals Demo
    </h1>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo