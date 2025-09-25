import { chefsData } from '../data/chefsData';
import SectionDivider from '../components/SectionDivider';

function ChefsPage() {
  return (
    <div className="animate-fade-in-up">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-maiz-azul">Nuestro Colectivo Culinario</h1>
          <p className="mt-4 text-lg text-comal/80">
            Conoce a las mentes y manos detrás de cada platillo. Guardianes de la tradición, innovadores por vocación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {chefsData.map((chef) => (
            // 👇 --- AÑADE ESTAS CLASES AQUÍ --- 👇
            <div key={chef.id} className="rounded-lg shadow-xl overflow-hidden bg-masa border-t-4 border-milpa transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
              
              <div className="h-80 w-full">
                <img 
                  src={chef.imagen}
                  alt={`Retrato de ${chef.nombre}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-8 text-center">
                <p className="font-serif text-milpa text-lg">{chef.titulo}</p>
                <h2 className="font-serif text-3xl font-bold text-comal mt-1">{chef.nombre}</h2>
                
                <div className="flex justify-center my-4">
                  <svg className="w-6 h-6 text-milpa/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.5C16 11.5 14.5 13.5 12 13.5C9.5 13.5 8 11.5 8 8.5C8 5.5 12 1.5 12 1.5C12 1.5 16 5.5 16 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13.5V22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.5C11 22.5 10.5 20.5 9 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.5C13 22.5 13.5 20.5 15 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <p className="text-comal/90 leading-relaxed max-w-lg mx-auto">
                  {chef.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider />
    </div>
  );
}

export default ChefsPage;