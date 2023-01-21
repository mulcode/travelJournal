import React from "react"

export default function Place(props){
   console.log(props)
    return(
        <div>
            <div className="place-content">
            <div className="left">
                <img src={`../images/${props.img}`} alt="" />
            </div>
            <div className="right">
                <div className="location">
                    <span>JAPAN</span>
                    <a href="">view on google map</a>
                </div>
                <div className="heading">
                    <h3>{props.name}</h3>
                </div>
                <div className="content">{props.content}</div>
            </div>
        </div>
        </div>
    )
}