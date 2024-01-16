const Contact = () => {
  return (
    <div id='contact' className="pt-24 p-8 mb-12 flex flex-col items-center justify-center min-h-screen">
      <h2 className="title text-5xl mb-12 text-center">Contacto</h2>
      <div className="flex flex-col md:flex-row">
        <div className='md:w-6/12 w-12/12 m-10 md:mr-16'>
          <p className="text-xl text-justify">
            Si te interesa trabajar juntos no dudes en mandarme un mensaje por este medio, estoy Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor animi consequatur culpa quo molestiae similique facilis expedita tenetur in recusandae.
          </p>
        </div>
          <div className="bg-white rounded-3xl shadow-xl md:w-6/12 w-full p-10 mb-10">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-2">Nombre</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">Correo electrónico</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-2">Mensaje</label>
                <textarea id="message" name="message" className="w-full border border-gray-300 p-2 rounded-md" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-semibold uppercase">
                Enviar
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default Contact;
