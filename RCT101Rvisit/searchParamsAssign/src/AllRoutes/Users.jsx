import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
//import { AuthContext } from '../Contexts/AuthContext';

const Users = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page") || 1));
  //const [text, setText] = useState(searchParams.get("q") || "")
  //const {state, handleLogin, handleLogout} = useContext(AuthContext)

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setData(res.data.data);
      console.log(res.data);
    });
  }, [page]);

  useEffect(() => {
    setSearchParams({
      page,
    });
  }, [page]);

  return (
    <div>
      <h2>User</h2>
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> */}
      {/* <button onClick={() => handleSearch(data, text)}>Search</button> */}
      <div>
        <button disabled={page === 0} onClick={(e) => setPage(page - 1)}>
          1
        </button>
        <button disabled={page === 2} onClick={(e) => setPage(page + 1)}>
          2
        </button>
      </div>

      {data.map((elem) => (
        <div key={elem.id}>
          <img src={elem.avatar} alt="1" />
          <h4>
            {elem.first_name}
            {elem.last_name}
          </h4>
          <Link to={`/users/${elem.id}`}>
            <p>See More</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
