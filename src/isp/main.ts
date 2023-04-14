/*
Princípio da segregação de Interface - Interface Segregation Principle:

Os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
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

shoppingCart.addItem(new Product('Drums', 744.4));
shoppingCart.addItem(new Product('Electric Guitar', 344.4));
shoppingCart.addItem(new Product('Bass', 244.4));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
