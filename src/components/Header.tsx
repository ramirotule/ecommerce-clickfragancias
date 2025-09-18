// import { useCart } from "../store/cart";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logosmall.png";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  // Mock de items igual que en Checkout
  const items = [
    { id: 1, title: "1", unit_price: 1000, quantity: 1 },
  ];
  const count = items.reduce((a, b) => a + b.quantity, 0);

  // Estado para mostrar/ocultar el submenú de productos
  const [showProducts, setShowProducts] = useState(false);

  // Categorías y subcategorías (mock, puedes adaptar)
  const categorias = [
    {
      title: "FRAGANCIAS",
      subs: ["Árabes", "Femeninas", "Masculinas", "Infieles"],
    },
    {
      title: "HOMENAJES (discontinuados)",
      subs: ["Homenajes Femeninos", "Homenajes Masculinos"],
    },
    {
      title: "COMBOS",
      subs: ["MISTERY BOX", "UNLOCK", "Femeninas", "Masculinas"],
    },
    {
      title: "PERFUMEROS",
      subs: ["MAKE UP", "BODY SPLASH"],
    },
    {
      title: "AROMATIZANTES",
      subs: [],
    },
    {
      title: "CREMAS",
      subs: ["Esenciales", "Perfumadas"],
    },
    {
      title: "BEBÉS Y NIÑOS",
      subs: [],
    },
    {
      title: "SKINCARE",
      subs: ["Patagonia", "Étape", "Semplice"],
    },
    {
      title: "CABELLO",
      subs: [],
    },
    {
      title: "ACEITES ESENCIALES",
      subs: [],
    },
  ];

  return (
    <>
      {/* Header superior: logo y buscador */}
        <div className="w-full py-4 px-4" style={{ background: '#EDEDED' }}>
          <div className="container mx-auto flex flex-row items-center justify-between justify-aroundmin-h-[80px]">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="ClickFragancias logo" className="h-20 w-auto mr-2 drop-shadow" style={{maxHeight:100}} />
            </Link>
            <form className="flex items-center max-w-md w-full ml-6">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="rounded-full py-2 w-full border border-green-200 focus:ring-2 focus:ring-green-900 text-green-900 bg-white"
                  style={{ minWidth: 580, padding: 20 }}
                />
              {/* <button type="submit" className="rounded-r-xl bg-green-900 text-white px-4 py-2 font-semibold hover:bg-green-700 transition">
                Buscar
              </button> */}
            </form>
            <Link to="/checkout" className="relative flex items-center ml-6 text-green-900 font-semibold hover:underline">
              <FiShoppingCart className="text-2xl mr-1" />
              <span className="rounded-full bg-green-900 text-white px-2 text-sm">
                {count}
              </span>
            </Link>
          </div>
        </div>

      {/* Navbar debajo */}
      <nav className="w-full" style={{ background: '#EDEDED' }}>
        <div className="container mx-auto flex gap-6 items-center px-4 py-2">
          <Link to="/" className="text-green-900 font-semibold hover:underline">
            Inicio
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowProducts(true)}
            onMouseLeave={() => setShowProducts(false)}
          >
            <Link
              to="/productos"
              className="text-green-900 font-semibold hover:underline focus:outline-none"
              onClick={() => setShowProducts(false)}
              onMouseEnter={() => setShowProducts(true)}
            >
              Productos
            </Link>
            {showProducts && (
              <div
                className="absolute left-0 mt-2 bg-white border rounded-xl shadow-lg p-6 flex gap-12 min-w-[700px] text-left animate-fade-in"
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
              >
                {categorias.map((cat) => (
                  <div key={cat.title} className="min-w-[120px]">
                    <div className="font-bold mb-1 text-green-900 text-sm uppercase">{cat.title}</div>
                    {cat.subs.length > 0 && (
                      <ul className="space-y-1">
                        {cat.subs.map((sub) => (
                          <li key={sub}>
                            <a href="#" className="text-green-900 hover:text-green-700 text-sm block px-1 py-0.5 rounded">
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/quienes-somos" className="text-green-900 font-semibold hover:underline">
            Quiénes Somos
          </Link>
          <Link to="/contacto" className="text-green-900 font-semibold hover:underline">
            Contacto
          </Link>
          <Link to="/politica-de-envios" className="text-green-900 font-semibold hover:underline">
            Política de envíos
          </Link>
          <div className="flex-1" />
        </div>
      </nav>
    </>
  );
}
