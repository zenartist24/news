import { useState, useEffect } from 'react'
import './App.css'
import NewsSearch from './NewsSearch';
import NewsSearchList from './news search/NewsSearchList';

function App() {
  const [newsDataSearch, setNewsDataSearch] = useState([]);

  const fetchDataSearch = (keyword) =>{
    fetch(`https://newsapi.org/v2/everything?q=${keyword}&pageSize=10&apiKey=0d22c0412ce241c2a04c033dbc1b1f70`)
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setNewsDataSearch(data.articles);
    })
  }

  console.log(newsDataSearch)

  return (
    <div>
      <NewsSearch onUpdate={fetchDataSearch} />
      <NewsSearchList newsDataSearch={newsDataSearch} />
    </div>
  )
}

export default App
