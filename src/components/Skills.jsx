import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp, FaFigma, FaReact, FaCss3Alt, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import {SiAdobephotoshop } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 5, icon: <IoLogoJavascript size={40} /> },
    { name: 'React', level: 5, icon: <FaReact size={40} /> },
    { name: 'CSS', level: 5, icon: <FaCss3Alt  size={40} />},
    { name: 'Python', level: 3, icon: <FaPython size={40} />},
    { name: 'PHP', level: 3, icon: <FaPhp size={40} />},
    { name: 'MySQL', level: 3, icon: <GrMysql size={40} />},
    { name: 'Figma', level: 3, icon: <FaFigma size={40} />},
    { name: 'Photoshop', level: 3, icon: <SiAdobephotoshop size={40} /> },
    { name: 'MongoDB', level: 1, icon: <DiMongodb size={40} /> },
  ];

  const renderStars = (level) => {
    const starArray = Array.from({ length: level }, (_, index) => (
      <span key={index} className='text-yellow-200'>&#9733;</span>
    ));
    return starArray;
  };

  return (
    <div className="grid grid-cols-3 gap-0">
      {skills.map((skill, index) => (
        <div key={index} className='p-6 text-center text-white border border-indigo-600 border-t-8 '>
          <div className="flex flex-col items-center">
            {skill.icon && <span className='mb-4'>{skill.icon}</span>}
            <strong >{skill.name}</strong>
          </div>

          {renderStars(skill.level)}
        </div>
      ))}
    </div>
  );
};

export default Skills;
