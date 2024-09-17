import React, { useContext } from 'react'
import './Main.css'
import { useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from '../../Context/Context';
const Main = () => {

const{previousprompt,
    setPreviousprompt,
    onSent,
    setRecentprompt,
    recentprompt,
    showresult,
    loading,
    resultdata,
    input,
    setInput,}=useContext(Context)

  return (
    <div   className='main'>
        <div className="nav">
            <p>Gemini -by Atul</p>
            <img src={assets.user_icon} alt="" />
        </div>
      <div className="main-container">


     {!showresult
     ?<>


<div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest me some beautiful places to seeon ana upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
                <p>Tell me about React js and React native</p>
                <img src={assets.code_icon} alt="" />
            </div>

        </div>

     
     </>
     : 
     <div   className='result'>
        <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentprompt}</p>
        </div>
        <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
       {loading ?
         <div className='loader'>
               <hr />
               <hr />
               <hr />
         </div>
    
        :

        <p   dangerouslySetInnerHTML={{__html:resultdata}} ></p>
        }



          
        </div>
     </div>
     
     }



      
        <div className="main-bottom">

            <div className="search-box">
                <input   onChange={(e)=>setInput(e.target.value)}  value={input}  type="text"placeholder='Enter Prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                 {input?  <img   onClick={()=>onSent()} src={assets.send_icon} alt="" /> :null }   
                </div>
            </div>
            <p className="bottom-info">   &copy; 2024 Atul. All rights reserved. Check out my projects on  <a href="https://github.com/atul-2004-dev" class="text-blue-500 hover:underline">GitHub</a>.       </p>
        </div>
      </div>
    </div>
  )
}

export default Main
