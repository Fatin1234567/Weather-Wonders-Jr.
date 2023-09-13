import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/permanentComponent"
import Forecast from "./components/forecast"
import Fact from "./components/fact"
import Graph from "./components/displayBarChart"
import Wear from "./components/toggle"
import PopUp from "./components/popUp"
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import boy from "./assets/boy.png"
import Quiz from "./components/Quiz"

/*

@author Fatin Ishraq Kazi 
This page contain all the api call and also landing page for the application

*/

function App() {
  
  const apiKey = process.env.REACT_APP_API_KEY
  
  const [noData, setNoData] = useState("No data yet")
  const [weatherData, setWeatherData ]= useState([])
  const [city, setCity] = useState("Unknown location")
  const [weatherIcon, setWeatherIcon] = useState(`${process.env.REACT_APP_ICON_URL}10n@2x.png`)
  const [weatherForcast,setWeatherForecast] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [favouriteSearch, setFavouriteSearch] = useState([])
  const [favButtonPopUp,setFavButtonPopUp] = useState(false)



  // add favourite search to the list
  const addSearch = () =>{
    const cityName = document.getElementById("cityName").value
    setFavouriteSearch(favouriteSearch.concat(cityName))
  }

  // allow to get input from the search
  const handleChange = input => {
    const {value} = input.target
    setSearchTerm(value)
  }

  // calls weather api method
  const handleSubmit = (e) => {
    e.preventDefault()
    getWeather(searchTerm)
  }


    // gets weather info from api, and sets 
    const getWeather = async (location) =>{
    setWeatherData([])
    let how_to_search = (typeof location === 'string') ? `q=${location}` : `lat=${location[0]}&lon=${location[1]}`



    
    try {
      const res = await fetch("https://api.openweathermap.org/data/2.5/forecast?"+how_to_search+"&appid="+apiKey+"&units=metric&cnt=5&exclude=hourly,minutely")
      const res2 =  await fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+location[0]+"&lon="+location[1]+"&exclude=alerts,current,hourly,minutely,&appid="+apiKey+"&units=metric&cnt=5&exclude=hourly,minutely")
      const data = await res.json()
      const data2 = await res2.json()
      
      if(data.cod != 200) {
        setNoData('Location Not Found')
        setCity("")
        return
      }
      
      setWeatherData(data)
      setCity(`${data.city.name}, ${data.city.country}`)
      setWeatherIcon(`${process.env.REACT_APP_ICON_URL + data.list[0].weather[0]["icon"]}@4x.png`)
      setWeatherForecast(data2)
    } catch (error) {
      console.log(error)
    }
  }

  // gets latitude and longitude, invokes other getWeather
  const myIP = (location) => {
    const {latitude, longitude} = location.coords
    getWeather([latitude, longitude])
  }

  // allows to get weather information staright after rendering
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(myIP)
  }, []);

 
  return (
    <Router>

      <div >
        {/* city information */}

        <div className="containerTop">

          <div>
            <Link to="/" className="fa-solid fa-house p-3 homeIcon"></Link>
          </div>

          <div className="containerCityName">
            <p className="cityText">{city}</p>
              
          </div>

        </div>
        {/* weather Information  */}
        <div className="">
              {weatherData.length === 0 ? 
                <div className="noDataContainer">
                  <h1 className="titleNoData">{noData}</h1>
                </div> : 
                <>
                  <Header weather_icon = {weatherIcon} data={weatherData} />
                </>
              }
          
        </div>

        {/* Below shows different pages */}
        <main className="main">      
          <Switch>
            
            {/* landing page */}
            <Route exact path="/">

              <div>
                <form noValidate onSubmit={handleSubmit} className="formContainer">

                  <input type="text" placeholder="Enter location" className="searchInput"  onChange={handleChange} id="cityName" />
                  <button type="submit" className="submitBtn"  >
                    <i className="fa fa-search p-3 " 
                       aria-hidden="true" type="submit" ></i>

                  </button>
                  <button className="submitBtn" type="button"   onClick={addSearch} >
                    <i className="fa-solid fa-heart p-3 "></i>
                  </button>
               
                </form>
    
                <div className="container favouriteSearch">
                  <div className="favBtnContatiner">
                    <button className="favBtn" onClick={() => setFavButtonPopUp(true)} >View Your Favourite Place</button>
                  </div>
                    
                    <PopUp trigger={favButtonPopUp} setTrigger={setFavButtonPopUp}>

                      <ul>
                        {
                          favouriteSearch.map((searchItem,index) => (
                            <button className="favouriteSearchBtn" onClick={() => getWeather(searchItem)}  >{searchItem} </button>
                          ))
                        }
                      </ul>
                    </PopUp>

                </div>

                <div className="imageContainer"> 
                  <img src={boy} className="imgBoy" />
                </div>
              </div>

            </Route>

            {/* forecast page */}
         
            <Route exact path="/forecast">
              <Forecast  data={weatherForcast} />
            </Route>
            
            {/* fact page */}

            <Route exact path="/fact">
              <Fact  data={weatherData} />
            </Route>

            {/* wear page */}

            <Route exact path="/wear">
              <Wear data={weatherData} />
            </Route>
            

            {/* graph page */}

            <Route exact path="/graph">


              <Graph />
              <Quiz />

            </Route>


          </Switch>
        </main>   
        
    
        

        
      </div>
    </Router>

   



  );
}

export default App;
