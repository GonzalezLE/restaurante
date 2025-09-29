import { Link } from 'react-router-dom';

function MenuItem({ platillo }) {
  return (
    <Link 
      to={`/menu/${platillo.id}`} 
      className="block group p-4 rounded-lg transition-all duration-300 ease-in-out border border-dashed border-transparent hover:border-comal/20 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden">
          <img 
            src={platillo.imagen} 
            alt={platillo.nombre} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div>
          {/* 👇 AQUÍ CAMBIAMOS `group-hover:text-elote` por `group-hover:text-milpa` 👇 */}
          <h3 className="font-serif text-xl md:text-2xl text-milpa group-hover:text-milpa transition-colors duration-300">{platillo.nombre}</h3>
          <p className="text-sm text-comal/80 mt-1 italic">Por Chef {platillo.chef}</p>
          <p className="text-comal mt-2 hidden md:block">{platillo.descripcion.substring(0, 80)}...</p>
          <span className="font-bold text-lg text-maiz-azul mt-2 inline-block">${platillo.precio} MXN</span>
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;