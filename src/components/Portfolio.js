import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import devConnector from "../images/dev-connector.jpg";
import ticTacToe from "../images/tic-tac-toe.jpg";
import calcucalator from "../images/calculator.jpg";
import taskList from "../images/task-list.jpg";


const Portfolio = () => {

  // DevConnector Popup Box
  const popupboxDevConnector = () => {    
    const content = (
    <>
      <img className="portfolio-popupbox-image" src={devConnector} alt="Dev Connector Project..." />
      <p className="popup-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>     
      <b className="popup-text">GitHub:</b> <a className="project-link" onClick={ () => window.open(" https://github.com/IrynaKysil/dev-connector", "_blank")}>https://github.com/IrynaKysil/dev-connector</a>
      <br />
      <b className="popup-text">Website:</b> <a className="project-link" onClick={ () => window.open("https://dev-connector-iryna-kysil.herokuapp.com", "_blank")}>https://dev-connector-iryna-kysil.herokuapp.com</a>
    </>
    )
    PopupboxManager.open({ content, config: {titleBar: {text: "DevConnector App"}}})
  }

  // Task List Popup Box
  const popupboxTaskList = () => {    
    const content = (
    <>
      <img className="portfolio-popupbox-image" src={taskList} alt="Task List Project..." />
      <p className="popup-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>     
      <b className="popup-text">GitHub:</b> <a className="project-link" onClick={ () => window.open("https://github.com/IrynaKysil/to-do-list", "_blank")}>https://github.com/IrynaKysil/to-do-list</a>
      <br />
      <b className="popup-text">Website:</b> <a className="project-link" onClick={ () => window.open("https://irynakysil.github.io/to-do-list/", "_blank")}>https://irynakysil.github.io/to-do-list/</a>
    </>
    )
    PopupboxManager.open({ content, config: {titleBar: {text: "Task List App"}}})
  }  

  // Calculator Popup Box
  const popupboxCalculator = () => {    
    const content = (
    <>
      <img className="portfolio-popupbox-image" src={calcucalator} alt="Calculator Project..." />
      <p className="popup-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>     
      <b className="popup-text">GitHub:</b> <a className="project-link" onClick={ () => window.open("https://github.com/IrynaKysil/calculator-js", "_blank")}>https://github.com/IrynaKysil/calculator-js</a>
      <br />
      <b className="popup-text">Website:</b> <a className="project-link" onClick={ () => window.open("https://irynakysil.github.io/calculator-js", "_blank")}>https://irynakysil.github.io/calculator-js</a>
    </>
    )
    PopupboxManager.open({ content, config: { titleBar: {text: "Calculator App"}} })
  }
 
  // Tic Tac Toe Popup Box
  const popupboxTicTacToe = () => {    
    const content = (
    <>
      <img className="portfolio-popupbox-image" src={ticTacToe} alt="Tic Tac Toe Project..." />
      <p className="popup-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>     
      <b className="popup-text">GitHub:</b> <a className="project-link" onClick={ () => window.open("https://github.com/IrynaKysil/tic-tac-toe", "_blank")}>https://github.com/IrynaKysil/tic-tac-toe</a>
      <br />
      <b className="popup-text">Website:</b> <a className="project-link" onClick={ () => window.open("https://irynakysil.github.io/tic-tac-toe", "_blank")}>https://irynakysil.github.io/tic-tac-toe</a>
    </>
    )
    PopupboxManager.open({ content, config: {titleBar: {text: "Tic Tac Toe Game"}}})
  }  

  return (
    <div className="portfolio-wrapper">
      
        <h1 className="text-uppercase text-center py-5" id="projects">projects</h1>

        <div className="image-box-wrapper d-inline-box-flex  d-flex justify-content-around flex-wrap">      
        
          {/* Dev Connector */}        
          <div className="portfolio-image-box" onClick={popupboxDevConnector}>            
            <img className="portfolio-images" src={devConnector} alt="Dev Connector Project Screenshot" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="search-icon" icon={faSearchPlus} />
          </div>

          {/* Task List */}
          <div className="portfolio-image-box" onClick={popupboxTaskList}>
            <img className="portfolio-images" src={taskList} alt="Task List Project Screenshot" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="search-icon" icon={faSearchPlus} />
          </div>

          {/* Calculator */}
          <div className="portfolio-image-box" onClick={popupboxCalculator}>
            <div className="overflow"></div>
            <img className="portfolio-images" src={calcucalator} alt="Calculator Project Screenshot" />
            <FontAwesomeIcon className="search-icon" icon={faSearchPlus} />
          </div>

          {/* Tic Tac Toe */}
          <div className="portfolio-image-box" onClick={popupboxTicTacToe}>
            <img className="portfolio-images" src={ticTacToe} alt="Tic Tac Toe Project Screenshot" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="search-icon" icon={faSearchPlus} />          
          </div>          
        </div>
        
        
        <PopupboxContainer {...{
    titleBar: {
      enable: true      
    },
    content: {
      style: {
        "max-width": "45vw"              
      }
    },
    fadeIn: true,
    fadeInSpeed: 500
  }} />
    </div>
  )
};

export default Portfolio;