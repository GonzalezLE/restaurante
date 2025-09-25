import chef from './../assets/chef.jpg'


function AboutChef() {
  return (
    <section id="chef" className="bg-white/70 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Columna de Imagen */}
          <div className="md:w-1/3">
            
            <img 
              src={chef} // Coloca la foto del chef en la carpeta `public`
              alt="Retrato del Chef" 
              className="rounded-full shadow-2xl w-full max-w-xs mx-auto"
            />
          </div>

          {/* Columna de Texto */}
          <div className="md:w-2/3 text-center md:text-left">
            <p className="font-serif text-milpa text-xl">El Corazón de MAÍZ</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maiz-azul mt-2">Chef Alejandro Castillo</h2>
            <p className="mt-6 text-lg text-comal/80">
              Nacido en la sierra de Puebla, el Chef Castillo aprendió de sus abuelas el respeto por la milpa y los secretos de la nixtamalización. Su cocina no solo busca deleitar, sino también preservar las técnicas y sabores que definen nuestra identidad. Cada plato es un tributo a sus raíces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutChef;