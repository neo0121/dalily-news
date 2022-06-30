import React, { useEffect , useState} from 'react'
import axios from 'axios'
import CardItems from './CardItems'
import Navbar from './Navbar'



// let ApiKey = '4ab922526cad4d63b2ae82201a2e3e07'
function Home({category}) {
  let Url = `https://newsapi.org/v2/everything?q=${category}&apiKey=4ab922526cad4d63b2ae82201a2e3e07`
    const [post, setpost] = useState([])
    useEffect(()=>{
           axios.get(Url)
           .then((res)=>{
            // console.log(res.data.articles);
             setpost(res.data.articles)

           
           }).catch((err)=>{
            console.log("something has changed",err.message);
           })
    },[Url])
  
  return (
    <>

<div className="container">
    <div className="row my-4">
  {
    Array.from(post).map((dt)=>{

      return <div className="col-md-4">
          <CardItems urlToImage={dt.urlToImage} title={JSON.stringify(dt.title)} content={JSON.stringify(dt.content)} url={dt.url}/>
          </div>
    })
  }
  </div>
  </div>

  
    </>
      
  )
}

export default Home
