import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

// Importa tus nuevas páginas
import HomePage from './pages/HomePage.jsx';
import PhilosophyPage from './pages/PhilosophyPage.jsx';
import MenuPage from './pages/MenuPage.jsx'; // <-- 1. Importar la nueva página
import DishDetailPage from './pages/DishDetailPage.jsx';
import ReservationsPage from './pages/ReservationsPage.jsx'
import ChefsPage from './pages/ChefsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "filosofia", element: <PhilosophyPage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "menu/:dishId", element: <DishDetailPage /> },
      { path: "reservar", element: <ReservationsPage /> },
      { path: "chefs", element: <ChefsPage /> },
    ],
  },
], {
  // 👇 AÑADE ESTA OPCIÓN CON EL MISMO NOMBRE DE TU REPO 👇
  basename: "/restaurante-final/", // 🔴 ¡DEBE COINCIDIR CON EL `base` DE VITE.CONFIG.JS!
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)