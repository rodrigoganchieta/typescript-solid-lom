/*
Princípio da Inversão de Dependência - Dependency Inversion Principle:

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
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const enterpriseCustomer = new EnterpriseCustomer(
  'Rodrigo Anchieta',
  '1111111111111111',
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Drums', 755.5));
shoppingCart.addItem(new Product('Electric Guitar', 355.5));
shoppingCart.addItem(new Product('Bass', 255.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
