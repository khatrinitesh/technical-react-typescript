import React, { useEffect, useRef, useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example/>
    </>
  )
}

export default CustomApp

const coordinates = [40.7128, -74.0060] as const;

const Example:React.FC = () => {

    const [latitude, longitude] = coordinates;

    return (
        <>
            <p>Latitude: {latitude}</p>
            <p>Latitude: {longitude}</p>
        </>
    )
}