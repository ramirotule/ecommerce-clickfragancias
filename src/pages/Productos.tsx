import { useState } from "react";
import saharaImg from "../assets/productos/sahara-poison-girl-yara-50ml.jpg";
import marrakechImg from "../assets/productos/marrakech-erba-pura-50ml.jpg";
import parisImg from "../assets/productos/paris-la-vida-es-bella-50ml.jpg";
import espartaImg from "../assets/productos/esparta-invictus-victory-50ml.jpg";
import comboInfielImg from "../assets/productos/combo-infiel-50ml.jpg";

// Mock de categorías y subcategorías
const categorias = [
  {
    nombre: "FRAGANCIAS",
    subcategorias: ["Árabes", "Femeninas", "Masculinas", "Homenajes"],
  },
  {
    nombre: "HOMENAJES (discontinuados)",
    subcategorias: ["Homenajes Femeninos", "Homenajes Masculinos"],
  },
  {
    nombre: "COMBOS",
    subcategorias: ["MISTERY BOX", "UNLOCK", "Femeninas", "Masculinas"],
  },
  {
    nombre: "PERFUMEROS",
    subcategorias: ["MAKE UP", "BODY SPLASH"],
  },
  {
    nombre: "AROMATIZANTES",
    subcategorias: [],
  },
  {
    nombre: "CREMAS",
    subcategorias: ["Esenciales", "Perfumadas"],
  },
  {
    nombre: "BEBÉS Y NIÑOS",
    subcategorias: [],
  },
  {
    nombre: "SKINCARE",
    subcategorias: ["Patagonia", "Étape", "Semplice"],
  },
  {
    nombre: "CABELLO",
    subcategorias: [],
  },
  {
    nombre: "ACEITES ESENCIALES",
    subcategorias: [],
  },
];

export default function Productos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState<string | null>(null);

  // Mock de productos basado en la página de referencia
  const productos = [
    {
      id: 1,
      nombre: "Sahara type Poison Girl o Yara",
      categoria: "FRAGANCIAS",
      subcategoria: "Árabes",
      tamanio: "50ml",
      precio: 10000,
      imagen: saharaImg,
    },
    {
      id: 2,
      nombre: "Marrakech type Erba Pura Xerjoff",
      categoria: "FRAGANCIAS",
      subcategoria: "Árabes",
      tamanio: "50ml",
      precio: 10000,
      imagen: marrakechImg,
    },
    {
      id: 3,
      nombre: "Paris type La vida es bella Lancome",
      categoria: "FRAGANCIAS",
      subcategoria: "Femeninas",
      tamanio: "50ml",
      precio: 10000,
      imagen: parisImg,
    },
    {
      id: 4,
      nombre: "Esparta Victory type Invictus Victory",
      categoria: "FRAGANCIAS",
      subcategoria: "Masculinas",
      tamanio: "50ml",
      precio: 10000,
      imagen: espartaImg,
    },
    {
      id: 5,
      nombre: "Combo Infiel: Esparta + Las Vegas + Bad Boy + Detroit",
      categoria: "FRAGANCIAS",
      subcategoria: "Homenajes",
      tamanio: "50ml",
      precio: 25000,
      imagen: comboInfielImg,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-green-900">Productos</h1>
      <div className="flex gap-4 mb-6">
        {/* Filtro de categorías */}
        <select
          className="border border-green-200 rounded px-3 py-2 text-green-900"
          value={categoriaSeleccionada || ""}
          onChange={e => {
            setCategoriaSeleccionada(e.target.value);
            setSubcategoriaSeleccionada(null);
          }}
        >
          <option value="">Todas las categorías</option>
          {categorias.map(cat => (
            <option key={cat.nombre} value={cat.nombre}>{cat.nombre}</option>
          ))}
        </select>
        {/* Filtro de subcategorías */}
        {categoriaSeleccionada && (
          <select
            className="border border-green-200 rounded px-3 py-2 text-green-900"
            value={subcategoriaSeleccionada || ""}
            onChange={e => setSubcategoriaSeleccionada(e.target.value)}
          >
            <option value="">Todas las subcategorías</option>
            {categorias.find(cat => cat.nombre === categoriaSeleccionada)?.subcategorias.map(sub => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        )}
      </div>
      {/* Listado de productos filtrados (mock) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos
          .filter(p =>
            (!categoriaSeleccionada || p.categoria === categoriaSeleccionada) &&
            (!subcategoriaSeleccionada || p.subcategoria === subcategoriaSeleccionada)
          )
          .map(producto => (
            <div key={producto.id} className="border rounded-lg p-4 text-center text-green-900 bg-white shadow flex flex-col items-center">
              <img src={producto.imagen} alt={producto.nombre} className="w-28 h-28 object-cover mb-2 rounded" />
              <div className="font-semibold mb-1">{producto.nombre}</div>
              <div className="text-sm text-green-700 mb-1">{producto.subcategoria} - {producto.tamanio}</div>
              <div className="font-bold mb-2">${producto.precio.toLocaleString()}</div>
              <button className="bg-green-900 text-white px-4 py-1 rounded-full hover:bg-green-700 transition text-sm">Agregar al carrito</button>
            </div>
          ))}
      </div>
    </div>
  );
}
