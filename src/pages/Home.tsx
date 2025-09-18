import fraganciasImg from "../assets/categorias/fragancias.png";
import makeupImg from "../assets/categorias/makeup.png";
import bodysplashImg from "../assets/categorias/bodysplash.png";
import aromatizantesImg from "../assets/categorias/aromatizantes.png";
import cremasImg from "../assets/categorias/cremas.png";
import aceitesImg from "../assets/categorias/aceites.png";
import bebesImg from "../assets/categorias/bebes.png";
import skincareImg from "../assets/categorias/skincare.png";
import cabelloImg from "../assets/categorias/cabello.png";

import ateneasImg from "../assets/productos/ateneas.webp";
import marrakechImg from "../assets/productos/marrakech-erba-pura-50ml.jpg";
import parisImg from "../assets/productos/paris-la-vida-es-bella-50ml.jpg";

const novedades = [
  { id: 1, title: "Very Good Girl 90ml - UNLOCK", price: 25000, image: "https://via.placeholder.com/200x200?text=Novedad+1" },
  { id: 2, title: "Aromas del Zodíaco - Aromatizante 125ml", price: 8000, image: "https://via.placeholder.com/200x200?text=Novedad+2" },
  { id: 3, title: "Armani SI 100ml - UNLOCK", price: 32000, image: "https://via.placeholder.com/200x200?text=Novedad+3" },
];
const masVendidos = [
  { id: 4, title: "Atenas type Olympea 50ml", price: 12000, image: ateneasImg },
  { id: 5, title: "Bangkok type Black Opium 50ml", price: 12000, image: marrakechImg },
  { id: 6, title: "Ginebra type Baccarat Rouge 540 50ml", price: 12000, image: parisImg },
];

export default function Home() {
  return (
    <div>
      {/* Hero principal */}
      {/* " py-16 text-center */}
        <section className="max-w-6xl mx-auto py-12  ">
        <h2 className="text-3xl font-bold mb-8 text-green-900">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {[
            { name: "Fragancias", icon: fraganciasImg },
            { name: "Make up", icon: makeupImg },
            { name: "Body Splash", icon: bodysplashImg },
            { name: "Aromatizantes", icon: aromatizantesImg },
            { name: "Cremas", icon: cremasImg },
            { name: "Aceites esenciales", icon: aceitesImg },
            { name: "Bebes y Niños", icon: bebesImg },
            { name: "Skincare", icon: skincareImg },
            { name: "Cabello", icon: cabelloImg },
          ].map((cat) => (
            <div key={cat.name} className="bg-gradient-to-br from-green-100 to-green-300 rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <img src={cat.icon} alt={cat.name} className="mb-2 h-16 w-16 object-contain" />
              <div className="text-2xl font-bold text-green-800 mb-2">{cat.name}</div>
              <button className="mt-4 rounded-xl bg-green-900 text-white px-4 py-2 font-semibold hover:bg-green-700 transition">
                Ver productos
              </button>
            </div>
          ))}
        </div>
      </section>

     

      {/* Novedades */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-green-900">Novedades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {novedades.map((n) => (
            <div key={n.id} className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
              <img src={n.image} alt={n.title} className="rounded-xl mb-3 w-32 h-32 object-cover" />
              <div className="font-semibold text-center">{n.title}</div>
              <div className="text-green-700 font-bold mt-2 mb-2">${n.price.toLocaleString('es-AR')}</div>
              <button className="rounded-xl bg-green-700 text-white px-4 py-2 text-sm font-semibold hover:bg-green-900 transition">Comprar</button>
            </div>
          ))}
        </div>
      </section>

      {/* Más vendidos */}
      <section className="bg-pink-50 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-pink-900">Más vendidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {masVendidos.map((m) => (
              <div key={m.id} className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
                <div className="font-semibold text-center mb-3 text-lg">{m.title}</div>
                <div className="text-pink-700 font-bold mt-2 mb-2">${m.price.toLocaleString('es-AR')}</div>
                <button className="rounded-xl bg-pink-700 text-white px-4 py-2 text-sm font-semibold hover:bg-pink-900 transition">Comprar</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
    

      {/* Newsletter */}
      <section className="bg-pink-100 py-12">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2 text-pink-900">¿Querés recibir nuestras ofertas?</h3>
          <p className="mb-4 text-pink-800">¡Registrate ya mismo y comenzá a disfrutarlas!</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="Tu email" className="rounded-xl px-4 py-2 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400" />
            <button type="submit" className="rounded-xl bg-pink-700 text-white px-6 py-2 font-semibold hover:bg-pink-900 transition">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
}
