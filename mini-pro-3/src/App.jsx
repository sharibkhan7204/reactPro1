import React, { useState } from "react";
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    let copyTask = [...task];
    copyTask.push({ title, detail }); 
    setTask(copyTask)
    

    setTitle('')
    setDetail('')
  }



  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)

    setTask(co pyTa sk)
    
  }


  return (
    <div className="h-screen lg:flex bg-black text-white overflow-hidden ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start gap-5 flex-col p-10 lg:w-1/2"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* PEHLA INPUT */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 hy-20 border-2 roundedn w-full outline-none font-semibold"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILED INPUT */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 py-2 h-32 border-2 rounded w-full outline-none font-medium"
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value)
          }}
        />

        <button className="bg-white active:bg-gray-200 scale-95 text-black px-5 py-2 rounded text-xl font-semibold w-full outline-none">
          Add Notes
        </button>
      </form>

      <div className="p-10 bg-gray-900 lg:border-l-2 lg:w-1/2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div
          className="flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto"
          id="notesArea"
        >

          {task.map(function(elem,idx){

            return  <div key={idx} className="relative h-52 w-40 rounded-2xl py-8 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover text-black p-4">
              <h2 onClick={()=>{
                deleteNote(idx)
              }} className="absolute active:scale-110 top-5 right-2 bg-red-500 p-1 text-xs rounded-full "><X size={16} strokeWidth={2.75} /></h2>
              <h3 className="leading-tight text-xl font-bold mt-2 ">{elem.title}</h3>
              <p className="mt-2 leading-tight font-medium text-gray-500 ">{elem.detail}</p>
            </div>
          })}


        </div>
      </div>
    </div>
  );
};

export default App;
