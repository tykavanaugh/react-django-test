import { useState,useEffect } from "react"
import WineAPI from "../api/WineAPI"
import WineList from "../components/WineList"

import React from 'react'

export const HomePage = () => {
  const [wines,setWines] = useState([])
  
  useEffect(() => {
    const getWines = async () => {
      const data = await WineAPI.fetchWines()
      if (data) {
        setWines(data.wines)
      }
    }
    getWines()
  },[])

  return (
    <div>
      <h2>Home Page</h2>
      <hr />
      <WineList wines={wines}/>
    </div>
  )
}

export default HomePage