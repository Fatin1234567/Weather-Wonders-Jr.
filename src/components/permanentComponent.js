
import { Link } from 'react-router-dom'

import Navigation from "./navigationBar"
import MainWeatherInfo from "./mainWeatherInfo"


/*
@author Fatin Ishraq Kazi 
This top header in the landing page
*/



/*
format and display given data

@param weather icon, data(from the api)
@ return  all the header components
*/
function Header({weather_icon, data}) {
    
    const {clouds, main, weather} = data.list[0] ;

    return (

    
        <div className="">
            

            <div className="currentInfo">
                
                {/* main weather dispay */}

                <MainWeatherInfo weather_icon = {weather_icon} data={data}/>
                


                {/* navigation bar */}
                
                <Navigation/>
                
            </div>
            
        </div>
    
    
        
    
        








        
  
    );
}

export default Header
