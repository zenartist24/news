import React from 'react'

function NewsSearchShow({news}) {
    let content = 
    <div className="individual-news">
        <img src={news.urlToImage} />
        <div>
            <a href={news.url}><h2>{news.title}</h2></a>
            <h3>{news.author}</h3>
            <p>{news.description}</p>
        </div>
    </div>

  return (
    <div>
      {content}
    </div>
  )
}

export default NewsSearchShow
