const NavBar = () => {
  return (
    <nav id='navbar' className="bg-black p-5 font-light text-center">
      <div className="max-w-7xl mx-auto text-white text-1xl ">
        <div className="flex items-left justify-between">
          <div className="space-x-4 ">
            <a href="#navbar" className=" hover:text-purple-500">Sobre mi</a>
            <a href="#projects" className=" hover:text-purple-500">Proyectos</a>
            <a href="#education" className=" hover:text-purple-500">Educación</a>
            <a href="#contact" className=" hover:text-purple-500">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
