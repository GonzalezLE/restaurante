import { Link } from 'react-router-dom';
import milpa from './../assets/milpa.jpg'


function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-comal z-0">
        <img 
          src={milpa}// Asegúrate que esta imagen esté en la carpeta `public`
          alt="Ilustración de una milpa" 
          className="w-full h-full object-cover opacity-30" 
        />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-masa leading-tight">
          El maíz no es un ingrediente, <br className="hidden md:block" /> es nuestro <span className="text-elote">origen</span>.
        </h1>
        <p className="text-masa/80 mt-6 max-w-2xl mx-auto text-lg">
          Descubre la cocina de nuestro chef, un homenaje a la tierra y a las raíces de la gastronomía tradicional mexicana.
        </p>
        <div className="mt-10">
          <Link  to="/menu" className="bg-elote text-comal font-bold text-lg py-3 px-8 rounded-full hover:bg-masa hover:text-comal transition-all duration-300 transform hover:scale-105" >          
            Ver el Menú          
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;