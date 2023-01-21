import React from "react"
import Nav from "./Components/Navbar"
import Place from "./Components/Place"
import data from "./data"

export default function App(){
  const places = data.map(item=> {
    return(
      <Place 
         img = {item.img}
         name = {item.name}
         content = {item.content}
            />
    )
  })
  return(
    {places}
  )
}