import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "./Table";

const initial = {
  name: "",
  age: "",
  address: "",
  department: "Production",
  salary: "",
  isMarried: false,
};

const Form = () => {
  const [form, setForm] = useState(initial);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newType = type === "checkbox" ? checked : value;

    setForm({
      ...form,
      [name]: newType,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    axios
      .post(`http://localhost:8050/formData`, {
        name: form.name,
        age: form.age,
        address: form.address,
        department: form.department,
        salary: form.salary,
        isMarried: form.isMarried,
      })
      .then((res) => {
        setForm(res.data);
        // setSubmit(!submit);
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = () => {
    axios
      .get(`http://localhost:8050/formData?_page=${page}&_limit=5`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDlt = (id) => {
    axios.delete(`http://localhost:8050/formData/${id}`).then((res) => {
      setForm(res.data);
      getData();
      //
    });
  };

  const filterData = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let v = e.target.value;

    if (v !== "All") {
      axios
        .get(`http://localhost:8050/formData?department=${v}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getData();
    }
  };

  const handleSort = (e) => {
    e.preventDefault();
    let v = e.target.value;

    axios
      .get(`http://localhost:8050/formData?_sort=salary&_order=${v}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(()=>{
  //   filterData()
  //   getData()
  // },[])

  //filterData()
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginRight: "40px",
          gap: "20px",
        }}
      >
        <div>
          <h4> Filter by Department</h4>
          <select onChange={filterData}>
            <option value="All">All</option>
            <option value="Production">Production</option>
            <option value="Account">Account</option>
            <option value="Quality">Quality</option>
          </select>
        </div>

        <div>
          <h4>Sort by Salary</h4>
          <select onChange={handleSort}>
            <option value="">Sory by Salary</option>
            <option value="asc">Ascending</option>
            <option value="desc">Dececending</option>
          </select>
        </div>
      </div>

      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            name="age"
            onChange={handleChange}
            value={form.age}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            name="address"
            onChange={handleChange}
            value={form.address}
          />
        </div>
        <div>
          <select
            name="department"
            onChange={handleChange}
            defaultValue={form.department}
          >
            <option value="Production">Production</option>
            <option value="Account">Account</option>
            <option value="Quality">Quality</option>
          </select>
        </div>
        <div>
          <label>Salery</label>
          <input
            type="number"
            placeholder="Enter salary"
            name="salary"
            onChange={handleChange}
            value={form.salary}
          />
        </div>
        <div>
          <label>Is Married</label>
          <input
            type="checkbox"
            name="isMarried"
            onChange={handleChange}
            checked={form.isMarried}
          />
        </div>
        <div>
          <input type="Submit" />
        </div>
      </form>

      <Table
        getData={getData}
        handleDlt={handleDlt}
        data={data}
        id={data.id}
        page={page}
      />

      <div
        style={{
          display: "flex",
          width: "40%",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
          marginTop: "10px",
          gap: "10px"
        }}
      >
        <button disabled={page === 1} onClick={() => setPage(page - 1)} style={{fontSize:"10px"}}>
          Prev
        </button>
        <h4>{page}</h4>
        <button onClick={() => setPage(page + 1)} style={{fontSize:"10px"}}>Next</button>
      </div>
    </div>
  );
};

export default Form;
