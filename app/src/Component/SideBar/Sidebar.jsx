import React, { useContext } from "react";
import "./Sidebar.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const {onSent,previousprompt,setRecentprompt,newChat}=useContext(Context)

  const loadPrompt=async(prompt)=>{
                setRecentprompt(prompt)
           await  onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt=""    onClick={()=>setextended(prev=>!prev)}   />

        <div   onClick={()=>newChat()}   className="newchat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousprompt.map((item,index)=>{
                return(
                  <div   onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)} ...</p>
                </div>
                )
            })}

            
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item   recent-entry ">
          <img src={assets.question_icon} alt="" />
        {extended?<p>Help</p>:null}  
        </div>
        <div className="bottom-item   recent-entry ">
          <img src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}  
        </div>
        <div className="bottom-item   recent-entry ">
          <img src={assets.setting_icon} alt="" />
          {extended?<p>Setting</p>:null}   
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
