// import { useCart } from "../store/cart";
// import { createPreference } from "../lib/api";
// import { Wallet } from "@mercadopago/sdk-react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const Checkout = () => {
     const items = [
    { id: 1, title: "1", unit_price: 1000, quantity: 1 },
  ];
  const total = items.reduce((a, b) => a + b.unit_price * b.quantity, 0);
    return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="divide-y">
            {items.map((i) => (
              <li key={i.id} className="py-3 flex justify-between">
                <span>
                  {i.title} x{i.quantity}
                </span>
                <span>
                  ${(i.unit_price * i.quantity).toLocaleString("es-AR")}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 text-lg font-semibold">
            <span>Total</span>
            <span>${total.toLocaleString("es-AR")}</span>
          </div>
          <button
            className="mt-6 rounded-xl bg-black text-white px-5 py-3"
            disabled
          >
            Pagar (demo)
          </button>
        </>
      )}
    </div>
  );
}


export default Checkout

  // Checkout genérico de ejemplo
  // Simula un carrito con productos hardcodeados
 


