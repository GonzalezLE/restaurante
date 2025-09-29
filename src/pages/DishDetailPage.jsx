import { useParams, Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import SectionDivider from '../components/SectionDivider'; // Reutilizamos el separador

function DishDetailPage() {
  const { dishId } = useParams();
  const platillo = menuData.find(p => p.id === dishId);

  if (!platillo) {
    // ... (código de platillo no encontrado sin cambios)
  }
  
  return (
    <div className="bg-masa animate-fade-in-up">
      <div className="container mx-auto px-6 py-12 md:py-20">
        
        {/* Encabezado del platillo */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-serif text-milpa text-xl">Creación del Chef {platillo.chef}</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-maiz-azul mt-2">{platillo.nombre}</h1>
        </div>

        {/* Imagen Principal */}
        <div className="mt-12 mb-12 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                    <img 
            src={'.'+platillo.imagen} 
            alt={platillo.nombre}
            className="w-full h-auto"
          />
        </div>

        {/* Descripción y Precio */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl text-comal border-b border-dashed border-comal/20 pb-2">Descripción</h2>
            <p className="mt-4 text-lg text-comal/90 leading-relaxed">
              {platillo.descripcion}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-comal/70">Precio</p>
            <p className="font-serif font-bold text-4xl text-maiz-azul mt-1">${platillo.precio} MXN</p>
            <Link to="/reservar" className="block w-full mt-4 bg-elote text-comal font-bold py-2 px-4 rounded-full hover:bg-comal hover:text-masa transition-all duration-300" >
              Reservar Mesa
            </Link>
          </div>
        </div>
        
        {/* Navegación para volver */}
        <div className="text-center mt-16">
          <Link to="/menu" className="text-milpa hover:text-elote transition-colors duration-300 font-bold">
            ← Ver Todos los Platillos
          </Link>
        </div>

      </div>
      <SectionDivider />
    </div>
  );
}

export default DishDetailPage;