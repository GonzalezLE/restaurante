import platillo from './../assets/platillo.jpg';
import { Link } from 'react-router-dom';


function FeaturedDishes() {
  return (
    <section id="platillos" className="bg-masa py-16 md:py-24 animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-maiz-azul">Nuestras Creaciones</h2>
          <p className="mt-4 text-lg text-comal/80">
            Cada platillo es una celebración del maíz. Aquí una probada de lo que nuestra cocina tiene para ofrecer.
          </p>
        </div>
        
        {/* Grid de Platillos con Imágenes */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Tarjeta 1: Mole Poblano */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="relative h-60 md:h-72 overflow-hidden">
              <img 
                src={platillo} // 📸 Coloca tu imagen de Mole aquí
                alt="Platillo de Mole Poblano Ancestral" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 font-serif text-3xl font-bold text-masa drop-shadow-lg">Mole Poblano Ancestral</h3>
            </div>
            <div className="p-6">
              <p className="mt-2 text-comal/80">Receta familiar con más de 30 ingredientes, servido con guajolote criado en libertad y arroz silvestre.</p>
              <div className="mt-4 flex justify-between items-center text-comal">
                {/* <span className="font-bold text-lg text-milpa">$280 MXN</span> */}
                <button className="text-elote hover:text-milpa transition-colors duration-300">
                  Ver detalles →
                </button>
              </div>
            </div>
          </div>
          
          {/* Tarjeta 2: Tlacoyos */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="relative h-60 md:h-72 overflow-hidden">
              <img 
                src={platillo} // 📸 Coloca tu imagen de Tlacoyos aquí
                alt="Platillo de Tlacoyos de Maíz Azul" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 font-serif text-3xl font-bold text-masa drop-shadow-lg">Tlacoyos de Maíz Azul</h3>
            </div>
            <div className="p-6">
              <p className="mt-2 text-comal/80">Rellenos de haba y requesón, coronados con nopales, cilantro y queso fresco de Chiapas.</p>
              <div className="mt-4 flex justify-between items-center text-comal">
                {/* <span className="font-bold text-lg text-milpa">$160 MXN</span> */}
                <button className="text-elote hover:text-milpa transition-colors duration-300">
                  Ver detalles →
                </button>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Esquites */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="relative h-60 md:h-72 overflow-hidden">
              <img 
                src={platillo}// 📸 Coloca tu imagen de Esquites aquí
                alt="Platillo de Esquites Elotero" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 font-serif text-3xl font-bold text-masa drop-shadow-lg">Esquites "Elotero"</h3>
            </div>
            <div className="p-6">
              <p className="mt-2 text-comal/80">Nuestra versión del clásico con mayonesa de habanero, epazote frito y queso cotija añejo.</p>
              <div className="mt-4 flex justify-between items-center text-comal">
                {/* <span className="font-bold text-lg text-milpa">$120 MXN</span> */}
                <button className="text-elote hover:text-milpa transition-colors duration-300">
                  Ver detalles →
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link  to="/menu"  className="bg-elote text-comal font-bold py-3 px-8 rounded-full hover:bg-comal hover:text-masa transition-all duration-300 transform hover:scale-105">
            Ver el Menú Completo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDishes;