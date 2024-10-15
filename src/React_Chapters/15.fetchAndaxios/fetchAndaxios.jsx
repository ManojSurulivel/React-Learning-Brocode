import React,{useEffect, useState} from 'react'
//import axios from 'axios'

const MyComponent = () => {
    const [api,setApi] = useState("")


    //fetch 
    async function  apiCall(){
        const response = await fetch("http://official-joke-api.appspot.com/random_joke")
        const data = await response.json();
        setApi(data);


        console.log(data)
    }
    
    // //axios
    // async function apiAxios(){
    //     const responses = await axios.get("http://official-joke-api.appspot.com/random_joke")
    //     console.log(responses.data)
    // }


    useEffect(()=>{
        apiCall();
        //apiAxios()
    },[])
  return (
    <div>
      <h1>Joke API</h1>
      <button onClick={apiCall}>Api call</button>
      {/* <button onClick={apiAxios}>Api call</button> */}


    </div>
  )
}

export default MyComponent
