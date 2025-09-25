import maiz from '../assets/maiz_vaiedad.jpg'
import CornerFrame from '../components/CornerFlourish';



function PhilosophyPage() {
  return (
    <div className="animate-fade-in-up">
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        {/* --- Título Principal (sin cambios) --- */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-maiz-azul">Nuestra Filosofía: El Maíz Criollo</h1>
          <p className="mt-4 text-lg text-comal/80">
            Para nosotros, el maíz no es un simple ingrediente; es el pilar de nuestra cultura y el alma de nuestra cocina. Cada grano cuenta una historia de la tierra, de la tradición y de la gente que la cuida.
          </p>
        </div>

        <hr className="border-t-2 border-dashed border-milpa/20 max-w-sm mx-auto my-16" />

        {/* --- Sección de 2 Columnas --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Imagen Izquierda (sin cambios) */}
          <div className="h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src={maiz}
              alt="Variedades de maíz criollo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Columna de Texto Derecha con Decoraciones */}
          <div className="relative p-8"> {/* <-- 2. Añadir `relative` y un poco de padding */}
            
            {/* 3. Añadir las 4 esquinas posicionadas absolutamente */}
            
            <CornerFrame className="top-0 left-0" />
            <CornerFrame className="top-0 right-0 rotate-90" />
            <CornerFrame className="bottom-0 left-0 -rotate-90" />
            <CornerFrame className="bottom-0 right-0 rotate-180" />

            <h2 className="font-serif text-3xl font-bold text-milpa mb-8">Los Tesoros de Nuestra Cocina</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-maiz-azul">Maíz Azul</h3>
                <p className="mt-2 text-comal/80 border-l-4 border-maiz-azul/20 pl-4">
                  De sabor dulce y terroso, su alto contenido de antioxidantes le da su color distintivo. Es la base de nuestros tlacoyos y atoles ceremoniales.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-elote">Maíz Rojo</h3>
                <p className="mt-2 text-comal/80 border-l-4 border-elote/20 pl-4">
                  Con notas que recuerdan a la nuez, lo usamos para pinoles y tortillas de sabor intenso, perfectas para acompañar nuestro mole.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-comal">Maíz Cacahuazintle</h3>
                <p className="mt-2 text-comal/80 border-l-4 border-comal/20 pl-4">
                  El grano más grande y suave, indispensable para un pozole auténtico y para nuestros tamales más delicados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhilosophyPage;