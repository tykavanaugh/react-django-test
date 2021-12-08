import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import WineAPI from "../api/WineAPI"

export const WinePage = () => {
  const [wine, setWine] = useState(null)

  const params = useParams()

  useEffect(() => {
    const getWine = async () => {
      const data = await WineAPI.fetchWineByID(params.wineID)
      if (data){
        setWine(data)
      }
    }
    getWine()
  },[params.wineID])

  const renderWine = () => {
    if (!wine){
      return null
    }
    return (
      <div className="div">
        <h3>Wine: {wine.name}</h3>
        <p>Price: {wine.price}</p>
        <p>Varietal: {wine.varietal}</p>
        <p>Description: {wine.description}</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Wine Page</h2>
      <hr />
      {renderWine()}
    </div>
  )
}

export default WinePage