import React from 'react'
import "../style/popUp.css"

/*
@author Fatin Ishraq Kazi 
This pop up page

*/



/*
display pop up page

@param props
@ return pop up component
*/

function popUp(props) {
  return (props.trigger) ?   (
    <div className="popUpContainer">


        <div className="popUpInner" onClick={() => props.setTrigger(false)}>
            {props.children}
            <button  className="closeBtn">close</button>

        </div>
    </div>
  ) : ""
}

export default popUp