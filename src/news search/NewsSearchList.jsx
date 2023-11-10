import React from 'react'
import NewsSearchShow from './NewsSearchShow'

function NewsSearchList({newsDataSearch}) {
    const renderedNewsSearchData = newsDataSearch.map((news)=>{
        return <NewsSearchShow news={news} key={news.publishedAt} />
    })

  return (
    <div className="news-list-display">
      {renderedNewsSearchData}
    </div>
  )
}

export default NewsSearchList
