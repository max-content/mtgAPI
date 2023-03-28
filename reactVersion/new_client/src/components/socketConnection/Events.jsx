import React from 'react'

const Events = ({events}) => {
  return (
    <div>
        <ul>
        {
            events.map((e, idx) => 
                <li key= {idx}> {e} </li>)
        }
        </ul>
    </div>
  )
}

export default Events