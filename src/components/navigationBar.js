
import { Link } from 'react-router-dom'
import "../style/navigationBar.css"



/*
@author Fatin Ishraq Kazi 
This page contain navigation bar
*/





/*
format and display given data

@param n/a
@ return  navigation header
*/
function navigation() {
    

    return (

        <div className="navContainer">
                
            <nav>
                <ul>

                     <li>
                        <Link to="/forecast" className=" forecastBtn start">Forecast</Link>
                    </li>
                    <li>
                        <Link to="/fact" className="factBtn">Fact</Link>

                    </li>
                    <li>
                        <Link to="/wear" className="wearBtn">Wear</Link>
                    </li>
                    <li>
                        <Link to="/graph" className="end graphBtn" >Graph</Link>

                    </li>
                </ul>
            </nav>

        </div>


    );
}

export default navigation
