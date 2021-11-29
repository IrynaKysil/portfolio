import React from "react";
import photo from "../images/profile-picture.jpg";

const About = () => {
  return (
    <div className="about-wrapper container" id="about">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
        <div className="photo-wrap mb-5">
        <img className="about-img" src={photo} alt="photo"/>
        </div>
        </div>

        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur. At auctor urna nunc id cursus metus aliquam. Viverra nam libero justo laoreet sit amet cursus sit amet. Vitae congue eu consequat ac. Mi bibendum neque egestas congue quisque egestas. Amet risus nullam eget felis eget. Id faucibus nisl tincidunt eget. Platea dictumst quisque sagittis purus sit amet volutpat. Tempor nec feugiat nisl pretium fusce. Eget sit amet tellus cras adipiscing enim eu turpis.
          </p>
        </div>
      
      </div>
    </div>
  )
}

export default About
