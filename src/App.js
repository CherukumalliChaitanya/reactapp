import React, { useState, useEffect } from "react";
import {Card,Button}from "antd";
import axios from "axios";
import './App.css';

const {Meta}=Card;

function App() {
  const [news, setNews]=useState([]);
  
  useEffect(()=> {
  const loadNews=async()=>{
    const response=await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=31ec60e379a243658c18e392b648e3c2");
    setNews(response.data.articles);
  };
  loadNews();
  },[]);

  console.log("news",news);

  return(
    <div className="App">
        {news && news.map((item,index)=>{
          return (
            <Card
            key={index}
            hoverable
            style={{width:"100%"}}
            cover={<img alt="image" src={item.urlToImage}/>}
            >
              <Meta title={item.title} description={item.content}/>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Button type="primary" style={{marginTop:"20px"}}>
                Read More
                </Button>

              </a>


            </Card>
          );
        })}


    </div>
  );

}

export default App;
