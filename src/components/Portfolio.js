import React from "react";
import devConnector from "../images/dev-connector.png";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <div className="container">

        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        
        <div className="image-box-wrapper row justify-content-center">
          
          <div class="col">
            <div class="card">
              <img src={devConnector} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">DevConnector</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Natoque penatibus et magnis dis parturient montes nascetur. At
                  auctor urna nunc id cursus metus aliquam. Viverra nam libero
                  justo laoreet sit amet cursus sit amet.{" "}
                </p>
                <a href="https://github.com/IrynaKysil/dev-connector" class="btn btn-primary">
                GitHub
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={devConnector} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">DevConnector</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Natoque penatibus et magnis dis parturient montes nascetur. At
                  auctor urna nunc id cursus metus aliquam. Viverra nam libero
                  justo laoreet sit amet cursus sit amet.{" "}
                </p>
                <a href="https://github.com/IrynaKysil/dev-connector" class="btn btn-primary">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
