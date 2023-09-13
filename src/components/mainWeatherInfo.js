import PopUp from  "./popUp"
import {useState} from "react"
import "../style/mainWeather.css"
/*
@author Fatin Ishraq Kazi 
This main weather info for the landing page
*/



/*
format and display given data

@param data(from the api)
@ return  forecast
*/
function MainInfo({weather_icon, data}) {
    
    const {main, weather} = data.list[0] ;
    const [realFeelButtonPopup,setRealFeelButtonPopUp] =  useState(false);
    const [realHumidityButtonPopup,setRealHumidityButtonPopUp] =  useState(false);
    const [realWindButtonPopup,setRealWindButtonPopUp] =  useState(false);

    const windMap  = new Map([[0,"Calmm"],[1,"Light Air"],[2,"Light Breeze"],[3,"Gentle Breeze"],
                        [4,"Moderate Breeze"],[5,"Fresh Breeze"],[6,"Strong Breeze"],[7,"Near Gale"]])


    return (


        <div className="dataContainer">
            <div className="mainInfo" >

                <p className="titleTemp">{Math.round(main.temp)}&deg;C</p>
                <p className="titleTempName">
                    {weather[0].main}
                    <img src={weather_icon} className="imageTemp" />
                </p>

                
            </div>
            <div className="extraInfo" >
                <button className="moreInfoText" onClick={() => setRealFeelButtonPopUp(true)}  >RealFeel: {Math.round(main.feels_like)}&deg;C</button>
                
                <PopUp trigger={realFeelButtonPopup} setTrigger={setRealFeelButtonPopUp}>
                    <h3 className="popUpText">Temperature your body feels when you actually step out the house</h3>
                </PopUp>
                
                <button className="moreInfoText" onClick={() => setRealHumidityButtonPopUp(true)}>Humidity: {Math.round(main.humidity)}%</button>
                <PopUp trigger={realHumidityButtonPopup} setTrigger={setRealHumidityButtonPopUp}>
                    <h3 className="popUpText">Humidity means water vapor in the air, but not to liquid droplets in fog, clouds, or rain. Deserts usually have low humidity, 
                    and tropical regions have high humidity.</h3>
                </PopUp>
                <button className="moreInfoText" onClick={() => setRealWindButtonPopUp(true)}  >Wind: {windMap.get(Math.round(data.list[0].wind.speed))}</button>
                <PopUp trigger={realWindButtonPopup} setTrigger={setRealWindButtonPopUp}>
                    <h3 className="popUpText">Wind speeds usually mean the movement of air in an outside environment, but the speed of movement of air inside is 
                    also important in many cases, including weather forecasting, and aircraft  </h3>
                </PopUp>

                
            </div>

        </div>






        
  
    );
}

export default MainInfo
