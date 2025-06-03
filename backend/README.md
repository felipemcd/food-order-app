# Food Order API

API REST simples usando Node.js, Express e TypeScript. Os pedidos são salvos em um arquivo JSON local.

## Tecnologias

- Node.js
- Express
- TypeScript
- CORS
- fs (módulo nativo do Node)

## Como rodar

cd backend
npm install
npm run dev

Servidor em: http://localhost:3001

## Rotas da API

GET /orders
Retorna todos os pedidos.

POST /orders
Cria um novo pedido.
Body:
{
  "customer": "Felipe",
  "items": ["Pizza", "Coca-Cola"]
}

PUT /orders/:id
Atualiza o status do pedido.
Body:
{
  "status": "completed"
}

DELETE /orders/:id
Remove um pedido pelo ID.

## Autor

Felipe Macedo - https://github.com/felipemcd
