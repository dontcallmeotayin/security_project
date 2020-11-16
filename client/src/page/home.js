import React, { useEffect, useState } from "react";
import NavBar from "../component/navbar";
import { PostBoxInput, PostBoxInAllPost } from "../component/postBox";
import axios from "axios";
import backend from "../ip";

const Home = () => {
  const [blogData, setBlogData] = useState([]);
  const token = sessionStorage.getItem("token");
  const fetchData = async () => {
    try {
      const response = await axios.get(backend + "/api/blogs", {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      const { success, data } = response.data;
      if (response.data) {
        // console.log(response.data['data'])
        setBlogData(response.data['data']);
        console.log("aaa:", blogData)
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "144px" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <PostBoxInput />
        {console.log("aaa", blogData)}
        {blogData.map((item, i) =>
          <PostBoxInAllPost
            key={i}
            data={item}
            fetchData={fetchData}
            token={token}
          />
        )}
      </div>
    </div>
  );
}

export default Home;