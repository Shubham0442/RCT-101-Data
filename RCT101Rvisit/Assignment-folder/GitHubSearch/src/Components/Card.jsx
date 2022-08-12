
import React, { useEffect, useState } from "react";
import { getUser } from "./api";

const Card = () => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const handleSearch = () => {
    getUser(text, page)
    .then((res) => {
      console.log(res.data);
      setData(res.data.items);
    })
    .catch((err) => {
      console.log(err);
    });
  };

 

  useEffect(()=>{ 
    getUser()
  }, [text, page])

  return (
    <div>
      <h2>GitHub Users</h2>
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="search user"
          value={text}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <button disabled={page===1} onClick={() => {setPage(page - 1)
          handleSearch()
        }
      }>Prev</button>
        <button disabled={page===4} onClick={() => {setPage(page + 1)
        handleSearch()
        } 
          
        }>Next</button>
      </div>
      <div>
        {data.map((elem) => (
            <div key={elem.id} style={{textAlign:"left", width: "10%", margin:"auto"}}>
                 <li >{elem.login}</li>
            </div>     
        ))}
      </div>
    </div>
  );
};

export default Card;
