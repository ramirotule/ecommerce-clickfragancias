// import { useCart } from '../store/cart'


export default function ProductCard() {
	// Mock de producto
	const p = {
		id: 1,
		title: "1",
		image: "https://via.placeholder.com/150",
		family: "Mock Family",
		price: 1000,
	};
	// const add = useCart(s => s.add)
	return (
		<div className="rounded-2xl border p-4 flex flex-col gap-3">
			<img src={p.image} alt={p.title} className="aspect-square object-cover rounded-xl" />
			<div className="font-medium">{p.title}</div>
			<div className="text-sm text-slate-500">{p.family}</div>
			<div className="text-lg font-semibold">${p.price.toLocaleString('es-AR')}</div>
			<button
				// onClick={() => add({ id: p.id, title: p.title, unit_price: p.price })}
				className="mt-auto rounded-xl bg-black text-white py-2"
				disabled
			>
				Agregar
			</button>
		</div>
	);
}