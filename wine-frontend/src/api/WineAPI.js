const BASE_URL = "https://wine-project-api.herokuapp.com/wines/"

const tryCatchFetch = async (url, init = null) => {
  try {
    const response = await fetch(url,init)
    if (response.ok) {
      return await response.json()
    }
    else {
      throw new Error(`Bad response: ${response.status} ${response.statusText}`)
    }
  } catch (error) {
    console.error(error)
    return null
  }
};

const fetchWines = async () => {
  const url = BASE_URL
  return await tryCatchFetch(url)
};

const fetchWineByID = async (wineID) => {
  const url = BASE_URL + `${wineID}/`
  return await tryCatchFetch(url)
};

const addWine = async (wineObj) => {
  const url = BASE_URL
  const init = {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(wineObj)
  }
  return await tryCatchFetch(url, init)
};

const exportItems = {
  fetchWines,
  fetchWineByID,
  addWine
};

export default exportItems