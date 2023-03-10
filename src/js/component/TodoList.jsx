import React, { useState } from "react";
import gram from '/workspace/to-do-list/src/img/gram.jpg';



const ToDoList = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const change1 = (e) => {
    setInputList(e.target.value);
  };
  const change2 = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  useEffect(()=>{fetch('https://assets.breatheco.de/apis/fake/todos/user/andres', {
    method: "GET",
    body: JSON.stringify(todos),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => {
      console.log(resp.ok); // will be true if the response is successfull
      console.log(resp.status); // the status code = 200 or code = 400 etc.
      console.log(resp.text()); // will try return the exact result as string
      return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
  })
  .then(data => {
      //here is were your code should start after the fetch finishes
      console.log(data); //this will print on the console the exact object received from the server
  })
  .catch(error => {
      //error handling
      console.log(error);
  });},[])
  useEffect(()=>{
    fetch('https://assets.breatheco.de/apis/fake/todos/user/andres', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  },[])
  const deleteItem = (ind) => {
    return setItems(
      items.filter((item, i) => {
        return i !== ind;
      })
    );
  };
  return (
    <div className="App">
      <div className="container" style={{textAlign: "center", backgroundColor:"salmon"}}>
        <div className="inner_div" >
          <input type="text" onChange={change1} value={inputList} />
          <button onClick={change2} style={{ backgroundColor: "lightblue", fontStretch: "1rem", borderRadius:"10px" }}>Add it to the List</button>
          <ol style={{ listStyle: "none", backgroundImage: `url(${gram})`, backgroundSize: 'cover', width: '100%', position: "center" }}>
            {items.map((itemval, ind) => {
              return (
                <div style={{ display: "flex", backgroundColor:"lightblue", opacity:".5" }}>
                  <button onClick={() => deleteItem(ind)} style={{margin:"1rem", backgroundColor:"lightblue", borderRadius:"10px" }}>X</button>
                  <li id={ind} key={items.id} style={{fontWeight:"bold", color:"black", fontSize:"30px"}}>
                    {itemval}
                    <span
                      style={{
                        textDecoration: items.isChecked
                          ? "underline overline dotted red;"
                          : "none",
                      }}
                    >
                      {items.text}
                    </span>
                    <input type="checkbox" checked={items.isChecked} style={{margin:"1rem" }}></input>
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
