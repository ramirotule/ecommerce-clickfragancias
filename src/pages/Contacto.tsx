import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
    // Aquí podrías agregar lógica para enviar el formulario
  }

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-6 text-green-900">Contacto</h1>
      <div className="mb-8 space-y-2 text-lg">
        <div>
          <a href="https://wa.me/542954824618" className="text-green-600 font-semibold hover:underline" target="_blank" rel="noopener">WhatsApp: 2954824618</a>
        </div>
        <div>
          <a href="tel:2954824618" className="text-blue-700 font-semibold hover:underline">Teléfono: 2954824618</a>
        </div>
        <div>
          <a href="mailto:clickfragancias@gmail.com" className="text-green-700 font-semibold hover:underline">clickfragancias@gmail.com</a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 grid gap-4 max-w-xl mx-auto">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          rows={4}
          required
        />
        <button type="submit" className="rounded-xl bg-green-700 text-white px-6 py-2 font-semibold hover:bg-green-900 transition">
          Enviar
        </button>
        {enviado && <div className="text-green-600 font-semibold mt-2">¡Mensaje enviado! Nos contactaremos pronto.</div>}
      </form>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <a href="https://wa.me/542954824618" target="_blank" rel="noopener" className="rounded-xl bg-green-500 text-white px-6 py-2 font-semibold hover:bg-green-700 transition">WhatsApp</a>
        <a href="https://instagram.com/clickfragrancias" target="_blank" rel="noopener" className="rounded-xl bg-green-700 text-white px-6 py-2 font-semibold hover:bg-green-900 transition">Instagram</a>
        <a href="https://www.facebook.com/clickfragancias" target="_blank" rel="noopener" className="rounded-xl bg-blue-700 text-white px-6 py-2 font-semibold hover:bg-blue-900 transition">Facebook</a>
      </div>
    </section>
  );
}
