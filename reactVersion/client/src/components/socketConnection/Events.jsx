import React from 'react'

const Events = ({gameEvents}) => {
  return (
    <div>
        <ul>
        {
            gameEvents.map((e, idx) => 
                <li key= {idx}> {e} </li>)
        }
        </ul>
    </div>
  )
}

export default Events