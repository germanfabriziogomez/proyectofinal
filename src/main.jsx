import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import CrearReceta from './componentes/seccion-receta/SeccionReceta'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <CrearReceta />
    </main>
    <Footer />
  </StrictMode>,
)
