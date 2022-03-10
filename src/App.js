import React from 'react'
import { useState,useEffect } from 'react';
import './App.css'


let App = ()=>{

let [data,setData] = useState([])
let [quote,setQuote] = useState({})
  useEffect(()=>{
    fetch('https://type.fit/api/quotes')
    .then(response=>response.json())
    .then(json => setData(json))
  },[])


let displayitems = ()=>{
  if(data && data.length > 0){
  let index = Math.floor(Math.random()*(data.length-1))
  setQuote(data[index])
  console.log(quote);
  }
}

//   useEffect(()=>{
// if(data && data.length>0){
//   setText(data[1].text)
//   console.log(data);
// }
//   },[data])

return (
  <>
<header>
  <h1>Random Quotes</h1>
</header>
<div className='quotes'>
<h1>{quote.text}</h1>
<h3>{quote.author}</h3>
</div>
<div className='change'>
<button className='Change' onClick={displayitems}>Change</button>
</div>
  </>
)
}

export default App;
