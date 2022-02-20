import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import * as React from 'react';
import Axios from 'axios';

export default function News() {
  const [search, setSearch] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.coinstats.app/public/v1/news?skip=0&limit=50`).then((res) => {
      setNews(res.data.news);
    });
  }, []);

  return (
    <>
      {news
        .filter((news) => {
          return news.source.includes(search);
        })
        .map((news) => {
          return (
            <div className="news-list">
              <div className="news-logo">
                <a href={news.link}>
                  <img src={news.imgURL} alt="logo" width="100px" />
                </a>
              </div>
              <div className="news-source">{news.source}</div>
              <a className="news-title" href={news.shareURL}>{news.title}</a>
            </div>
          );
        })}
    </>
  );
}
