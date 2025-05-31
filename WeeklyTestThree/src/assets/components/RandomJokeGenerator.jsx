import { useState } from "react";
// import '/src/App9.css'


const RandomJoke=()=>{

const[joke,setJoke]=useState(null);
const[loading,setLoading]= useState(false);
const [error,setError]=useState(false);


const fetchjoke=()=>{

    setLoading(true);
    setError(null);

     fetch("https://official-joke-api.appspot.com/random_joke")
     .then((res)=>{
         if (!res.ok) throw new Error("Failed to fetch joke");
        return res.json();
     })
     .then((data)=>{
        setJoke(data)
    setLoading(false)
}
    )
  .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });

}

return(
    <>
    <div className="joke-container">
        <h1 className="joke-title">9. 😂 Random Joke Generator </h1>
        <button onClick={fetchjoke} className="joke-btn">Get a random Joke</button>

        {loading && <p className="loading-text">Loading..</p>}

         {error && <p className="error-text">{error}</p>}

         {joke && (
        <div className="joke-box">
          <p className="joke-setup"><strong>{joke.setup}</strong></p>
          <p className="joke-punchline">{joke.punchline}</p>
        </div>
      )}
    </div>
    
    </>
)
  
 
}

export default RandomJoke;




