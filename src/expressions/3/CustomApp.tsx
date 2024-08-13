import React from 'react'

const CustomApp = () => {
  return (
    <>
        <Example isHighlighted={true}/>
    </>
  )
}

export default CustomApp


// inline styling and classnames

interface Props{
    isHighlighted:boolean;
}

const Example:React.FC<Props> = ({isHighlighted}) => {

    const style = {
        backgroundColor: isHighlighted ? 'yellow' : 'white',
        padding: '10px',
        border: '1px solid black'
    }

    const className = isHighlighted ? 'highlighted' : 'normal';
    return(
        <>  
         <div style={style} className={className}>
      This is a {isHighlighted ? 'highlighted' : 'normal'} component.
    </div>
        </>
    )
}