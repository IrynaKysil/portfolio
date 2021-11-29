import React from "react";


const skillsItems= ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'TypeScrypt', 'React', 'NoSQL', 'MongoDB', 'Responsive design', 'Photoshop', 'Git', 'GitHub'];

const Skills = () => {
  return (
    <div className="skills" id="skills">
    <h1>Skills</h1>
    <div className="skills-items-wrapper">
      {skillsItems.map(skillsItem => (
        <div  className='skills-item'>
          <div>{skillsItem}</div>        
        </div>
      ))}
    </div>      
    </div>
  )
}

export default Skills;