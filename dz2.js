const cart = cartObj();
console.log(cart);

let i = 9000;
let menu = 'Вы заказали ';
for(const key in cart) {
    menu = menu + `${key}`;
    for(const newKey in cart[key]) {
        menu = newKey == 'info' ? menu + ` ${cart[key][newKey]}, ` : menu + '';
        i = newKey == 'price' ? i + cart[key][newKey] : i;
    }
}
console.log(`${menu} | Общая стоимо ${i} сумм с доставкой (9000)`);
