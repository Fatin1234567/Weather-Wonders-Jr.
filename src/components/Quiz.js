import React, { useState } from "react";
import "../style/barChart.css"
import PopUp from "../components/popUp"

/* 
* @author Khaled bt19700@qmul.ac.uk | 190886059
*
* This component displays question a set of questions with a dropdown to answer each question
* The correct answers will be displayed after the user submits the answers
* 
*/
function Quiz() { //function for rendering the questions and collecting the answers
    const [janData, setJanData] = useState("Fall");
    const [febData, setFebData] = useState("Fall");
    const [marData, setMarData] = useState("Fall");
    const [aprData, setAprData] = useState("Fall");
    const [mayData, setMayData] = useState("Fall");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [submitButtonPopUp,setSubmitButtonPopUp] = useState(false)





    function getJanListValue(e) { // function for collecting answer to question 1
        setJanData(e.target.value);
    }
    function getFebListValue(e) { // function for collecting answer to question 2
        setFebData(e.target.value);
    }
    function getMarListValue(e) { // function for collecting answer to question 3
        setMarData(e.target.value);
    }
    function getAprListValue(e) { // function for collecting answer to question 4
        setAprData(e.target.value);
    }
    function getMayListValue(e) { // function for collecting answer to question 5
        setMayData(e.target.value);
    }
    function checkAnswers(e) { // function for calculating the score 1 for each correct answer
       
        setIsSubmitted(true);
        e.preventDefault();
    }
    return ( //code for rendering the component
        <div className="quizContainer">
            <form onSubmit={checkAnswers}>
                What season is it in January?
                <select name="janList" onChange={getJanListValue}>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
                <br />
                What season is it in February?
                <select name="febList" onChange={getFebListValue}>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
                <br />
                What season is it in March?
                <select name="marList" onChange={getMarListValue}>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
                <br />
                What season is it in April?
                <select name="aprList" onChange={getAprListValue}>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
                <br />
                What season is it in May?
                <select name="mayList" onChange={getMayListValue}>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
                <br />


                <div className="buttonContainer">
                    <button className="submitBtn" type="submit" onClick={() => setSubmitButtonPopUp(true)} >Submit</button>

                </div>
                <PopUp trigger={submitButtonPopUp} setTrigger={setSubmitButtonPopUp}>

                    <div>
                        <h2>Correct Answers</h2>
                        <ul>
                            <li>Your answer for Q1 was: {janData}, and the correct answer is Winter</li>
                            <li>Your answer for Q2 was: {febData}, and the correct answer is Winter</li>
                            <li>Your answer for Q3 was: {marData}, and the correct answer is Spring</li>
                            <li>Your answer for Q4 was: {aprData}, and the correct answer is Spring</li>
                            <li>Your answer for Q5 was: {mayData}, and the correct answer is Spring</li>
                        </ul>
                    </div>
                    
                </PopUp>



                
            </form>
        </div>
    );
}
export default Quiz;