import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    // 1. El color de fondo principal (`bg-masa`) se pone en el contenedor raíz
    <div className="relative min-h-screen bg-masa">
      <ParticleBackground />
      
      {/* 2. El contenedor del contenido ya no necesita color de fondo, será transparente */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;