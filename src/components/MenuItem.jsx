import { Link } from 'react-router-dom';

function MenuItem({ platillo }) {
  return (
    <Link to={`/menu/${platillo.id}`} className="block group">
      <div className="flex items-center gap-6 p-4 rounded-lg hover:bg-white/70 transition-colors duration-300">
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden">
          <img 
            src={platillo.imagen} 
            alt={platillo.nombre} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div>
          <h3 className="font-serif text-xl md:text-2xl text-milpa group-hover:text-elote transition-colors duration-300">{platillo.nombre}</h3>
          <p className="text-sm text-comal/80 mt-1 italic">Por Chef {platillo.chef}</p>
          <p className="text-comal mt-2 hidden md:block">{platillo.descripcion.substring(0, 80)}...</p>
          <span className="font-bold text-lg text-maiz-azul mt-2 inline-block">${platillo.precio} MXN</span>
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;