import React from "react"
import "./style.css"
import Button from "./Button"

function Apple(){
    return(
        <div>
 <h1 style={{ textAlign :"center",color:"brown",fontSize:"50px"}}>Hello world</h1>
 <h2 style={{ textAlign :"center",color:"brown",fontSize:"40px"}}>Hello Youtubers</h2>
 
 
 <Button  buttonText ="HOME" />
 <Button  buttonText ="ABOUT"/>
 <Button  buttonText ="NEWS" />
        </div>
       
    )
}

export default Apple
