import React from "react";
import TableItems from "./TableItems";


const Table = ({data, handleDlt, getData, page}) => {
 
  return (
    <div style={{ width: "100%", margin: "auto", marginTop: "20px" }}>
      <TableItems data={data} getData={getData} handleDlt={handleDlt} page = {page}/>
    </div>
  );
};

export default Table;
