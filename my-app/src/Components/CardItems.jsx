import React from 'react'
function CardItems({urlToImage,title,content,url}) {
  return (
    <div>
       <div className="card" style={{height:500, marginTop:50}}>
                <img src={urlToImage} className="card-img-top" alt="..." style={{height:270}}/>
                <div className="card-body ">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{title.length<66? content.slice(0,160): content.slice(0,100)}</p>
                  <a href={url} className="btn btn-primary">read more</a>
                </div>
                </div>
    </div>
  )
}

export default CardItems
