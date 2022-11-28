import React from 'react'

let actualDate = new Date(Date.now()).getFullYear().toString() + "-" + (new Date(Date.now()).getMonth()+1).toString() + "-"  + new Date(Date.now()).getDate().toString()

const Datapicker = ({date = actualDate}) => {
  return (
    <div>
        <input type="date"defaultValue={date} />
    </div>
  )
}

export default Datapicker