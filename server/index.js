dotenv.config()
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'
import db from './firebase.js'
dotenv.config()
// Endpoint para obtener productos desde Firebase
app.get('/api/productos', async (req, res) => {
	try {
		const snapshot = await db.collection('productos').get();
		const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
		res.json(productos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Endpoint para obtener categorías desde Firebase
app.get('/api/categorias', async (req, res) => {
	try {
		const snapshot = await db.collection('categorias').get();
		const categorias = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
		res.json(categorias);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});


const app = express()
app.use(cors())
app.use(express.json())


const MP_API = 'https://api.mercadopago.com/checkout/preferences'
const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN


app.post('/api/create_preference', async (req, res) => {
try {
const { items, payer, shipment_cost = 0 } = req.body


const body = {
items: items.map(p => ({
title: p.title,
description: p.description || 'Perfume Bagués',
quantity: p.quantity,
currency_id: 'ARS',
unit_price: Number(p.unit_price)
})),
back_urls: {
success: process.env.PUBLIC_URL + '/checkout/success',
failure: process.env.PUBLIC_URL + '/checkout/failure',
pending: process.env.PUBLIC_URL + '/checkout/pending'
},
auto_return: 'approved',
shipments: { cost: Number(shipment_cost), mode: 'not_specified' },
payer,
metadata: { source: 'bagues-store', city: 'Santa Rosa' }
}


const mpRes = await fetch(MP_API, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer ${ACCESS_TOKEN}`,
},
body: JSON.stringify(body)
})
const data = await mpRes.json()
if (!mpRes.ok) throw new Error(JSON.stringify(data))
res.json({ id: data.id })
} catch (e) {
console.error(e)
res.status(500).json({ error: 'mp_preference_error' })
}
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));