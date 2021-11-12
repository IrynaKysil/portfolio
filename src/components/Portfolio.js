import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import devConnector from "../images/dev-connector.jpg";
import ticTacToe from "../images/tic-tac-toe.jpg";
import calcucalator from "../images/calculator.jpg"
import taskList from "../images/task-list.jpg"

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      
        <h1 className="text-uppercase text-center py-5" id="portfolio">portfolio</h1>

        <div className="image-box-wrapper d-inline-box-flex  d-flex justify-content-around flex-wrap">      
        
          {/* Dev Connector */}        
          <div className="portfolio-image-box">            
            <img className="portfolio-images" src={devConnector} alt="Dev Connector Project Screenshot" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="search-icon" icon={faSearchPlus} />
          </div>

          {/* Task List */}
          <div className="portfolio-image-box">
            <img className="portfolio-images" src={taskList} alt="Task List Project Screenshot" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="search-icon" icon={faSearchPlus} />
          </div>

          {/* Calculator */}
          <div className="portfolio-image-box">
            <div className="overflow"></div>
            <img className="portfolio-images" src={calcucalator} alt="Calculator Project Screenshot" />
            <FontAwesomeIcon className="search-icon" icon={faSearchPlus} />
          </div>

          {/* Tic Tac Toe */}
          <div className="portfolio-image-box">
            <img className="portfolio-images" src={ticTacToe} alt="Tic Tac Toe Project Screenshot" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="search-icon" icon={faSearchPlus} />
          </div>
          
        </div>
      
    </div>
  );
};

export default Portfolio;
