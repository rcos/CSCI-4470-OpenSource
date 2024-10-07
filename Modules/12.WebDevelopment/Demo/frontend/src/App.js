import React, { useState, useEffect } from 'react';
import './App.css';
import { UilFilePlusAlt } from '@iconscout/react-unicons'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';


function App() {
  
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(0);

const handleClick = () =>{
  try{
    fetch("http://localhost:1234/new", {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "title": title,
        "description": desc
      })
    });
    setCount(count+1);
  } catch(err){
    console.error(`Error creating a note: ${err}`);
  }
  
}

useEffect(()=>{
  try{
    fetch("http://localhost:1234/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        setCount(data.length)
      });
  } catch(err){
    console.error(`Error Getting notes: ${err}`);
  }
},[count]);

  return (
    <body>
      <div class="wrapper">
        <div class="note-item">
        <Popup class="popup" trigger={
            <button class="button"> 
                <UilFilePlusAlt size="225px"/>
            </button>
          } modal nested>
        {close => (
                        <div className='modal'>
                            <div className='content'>
                              <header>
                                <p>Add A New Note</p>
                              </header>
                              <form action="#">
                                <div>
                                  <label for="">Title</label>
                                  <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
                                </div>
                                <div>
                                  <label for="">Description</label>
                                  <textarea onChange={(e)=>setDesc(e.target.value)}/>
                                </div>
                              </form>

                            </div>
                            <div>
                                <button onClick=
                                    {() => {close(); handleClick()}}>
                                        Add Note
                                </button>
                            </div>
                        </div>
                    )}
      </Popup>
        </div>
        {notes.map((e) => (
          <div class="note-item">
            <div class="details">
              <p><b>{e.title}</b></p>
              <span>{e.description}</span>
            </div>
            <div class="bottom-content">
              <span>{e.date}</span>
            </div>
          </div>
        ))}
      </div>
    </body>
  );
}


export default App;
