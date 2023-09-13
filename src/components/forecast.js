
import moment from 'moment'
import "../style/forecast.css"


/*

@author Fatin Ishraq Kazi 
This forcast page, shows 6 days forecast
*/


/*
format and display given data

@param data(from the api)
@ return  forecast
*/
const Forecast = ({data}) => {

   const forecast = data.daily
    return (

        <div className="futureForecastContainer">
          
            <div className="weatherForecast" >


                {forecast?.map((day,index) =>{

                    if (index > 0){  return(

                    
                        <div className="weatherForecastBox">
                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} className="w-icon" />
                            <div className="temp">{moment(day.dt*1000).format('dddd')}</div>
                            <hr />
                            <div className="temp">Day: {Math.round(day.temp.day)}&deg;C</div>
                            <div className="temp">Morning: {Math.round(day.temp.morn)}&deg;C</div>
                            <div className="temp">Evening: {Math.round(day.temp.eve)}&deg;C</div>


                         </div>
                        )

                    }
                  
                    })}

    
            </div>

         
        </div>


      );
}
 
export default Forecast;