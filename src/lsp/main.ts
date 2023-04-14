/*
Princípio da substituição de Liskov - Liskov Substitution Principle:

Uma classe deve ter apenas uma responsabiidade e não deve fazer mais do que aquilo para o qual foi projetada.
*/
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Drums', 733.3));
shoppingCart.addItem(new Product('Electric Guitar', 333.3));
shoppingCart.addItem(new Product('Bass', 233.3));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
