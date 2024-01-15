const Contact = () => {
  return (
      <div id='contact' className="max-w-7xl mx-auto mt-8 p-8 h-screen">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
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
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Enviar
            </button>
          </form>
        </div>
      </div>
  );
}

export default Contact;