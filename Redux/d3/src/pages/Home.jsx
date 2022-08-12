import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector  } from "react-redux";
import { getFeedsApi } from "../store/Feeds/feed.action";

const Home = () => {
  const [feeds, setFeeds] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8080/feeds").then((r) => {
  //     setFeeds(r.data);
  //   });
  // }, []); 

  const dispatch = useDispatch() 
  const {data, getFeeds } = useSelector((state)=>state.feed) 
  useEffect(() => {
     
    if(data.length === 0){
    dispatch(getFeedsApi())
    }

  }, [])
  
  // if(getFeeds.loading)return <h3>loading.....</h3>;
  // if(getFeeds.error)return <h3>Something went wrong.....</h3>;

  return (
    <div>
      <h1>Home</h1>
      <br />
      {getFeeds.loading && <h3>loading.....</h3>}
      {getFeeds.error && <h3>Something went wrong.....</h3>}
      {!getFeeds.loading &&
      data.map((feed) => (
        <div
          key={feed.id}
          style={{
            padding: "10px",
            margin: "auto",
            marginTop: "10px",
            border: "1px solid grey",
            maxWidth: "200px",
          }}
        >
          <div>{feed.title}</div>
          <div>{feed.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
