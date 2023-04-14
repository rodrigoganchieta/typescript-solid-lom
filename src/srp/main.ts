/*
Princípio da Responsabilidade Única - Single Responsibility Principle:

Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

- Classes de baixo nível são classes que executam tarefas (os detalhes)
- Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Drums', 711.1));
shoppingCart.addItem(new Product('Electric Guitar', 311.1));
shoppingCart.addItem(new Product('Bass', 211.1));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
