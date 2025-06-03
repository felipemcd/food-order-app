import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { Order } from '../types/Order';

const router = Router();
const filePath = path.join(__dirname, '..', 'data', 'orders.json');

const readOrders = (): Order[] => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeOrders = (orders: Order[]) => {
  fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));
};

router.get('/', (_req, res) => {
  const orders = readOrders();
  res.json(orders);
});

router.post('/', (req, res) => {
  const { customer, items } = req.body;
  const orders = readOrders();
  const newOrder: Order = {
    id: Date.now(),
    customer,
    items,
    status: 'pending'
  };
  orders.push(newOrder);
  writeOrders(orders);
  res.status(201).json(newOrder);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const orders = readOrders();
  const order = orders.find(o => o.id === Number(id));
  if (!order) return res.status(404).json({ error: 'Order not found' });

  order.status = status;
  writeOrders(orders);
  res.json(order);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  let orders = readOrders();
  const order = orders.find(o => o.id === Number(id));
  if (!order) return res.status(404).json({ error: 'Order not found' });

  orders = orders.filter(o => o.id !== Number(id));
  writeOrders(orders);
  res.status(204).send();
});

export default router;
