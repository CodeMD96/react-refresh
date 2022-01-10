import React, { useState, useEffect } from "react";
import './App.css';
import { Login } from "./components/login";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [arr, setArr] = useState([]);

    useEffect(() => {
      fetchReq()
    }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(user);
  }

  const fetchReq = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setArr(data)
    // for (let i=0; i <20; i++) {
    //   const tempArr = arr;
    //   tempArr.push("https://picsum.photos/200");
    //   setArr(tempArr);
    // }
  }

  return (
    <div className="App">
      <h1>{user}</h1>
      {username ? <h1>Welcome {username}</h1> : <h1>Please log in</h1>}
      {username && <h2>Sucess</h2>}
      <Login setter={setUser} handler={submitHandler} />
      {arr.map((item, i) => {
        return(
          <div>
            <p key={i}>{item.author}</p>
            <img className="imageList" src={item.download_url} alt="random image" />
          </div>
        )
      })}
    </div>
  );
}

export default App;

// Notes ##################################################################

// line 8 wouldn't normally populate an array in state, would have empty array and populate later
// line 11 prevents rerender when form is submitted
// line 20 pasing props as html attributes but don't name the same as the values (e.g. setUser={setUser}), it gets confusing. This way is also reusable
//line 22 if array was something specific e.g. movies the aray would bebcalled movies and the item would be movie
//line 24 key value is very important, i is the index

//useeffect runs on load and whenever thing in [] changes