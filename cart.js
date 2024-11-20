'use strict';

const cart = {
    items: [], //пустой массив для хранения товаров
    totalPrice: 0, //общая стоимость карзины
    count: 0, //количество товаров

    getTotalPrice() {
        return this.totalPrice; //возвращает общую стоимость товара
    },

    calculateItemPrice() {
        this.totalPrice = this.items.reduce((acc, item) => acc +
        (item.price * item.quantity), 0); //Считает общую стоимость
    },

    increaseCount(amount) {
        this.count += amount; //Увеличивает кол-во товаров
    },

    add(name, price, quantity = 1) {
        const item = { name, price, quantity } //создает объект товара
        this.items.push(item); // Добавляет товар в массив items
        this.increaseCount(quantity); // Обновляет кол-во товаров
        this.calculateItemPrice(); // Обновляет общую стоимость
    },

    clear() {
        this.items = []; // очищает массив товаров
        this.totalPrice = 0; // сбрасывает общую ст-ть
        this.count = 0; // сбрасывает кол-вао товаров
    },

    print() {
        console.log(JSON.stringify(this.items, null, 2)); //выводим товары в формате JSON
        console.log(`Общая стоимость корзины ${this.getTotalPrice()} руб.`); // выводим общую ст-ть
    },
};

//Добавляем товары в корзину
cart.add('Бананы', 150, 2); //добавили товар
cart.add('Груши', 280, 3);
cart.add('Мандарины', 350, 10);

cart.print(); // выводим информацию о корзине