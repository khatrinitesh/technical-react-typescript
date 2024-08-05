import React, { useState } from 'react'

const CustomApp = () => {

    const [showMarket,setShowMarket] = useState(true);
  return (
    <>
    {showMarket && <div>Content goes here</div>}
    </>
  )
}

export default CustomApp