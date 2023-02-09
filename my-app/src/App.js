
import './App.css';      
import { useState,useEffect} from 'react'
import Card from './components/Card.js';
import Textarea from './components/Textarea';

function App( ) {
  const[jokes,setJokes]=useState("")
  const fetchJokes =async ()=>{
    const res = await  fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
    const jokes =await  res.json();
    console.log(jokes);
    setJokes(jokes)
  }
  useEffect(() => {
  fetchJokes()
  }, [])
  
  return(
    
    <div className='flex flex-col justify-center items-center  border-green-400 border-2 p-4 bg-black w-3/4  rounded-2xl sticky  h-1/2 gap-y-2 ' >

<Card />
<Textarea jokes = {jokes}/>
<button onClick={fetchJokes} class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
    Generator😂
  </button>
    </div>

    
  )
}
   

export default App;
