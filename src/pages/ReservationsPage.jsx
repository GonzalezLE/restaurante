import { useState } from 'react';

function ReservationsPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    personas: 2,
    fecha: '',
    hora: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const telefonoRestaurante = '5212221234567'; // 🔴 RECUERDA CAMBIAR ESTE NÚMERO
    const { nombre, personas, fecha, hora } = formData;
    const mensaje = `¡Hola! Me gustaría hacer una reservación:
*Nombre:* ${nombre}
*Número de personas:* ${personas}
*Fecha:* ${fecha}
*Hora:* ${hora}

Quedo a la espera de su confirmación. ¡Gracias!`;
    const urlWhatsapp = `https://wa.me/${telefonoRestaurante}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsapp, '_blank');
  };

  return (
    <div className=" animate-fade-in-up">
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        {/* --- TÍTULO --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-maiz-azul">Contacto y Reservaciones</h1>
          <p className="mt-4 text-lg text-comal/80">
            Estamos en el corazón del Centro Histórico de Puebla. Encuéntranos o solicita tu mesa.
          </p>
        </div>

        {/* --- SECCIÓN PRINCIPAL: MAPA Y FORMULARIO LADO A LADO --- */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Columna Izquierda: MAPA */}
          <div className="w-full h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.221118175546!2d-98.19684650507796!3d19.03687492863858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0eee08bff4b%3A0x490b3db638ded79c!2sBarrio%20de%20Analco%2C%20Heroica%20Puebla%20de%20Zaragoza%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1758821578830!5m2!1ses-419!2smx"
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          {/* Columna Derecha: FORMULARIO */}
          <div className="bg-masa p-8 rounded-lg shadow-xl border border-comal/10">
            <h3 className="font-serif text-3xl text-maiz-azul">Reservar una Mesa</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-comal font-bold mb-1">Nombre Completo</label>
                <input type="text" name="nombre" id="nombre" required className="w-full p-2 border border-comal/20 rounded-md focus:ring-elote focus:border-elote" value={formData.nombre} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="personas" className="block text-comal font-bold mb-1">Personas</label>
                  <input type="number" name="personas" id="personas" min="1" max="12" required className="w-full p-2 border border-comal/20 rounded-md focus:ring-elote focus:border-elote" value={formData.personas} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="fecha" className="block text-comal font-bold mb-1">Fecha</label>
                  <input type="date" name="fecha" id="fecha" required className="w-full p-2 border border-comal/20 rounded-md focus:ring-elote focus:border-elote" value={formData.fecha} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label htmlFor="hora" className="block text-comal font-bold mb-1">Hora</label>
                <input type="time" name="hora" id="hora" required className="w-full p-2 border border-comal/20 rounded-md focus:ring-elote focus:border-elote" value={formData.hora} onChange={handleChange} />
              </div>
              <p className="text-sm text-comal/60 pt-2">* Tu reservación está sujeta a confirmación por parte del restaurante.</p>
              <button type="submit" className="w-full mt-4 bg-milpa text-masa font-bold py-3 px-5 rounded-full hover:bg-elote hover:text-comal transition-all duration-300">
                Reservar por WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* --- SECCIÓN INFERIOR: INFO ADICIONAL --- */}
        <div className="mt-16 pt-8 border-t border-dashed border-milpa/20 text-center grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl text-milpa">Horarios</h3>
              <p className="text-comal/80 mt-2">Mar - Sáb: 1pm - 10pm</p>
              <p className="text-comal/80">Dom: 1pm - 6pm</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-milpa">Ubicación</h3>
              <p className="text-comal/80 mt-2">Callejón de los Sapos #123, Centro Histórico, Puebla, PUE.</p>
            </div>
             <div>
              <h3 className="font-serif text-2xl text-milpa">Teléfono</h3>
              <p className="text-comal/80 mt-2">222 123 4567</p>
            </div>
        </div>

      </div>
    </div>
  );
}

export default ReservationsPage;