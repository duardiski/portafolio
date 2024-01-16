import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp, FaFigma, FaReact, FaCss3Alt} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiChakraui, SiAdobephotoshop} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 5, icon: <IoLogoJavascript /> },
    { name: 'React', level: 5, icon:<FaReact /> },
    { name: 'CSS', level: 5, icon: <FaCss3Alt />},
    { name: 'ChakraUI', level: 3, icon: <SiChakraui />},
    { name: 'PHP', level: 3, icon: <FaPhp />},
    { name: 'MySQL', level: 3, icon: <GrMysql />},
    { name: 'Figma', level: 3, icon: <FaFigma />},
    { name: 'Photoshop', level: 3, icon:<SiAdobephotoshop /> },
    { name: 'MongoDB', level: 1, icon:<DiMongodb /> },
  ];

  const renderStars = (level) => {
    const starArray = Array.from({ length: level }, (_, index) => (
      <span key={index}>&#9733;</span>
    ));
    return starArray;
  };

  return (
    <div className="flex">
      <h2 className='title text-4xl text-left text-white relative mb-10 mt-24 m-10'>Habilidades Técnicas</h2>
      <ul className="text-yellow-200 flex flex-col text-center w-6/12">
        {skills.map((skill, index) => (
          <li key={index} className='bg-gray-600 hover:bg-purple-600 py-2 px-4 text-sm m-2'>
            {skill.icon && <span className='mr-2'>{skill.icon}</span>}
            <strong>{skill.name}:</strong> {renderStars(skill.level)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
