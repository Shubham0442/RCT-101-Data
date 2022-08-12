import React from 'react'
import TableItem from './TableItem'

const Table = ({submit, setsubmit}) => {
  return (
    <div>
        <TableItem submit = {submit} setsubmit={setsubmit}/>
    </div>
  )
}

export default Table