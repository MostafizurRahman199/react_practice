import React, { useEffect, useState } from 'react'
import useWindowWidth from '../HOC/useWindowWidth'

const Layout = () => {

    const onSmallScreen = useWindowWidth();
    
  return (
    <div>
        <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>                                        
    </div>
  )
}

export default Layout