import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 5 },
    
    { name: 'React', level: 5 },
    { name: 'CSS', level: 5 },
    { name: 'Bootstrap', level: 3 },
    { name: 'PHP', level: 3 },
    { name: 'MySQL', level: 3 },
    { name: 'Figma', level: 3 },
    { name: 'Photoshop', level: 3 },
    { name: 'MongoDB', level: 1 },
  ];

  const renderStars = (level) => {
    const starArray = Array.from({ length: level }, (_, index) => (
      <span key={index}>&#9733;</span>
    ));
    return starArray;
  };

  const ulStyle = {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    padding: 0,
  };

  const liStyle = {
    marginRight: '20px',
  };

  return (
    <div className='text-white m-10'>
      <h2 style={{ textAlign: 'center' }} className='mb-4'>Tecnologías</h2>
      <ul style={ulStyle}>
        {skills.map((skill, index) => (
          <li key={index} style={liStyle} className='bg-purple-700 hover:bg-purple-600 py-2 px-4 rounded-full text-sm'>
            <strong>{skill.name}:</strong> {renderStars(skill.level)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
