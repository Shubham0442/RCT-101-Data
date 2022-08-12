import axios from "axios";
import React, { useReducer, useState } from "react";

const inState = {
    isLoading: false,
    isError: false,
    data: []
  };

  const gitHubReducer = (state, action) => {
    switch (action.type) {
      case "Fetch_USER_LOADING": {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case "Fetch_USER_SUCCESS": {
        return {
          ...state,
          isLoading: false,
          data: action.payload
        };
      }
      case "Fetch_USER_FAILURE": {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      default: {
        return state;
      }
    }
  };

  const gitHubLoadingAction = { type: "Fetch_USER_LOADING" };
  const gitHubSuccessAction = { type: "Fetch_USER_SUCCESS" };
  const gitHubFailureAction = { type: "Fetch_USER_FAILURE" };

  

const GitHub = () => {

    


  const [state, dispatch] = useReducer(gitHubReducer, inState);
  const [text, setText] = useState("");


  

  const fetchGitHubUser = (query) => {
    dispatch(gitHubLoadingAction);

    axios
      .get("https://api.github.com/search/users?" + `q=${query}`)
      .then((res) => {
        dispatch({ ...gitHubSuccessAction, payload: res.data.items });
        console.log(res)
      })
      .catch((error) => {
        dispatch(gitHubFailureAction);
      });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search here"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button onClick={()=>fetchGitHubUser(text)}>Search</button>
      </div>
      <div>
        {state.isLoading && <div>Loading.....</div>}
        {   
           state.data.map((elem)=>(
            <div>
                {elem.login}
            </div>
           ))
        }
      </div>  
    </div>
  );
};

export default GitHub;
