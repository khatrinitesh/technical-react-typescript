import React from 'react'

const CustomApp = () => {
  return (
    <>
        <EnchanedComp isLoading={false} content="This is the content" />
    </>
  )
}

export default CustomApp

const WithLoading = (Component) => ({isLoading,...props}) => {
   return(
    <>
     <div>
        {isLoading ? <div>Loading...</div> : <Component {...props}/>}
    </div>
    </>
   )
}

const Component = (props) => <div>{props.content}</div>;

const EnchanedComp = WithLoading(Component)