import React,{useEffect} from "react";

const TableItems = ({ data, getData, handleDlt, page}) => {


    useEffect(() => {
        getData()
      }, [page]);
    
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <table style={{ border: "1px solid", margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Marital Status</th>
            <th>Delete Entry</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.name}</td>
              <td>{elem.age}</td>
              <td>{elem.department}</td>
              <td>{elem.address}</td>
              <td>{elem.salary}</td>
              <td>{elem.isMarried ? "Married" : "Unmarried"}</td>
              <td>
                <button 
                onClick={()=>handleDlt(elem.id)}
                style={{fontSize:"10px"}}
              >Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItems;
