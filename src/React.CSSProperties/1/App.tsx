import React from 'react'


const boxStyle:React.CSSProperties = {
    width: '200px',
    height: '200px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
}

const App = () => {
  return (
    <div>
        <div style={boxStyle}>
      <p>Styled Box</p>
    </div>
    </div>
  )
}

export default App
