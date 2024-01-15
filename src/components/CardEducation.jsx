import { motion } from 'framer-motion';

const CardEducation = ({ customLink }) => {
  const linkTo = customLink || 'https://www.juan23.edu.ar/';

  return (
    <a href={linkTo}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="bg-white rounded-lg shadow-md p-6 mt-6 cursor-pointer"
      >
        <div className="flex items-center">
          <img
            src="https://www.juan23.edu.ar/wp-content/uploads/2019/03/0308-incio-19-1.jpg"
            alt="Educación"
            className="w-1/4 mr-4 rounded-lg"
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">Título de la educación</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, lectus sed interdum consequat.
            </p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default CardEducation;

