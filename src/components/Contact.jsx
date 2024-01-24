import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef(null);

  const sendEmail =  async (e) => {
    e.preventDefault();
    const name = form.current.elements['user_name'].value;
    const email = form.current.elements['user_email'].value;
    const message = form.current.elements['message'].value;

    if (!name || !email || !message) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos antes de enviar el formulario.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        scrollbarPadding: false
      });
      return;
    }
    emailjs.sendForm('service_7e76oc8', 'template_7l2qxu1', form.current, 'Fk5NvQkoqbjOE4gOb')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire({
            title: '¡Éxito!',
            text: 'El correo se envió correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            scrollbarPadding: false
          });
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar el correo.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            scrollbarPadding: false
          });
      });
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      id='contact'
      ref={ref}
      className="pt-24 p-8 mb-12 flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0, x: -100 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h2 className="title text-5xl mb-12 text-center">Contacto</h2>
      <div className="flex flex-col md:flex-row">
        <div className='md:w-6/12 w-12/12 m-10 md:mr-16 flex flex-col items-center'>
          <p className="text-3xl text-center md:pt-16 pb-6 italic">
            ¡Hola! <span className='text-indigo-500 underline'>Estoy emocionado de conectarme contigo</span>. Si tienes alguna pregunta, comentario o simplemente deseas saludar, no dudes en hacerlo. <span className='font-semibold'>Estoy aquí para ayudar</span>.
          </p>
          <img src="https://media.tenor.com/2l4-h42qnmcAAAAj/toothless-dancing-toothless.gif" alt="ToothlessDancing" className="h-auto w-1/4" />
        </div>
        <div className="bg-white rounded-3xl shadow-xl md:w-6/12 w-full p-10 mb-10">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">Nombre</label>
              <input type="text" id="name" name="user_name" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">Correo electrónico</label>
              <input type="email" id="email" name="user_email" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-2">Mensaje</label>
              <textarea id="message" name="message" className="w-full border border-gray-300 p-2 rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" value="Send" className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-semibold uppercase">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;