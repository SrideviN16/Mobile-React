import React from 'react';


    class FirstComponent extends React.Component
    {
      render()
      {
        return (
        <div className='one'>
       <p>fIRST CHILD</p>
       </div>
        )
      }
    }
const Mine = () => {
  return (
    <div className='one'>Mine
    <FirstComponent></FirstComponent>
    </div>
  )
}

export default Mine