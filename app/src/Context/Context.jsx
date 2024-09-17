import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {

   const[input,setInput]=useState("");
   const[recentprompt,setRecentprompt]=useState("");
   const[previousprompt,setPreviousprompt]=useState([]);
   const[showresult,setShowresult]=useState(false);
   const[loading,setLoading]=useState(false);
   const[resultdata,setresultdata]=useState("");
 
  const delayPara=(index,nextword)=>{
     setTimeout(function  (){
        setresultdata(prev=>prev+nextword)
     },75*index)
  }
   
  const newChat=()=>{
    setLoading(false)
    setShowresult(false)
  }

    const onSent=async(prompt)=>{
        setresultdata("")
        setLoading(true)
        setShowresult(true)
        let response;
     if (prompt!==undefined) {
      response= await run(prompt)
      setRecentprompt(prompt)
     }
     else{
      setPreviousprompt(prev=>[...prev,input])
      setRecentprompt(input)
      response =await run(input)
     }

      //  setRecentprompt(input)
      //  setPreviousprompt(prev=>[...prev,input])
    //  const response= await run(input)
      let responseArray=response.split('**');
      let newResponse='';
      for(let i=0;i <responseArray.length;i++){
        if(i===0||i%2!==1 ){
            newResponse+=responseArray[i];
        }
        else{
            newResponse+="<b>"+responseArray[i]+"</b>"
        }
      }
      let newResponse2=newResponse.split("*").join("</br>")
     // setresultdata(newResponse2)
     let newResponseArray=newResponse2.split(" ");
     for(let i=0;i<newResponseArray.length;i++){
        const nextword=newResponseArray[i];
        delayPara(i,nextword+" ")
     }

      setLoading(false)
      setInput("")
    }
  
    const contextValue={
      previousprompt,
      setPreviousprompt,
      onSent,
      setRecentprompt,
      recentprompt,
      showresult,
      loading,
      resultdata,
      input,
      setInput,
      newChat,

    }
    return(
        <Context.Provider   value={contextValue} >
            {props.children}
        </Context.Provider>
    )
};
export   default ContextProvider;

