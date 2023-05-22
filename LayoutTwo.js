import React, { useEffect, useState } from 'react'
import useWindowWidth from '../HOC/useWindowWidth';

const LayoutTwo = () => {
    
  const onSmallScreen = useWindowWidth(600);

  return (
    <div className={onSmallScreen ? 'small' : 'large'}>
        <h1>This is another component</h1>                                        
    </div>
  )
}

export default LayoutTwo;