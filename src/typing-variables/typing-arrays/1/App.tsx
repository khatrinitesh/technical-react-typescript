import React from 'react'

const App:React.FC = () => {

    const numberwise:number[] = [1,2,3,4,5];
    const wordwise:string[] = ['happy','moment','wonderful','nice']
    const wordwisewithjoin = wordwise.join(', ')

  return (
    <div>
        Number Wise: [{numberwise}]
        <br />
        Word Wise: [{wordwisewithjoin}]
    </div>
  )
}

export default App