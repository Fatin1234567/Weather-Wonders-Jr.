
import "../style/fact.css"
import bottle from "../assets/bottle.png"
import clock from "../assets/clock.png"
import wolf from "../assets/wolf.png"
import death from "../assets/death.png"
import tree from "../assets/tree.png"
import heatwave from "../assets/heatwave.png"
import snow from "../assets/snow.png"
import plant from "../assets/plant.png"
import sun from "../assets/sun.png"

/*

@author Fatin Ishraq Kazi 
This is fact which shows fact for given temperature
*/



/*
format and display given data

@param data(from the api)
@ return  forecast
*/
const fact = ({data}) => {


   /*
   creates fact object

   @param fact, image location
   @ return  fact object
   */

   function createFactObject(factGiven,img){
      return   {
         fact: factGiven,
         imgLocation:img
      };
   }

   const first = createFactObject("Temperature is a measurement of how fast the atoms or molecules are moving within an object!",snow)
   const second = createFactObject("Trees stop growing in the Winter.",plant)
   const third = createFactObject("There are a bunch of animals that turn white in the winter.",wolf)
   const fourth = createFactObject("54.4°C (130°F) temperature recorded in Death Valley California on 16 August 2020 could be the hottest temperature ever recorded.",heatwave)
   const fifth = createFactObject("There are plenty of leaves on the trees and lots of plants are in flower.",tree)
   const sixth = createFactObject("The sun is the most important source of energy for Earth.",sun)
   const seventh = createFactObject("Children heat up faster be sure to have plenty of water available.",bottle)
   const eigth = createFactObject("Heat waves are caused by air trapped by high pressure systems, the air is forced downwards!",heatwave)
   
   


  
   const factMap  = new Map([[0,first],[5,second],[10,third],
   [15,fourth],[20,fifth],[25,sixth], [30,seventh],[35,eigth]])
   
   
   const factMap2  = new Map([[0,first]])
    return ( 
        <div className="factContainer">

           {/* <div className="factText" row="5">{factMap.get(Math.round(data.list[0].main.temp / 5) * 5)}</div> */}
           <div className="factText" row="5">{factMap.get(Math.round(data.list[0].main.temp / 5) * 5).fact}</div>
           <div>
             <img src={factMap.get(Math.round(data.list[0].main.temp / 5) * 5).imgLocation} className="factImg" />

           </div>



        </div>
     );
}
 
export default fact;