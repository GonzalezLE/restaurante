import { menuData } from '../data/menuData';
import MenuItem from '../components/MenuItem';

function MenuPage() {
  const categorias = ['Entradas', 'Platos Fuertes', 'Postres'];

  return (
    <div className="animate-fade-in-up">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-maiz-azul">Menú Degustación</h1>
          <p className="mt-4 text-lg text-comal/80">
            Un viaje culinario a través de las raíces de México, interpretado por chefs que honran la tradición y la vanguardia.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {categorias.map(categoria => (
            <div key={categoria}>
              <h2 className="font-serif text-3xl text-milpa pb-2 border-b-2 border-dashed border-milpa/20">{categoria}</h2>
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                {menuData
                  .filter(platillo => platillo.categoria === categoria)
                  .map(platillo => (
                    <MenuItem key={platillo.id} platillo={platillo} />
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;